import MessagesAlert from 'components/Alert/MessagesAlert';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';
import { NullString } from 'utility-fns';

export default function Data() {

    const initData = {
        appName : 'APP',
        text : ""
    }
    const [data, setData] = useState(initData);
    const [transData, setTransData] = useState('');
    const [transDataView, setTransDataView] = useState('list');
    const [transDataList, setTransDataList] = useState([]);

    const [transFile, setTransFile] = useState('');
    const [transFileView, setTransFileView] = useState('list');
    const [transFileList, setTransFileList] = useState([]);

    const [lineHeight, setLineHeight] = useState(4);
    const [alert, setAlert] = useState(null);
    const [typeTran, setTypeTran] = useState('file');

    const onChangeType = (e) => {
        let val = e.value
        setTypeTran(val)
        if(data.text !== ""){
            onClickTranForm(data,val)
        }
    }

    const onClickTranForm = (_data,type) => {
        let newText = "", newFile = "",newTextList = [], newFileList = [];
        if(_data  && NullString(_data.text) !== "" ){
            let upperCase =  _data.text.toUpperCase();
            let lowerCase = _data.text.toLowerCase();
            if(type === 'rest'){
                let appName = NullString(_data.appName) !== ""?_data.appName.toUpperCase()+"_":""
                newText = "public final static String SERVICE_NAME_"+appName+upperCase+" = \""+lowerCase+"\";"
                setTransDataView('text')
                // setTypeTran('file')
                
            }else{
                setTransDataView('list')
                setTransFileView('list')


                let pascal = renderPascal(lowerCase)
                newText += "upper :\t"+ upperCase+"\n"
                newTextList.push({ tags : 'upper' , text : upperCase })
                newText += "lower :\t"+lowerCase+"\n"
                newTextList.push({ tags : 'lower' , text : lowerCase })
                newText += "camel :\t"+renderCamel(lowerCase)+"\n"
                newTextList.push({ tags : 'camel' , text : renderCamel(lowerCase) })
                newText += "pascal :\t"+pascal+"\n"
                newTextList.push({ tags : 'pascal' , text : pascal })


                newFile += "resFile :\t"+pascal+"Res\n"
                newFileList.push({ tags : 'resFile' , text : pascal+"Res" })
                newFile += "reqFile :\t"+pascal+"Req\n"
                newFileList.push({ tags : 'reqFile' , text : pascal+"Req" })
                newFile += "toFile :\t"+pascal+"TO\n"
                newFileList.push({ tags : 'toFile' , text : pascal+"TO" })
                newFile += "daoFile :\t"+pascal+"Dao\n"
                newFileList.push({ tags : 'daoFile' , text : pascal+"Dao" })
                newFile += "serviceFile :\t"+pascal+"Service\n"
                newFileList.push({ tags : 'serviceFile' , text : pascal+"Service" })


                setLineHeight(10)
            }
        }else{
            setAlert({ type : 'warn' , text : 'กรุณาใส่ข้อมูลที่ต้องการ Tranform !!' })
        }
        setTransData(newText)
        setTransFile(newFile)
        setTransDataList(newTextList)
        setTransFileList(newFileList)
    };

    const renderCamel = (text="") => {
        if(text){
            let _text = text.split("_")
            let newData = ""
            _text.forEach((e,i)=>{
                newData += (i > 0) ?(e.charAt(0).toUpperCase() + e.slice(1)):e;
            })
            text = newData
        }
        return text
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
        setData(initData);
        setLineHeight(4);
        setTypeTran('file');

        setTransData('')
        setTransDataView('list')
        setTransDataList([]);

        setTransFile('')
        setTransFileView('list')
        setTransFileList([]);
    };

    const onClickCopy = (text) => {
        setAlert({ type: 'success', text: 'คัดลอก สำเร็จ !' });
        navigator.clipboard.writeText(text);
    };

    const renderDataListView = (list =[]) => {
        return list.map(e=>{
            return (
                <div className="p-fluid formgrid grid ">
                    <div className="field col-12 ">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon w-10rem font-bold">{e.tags}</span>
                            <InputText id={e.tags} placeholder="..." value={e.text} />
                            <Button 
                                icon="pi pi-copy" 
                                onClick={() => onClickCopy(e.text)}
                            />
                        </div>
                    </div>
                </div>
            )
        });
    }

    return (
        <>
            <MessagesAlert alert={alert} setAlert={setAlert} />
            <div className="grid">
                <div className="col-12 md:col-12">
                    <div className="card p-fluid">
                        <h5>Transform Param</h5>
                        <br />
                        <div className="grid">
                            <div className="col-12 ">
                                <div className="p-fluid formgrid grid ">
                                    <div className="field col-12 md:col-2">
                                        <div className="field-radiobutton">
                                            <RadioButton inputId="typeTran1" name="typeTran" value="file" checked={typeTran === 'file'} onChange={(e) =>onChangeType(e)} />
                                            <label htmlFor="typeTran1">FileName/Text</label>
                                        </div>
                                    </div>
                                    <div className="field col-12 md:col-2">
                                        <div className="field-radiobutton">
                                            <RadioButton inputId="typeTran2" name="typeTran" value="rest" checked={typeTran === 'rest'} onChange={(e) => onChangeType(e)} />
                                            <label htmlFor="typeTran2">Rest-const</label>
                                        </div>
                                    </div>
                                </div>
                                {
                                    typeTran === 'rest' && (
                                        <div className="p-fluid formgrid grid ">
                                            <div className="field col-12 md:col-4">
                                                <label htmlFor="url">App Name</label>
                                                <div className="p-inputgroup">
                                                    <span className="p-inputgroup-addon">
                                                        <i className="pi pi-hashtag"></i>
                                                    </span>
                                                    <InputText id="appName" type="text" className='font-bold' placeholder="Data for Tranform ..." value={data.appName} onChange={(e) => setData((pre)=>({...pre , appName : e.target.value }))} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="p-fluid formgrid grid ">
                                    <div className="field col-12 ">
                                        <label htmlFor="url">Data</label>
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-book"></i>
                                            </span>
                                            <InputText id="text" type="text" placeholder="Data for Tranform ..."  value={data.text} onChange={(e) => setData((pre)=>({...pre , text : e.target.value }))}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-fluid formgrid grid ">
                                    <div className="field col-12 ">
                                        <Button className="p-button-raised w-10rem mr-2" label="Transform" icon="pi pi-arrow-right-arrow-left" onClick={() => onClickTranForm(data)} />
                                        <Button className="p-button-raised p-button-warning w-10rem" label="Clear Data" icon="pi pi-undo" onClick={() => onClearData()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-12 md:col-12">
                    <div className="card p-fluid">
                        <h5>Result</h5>
                        <br />
                        <div className="grid">
                            <div className="col-12 ">
                                <div className="p-fluid formgrid grid ">
                                    <div className={"field col-12 "+(typeTran === 'file'?"md:col-6":"md:col-12")}>
                                        <h6>Transform Case</h6>
                                        {
                                            typeTran === 'file' && <Button className={classNames("p-button-outlined w-3rem mb-2 mr-2 ",{ "p-button-secondary" : transDataView === 'text' },{ "p-button-success" : transDataView === 'list' && transData !== '' },{ "p-button-secondary" : transData === '' } )} onClick={() => setTransDataView('list')} icon="pi pi-list" disabled={transData === ''} />
                                        }
                                        <Button className={classNames("p-button-outlined w-3rem mb-2 mr-2 ",{ "p-button-secondary" : transDataView === 'list' },{ "p-button-success" : transDataView === 'text' && transData !== '' },{ "p-button-secondary" : transData === '' } )} onClick={() => setTransDataView('text')} icon="pi pi-code" disabled={transData === ''} />
                                        {
                                            transDataView === 'text' && <Button className="p-button-outlined p-button-secondary w-3rem mb-2" onClick={() => onClickCopy(transData)} icon="pi pi-copy" disabled={transData === ''} />
                                        }
                                        {
                                            transDataView === 'list' && renderDataListView(transDataList)
                                        }
                                        {
                                            (transDataView === 'text' || transData === "")  && <InputTextarea id="transData" rows={lineHeight} value={transData} />
                                        }
                                    </div>
                                    {
                                        typeTran === 'file' && (
                                            <div className="field col-12 md:col-6">
                                                <h6>Transform File</h6>
                                                <Button className={classNames("p-button-outlined w-3rem mb-2 mr-2 ",{ "p-button-secondary" : transFileView === 'text' },{ "p-button-success" : transFileView === 'list' && transFile !== '' },{ "p-button-secondary" : transFile === '' } )} onClick={() => setTransFileView('list')} icon="pi pi-list" disabled={transFile === ''} />
                                                <Button className={classNames("p-button-outlined w-3rem mb-2 mr-2 ",{ "p-button-secondary" : transFileView === 'list' },{ "p-button-success" : transFileView === 'text' && transFile !== '' },{ "p-button-secondary" : transFile === '' } )} onClick={() => setTransFileView('text')} icon="pi pi-code" disabled={transFile === ''} />
                                                {
                                                    transFileView === 'text' && <Button className="p-button-outlined p-button-secondary w-3rem mb-2" onClick={() => onClickCopy(transFile)} icon="pi pi-copy" disabled={transData === ''} />
                                                }
                                                {
                                                    transFileView === 'list' && renderDataListView(transFileList)
                                                }
                                                {
                                                    (transFileView === 'text' || transFile === "")  && <InputTextarea id="transData" rows={lineHeight} value={transFile} />
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
