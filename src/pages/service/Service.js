import axios from 'axios';
import MessagesAlert from 'components/Alert/MessagesAlert';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react';

export default function Service() {

    const [url, setUrl] = useState("")
    const [transData, setTransData] = useState("")
    const [lineHeight, setLineHeight] = useState(4)
    const [alert, setAlert] = useState(null)

    const onClikcCallDoc = async () => {
        let pathService = "http://localhost:3002/tranform/callapi"
        let data = undefined
        try{
            data = await new Promise(async (resolve, reject) => {
                try {    
                    await axios.post(pathService,{ url })
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((error) => {
                        reject(error);
                    });
                } catch (err) {
                    reject(err);
                } 
            });
        }catch(err){
            setAlert(err);
        }
        if(data && data.errorcode === 0){
            if(data.data && data.data !== null){
                renderTransData(data.data)
            }else{
                setAlert({ type : 'error', text  : 'ไม่สามารถเรียกข้อมูล Swagger Doc ได้!'})

            }
        }else{
            setAlert(data);
        }
    }

    const renderTransData = (_data) => {
        try {
            let serviceList = []
            let headerConst = []
            // let newObj = {}
            let serversName = ""
            let _line = 4;
            serversName =_data.servers ?_data.servers[0].url : _data.basePath
            serversName = serversName.substring(serversName.lastIndexOf("/")+1);
            // console.log('serversName ',serversName);
            let paths = _data.paths
            for(let key in paths){
                let index = key.lastIndexOf("/")
                let newKey = "", pathUrl = "" , servicePath = "", tags = "";
                newKey = key.substring(index+1);
                servicePath = key.substring(index+1);
                newKey = renderPascal(newKey)
                pathUrl = key.substring(0,index);

                let val = paths[key]
                tags = val?.post?.tags[0] || val?.get?.tags[0] || ""
                tags = tags.replaceAll(" ","")
                let findIndex = headerConst.findIndex(e=>e.tags===tags)
                let objectHeader = headerConst[findIndex]
                if(findIndex === -1){
                    objectHeader = {
                        tags :  tags,
                        path : pathUrl
                    }
                    headerConst.push(objectHeader)
                }
                serviceList.push({
                    id : newKey,
                    path : servicePath,
                    service : serversName,
                    tags :objectHeader.tags
                })
            }
            // console.log('newObj ',newObj);
            // console.log('serviceList ',serviceList);
            // console.log('headerConst ',headerConst);

            let text = "";
            //** service name */
            text += "const service = '"+serversName+"'; // or service config \n\n"

            //** Tags list */
            headerConst.forEach((e)=>{
                text += "const "+e.tags+" = '"+e.path+"'; \n"
                _line++
            })

            text +="\n"
            text +="export const "+serversName+" = {\n"

            //** Path list */
            serviceList.forEach((e)=>{
                text += "\t"+e.id+" : { url : "+e.tags+" + '"+e.path+"' , service   },\n"
                _line++
            })
            text += "}"
            _line++


            setLineHeight(_line)
            setTransData(text)
        }catch(err){
            setAlert({ type : 'error', text  : err.toString()})
        }
      
    }

    const renderPascal = (text="") => {
        if(text){
            let _text = text.split("_")
            let newData = ""
            _text.forEach(e=>{
                newData += e.charAt(0).toUpperCase() + e.slice(1);
            })
            text = newData
        }
        return text
    }

    const onClearData = () => {
        setUrl("")
        setTransData("")
        setLineHeight(4)
    }

    const onClickCopy = (text) => {
        setAlert({ type : 'success', text : "คัดลอก สำเร็จ !" })
        navigator.clipboard.writeText(text) 
    }

    return (
        <>
            <MessagesAlert alert={alert} setAlert={setAlert} />
            <div className="grid">
                <div className="col-12 md:col-12">
                    <div className="card p-fluid">
                        <h5>Transform Service</h5>
                        <br/>
                        <div className="field">
                            <label htmlFor="url">URL Swagger Doc</label>
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-link"></i>
                                </span>
                                <InputText id="username" type="text" placeholder="URL..." 
                                    value={url}
                                    onChange={(e)=>setUrl(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <Button 
                                className='p-button-raised w-10rem mr-2' label='Transform' 
                                icon='pi pi-arrow-right-arrow-left' 
                                onClick={()=>onClikcCallDoc(url)}
                            /> 
                            <Button 
                                className='p-button-raised p-button-warning w-10rem' label='Clear Data' icon='pi pi-undo' 
                                onClick={()=>onClearData()}
                            /> 

                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-12">
                    <div className="card p-fluid">
                        <h5>Result</h5>
                        <br/>
                        <div className="field">
                            <Button 
                                className='p-button-outlined p-button-secondary w-3rem mb-1'
                                onClick={() => onClickCopy(transData)  }
                                icon="pi pi-copy"
                                disabled={transData === ""}
                            />
                            <InputTextarea id="transData" rows={lineHeight} value={transData}  />
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}
