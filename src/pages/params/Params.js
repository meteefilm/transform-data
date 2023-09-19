import MessagesAlert from 'components/Alert/MessagesAlert';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';
import { NullString } from 'utility-fns';
import { onCopyText } from 'utils/CopyUtils';

export default function Params() {

    const [data, setData] = useState("");
    const [transDataList, setTransDataList] = useState([]);

    const [transFile, setTransFile] = useState('');
    const [transFileView, setTransFileView] = useState('text');
    const [transFileList, setTransFileList] = useState([]);

    const [lineHeight, setLineHeight] = useState(4);
    const [alert, setAlert] = useState(null);
    const [typeTran, setTypeTran] = useState('req');

    const columns = [
        { field: 'text', header: 'Text' },
        { field: 'type', header: 'Type' },
    ];

    const typeList = [
        { value : 'String' , label : 'String' },
        { value : 'Integer' , label : 'Integer ' },
        { value : 'Date' , label : 'Date ' },
        { value : 'Double' , label : 'Double ' },
        { value : 'Boolean' , label : 'Boolean ' },
        { value : 'Byte' , label : 'Byte ' },
        { value : 'long' , label : 'long ' },
    ]

    // useEffect(() => {
    //     onClickSubmit(data)
    // }, [])

    const onClickSubmit = (_data) => {
        let newTextList = [];
        if(_data  && NullString(_data) !== "" ){
            let _list = _data.split(",")
            _list.forEach((e,i)=>{
                let text = e.trim()
                newTextList.push({
                    text ,
                    type : 'String',
                    id : i
                })
            })
            setLineHeight(10)
        }else{
            setAlert({ type : 'warn' , text : 'กรุณาใส่ข้อมูลที่ต้องการ transform !!' })
        }
        setTransDataList(newTextList)
    };

    const onClicktransform = (list=[],type) => {
        let newFile = "", newFileList = [], lineHeight = 4;
        list.forEach((e)=>{
            let text =""
            let lowerCase = e.text.toLowerCase();
            let camelCase = renderCamel(lowerCase)
            let param = "private "+e.type+" "+camelCase+";"
            let column = ""
            if(e.type === "Date"){
                column = "@Temporal(TemporalType.TIMESTAMP)\n"
            }
            column += "@Column(name = \""+lowerCase.toUpperCase()+"\")\n";
            column += param

            if(type === "req"){
                text = param+"\n"
                lineHeight++
            }else if(type === "res"){
                text = column+"\n\n"
                lineHeight+=3
            }
            newFile += text
            newFileList.push({
                tags : camelCase,
                text : text
            })
        })
        setLineHeight(lineHeight)
        setTransFile(newFile)
        setTransFileList(newFileList);

        
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

    const onClearData = () => {
        setData("");
        setLineHeight(4);
        setTypeTran('req');
        setTransDataList([])
        setTransFile('')
        setTransFileView('text')
        setTransFileList([]);
    };

    const onClickCopy = (text) => {
        onCopyText(text)
        setAlert({ type: 'success', text: 'Copy Success !' });
    };


    const textEditor = (rowData, { column }) => {
        const { field = ""} = column.props;
        return <InputText type="text" value={rowData[field]}
            onChange={(e) => onCellEditComplete(e,field,rowData)}
        />;
    };

    const dropEditor = (rowData, { column }) => {
        const { field = ""} = column.props;
        return <Dropdown
            value={rowData[field]}
            onChange={(e) => onCellEditComplete(e,field,rowData)}
            options={typeList}
        />;
    };

    const onCellEditComplete = (e,key , rowData) => {
        let val = (e.target && e.target.value !== undefined)?e.target.value:"";
        const id = key && key !== "" ? key : (e.target && e.target.id) || "";
        let newList = [...transDataList];
        let findIndex =  newList.findIndex((item)=>item.i ===  rowData.i)

        if(findIndex > -1 ){
            newList[findIndex]={
                ...newList[findIndex],
                [id] : val
            }
            setTransDataList(newList)
        }

    };

    const renderFileListView = (list =[],type) => {
        return list.map(e=>{
            return (
                <div className="p-fluid formgrid grid ">
                    <div className="field col-12 ">
                        <div className="p-inputgroup">
                            {
                                type === "req"?
                                <InputText id={e.tags} placeholder="..." value={e.text} />
                                :
                                <InputTextarea id={e.tags} placeholder="..." value={e.text} rows={3} />

                            }
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

    const onChangeType = (e) => {
        let val = e.value
        setTypeTran(val)
        // if(data !== ""){
            onClicktransform(transDataList,val)
        // }
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
                                    <div className="field col-12 ">
                                        <label htmlFor="url">Data</label>
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-book"></i>
                                            </span>
                                            <InputTextarea id="text" type="text" placeholder="Data for transform ..."  value={data} onChange={(e) => setData(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-fluid formgrid grid ">
                                    <div className="field col-12 ">
                                        <Button className="p-button-raised w-10rem mr-2" label="Submit" icon="pi pi-sliders-h" onClick={() => onClickSubmit(data)} />
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
                                    {/* <div className={"field col-12 "+(transData !== ''?"md:col-6":"md:col-12")}> */}
                                    <div className={"field col-12 md:col-6"}>

                                        <h6>Transform Case</h6>
                                        <div className="p-fluid formgrid grid ">
                                            <div className="field col-12 md:col-6">
                                                <div className="field-radiobutton">
                                                    <RadioButton inputId="typeTran1" name="typeTran" value="req" checked={typeTran === 'req'} onChange={(e) =>onChangeType(e)} />
                                                    <label htmlFor="typeTran1">Param - Request</label>
                                                </div>
                                            </div>
                                            <div className="field col-12 md:col-6">
                                                <div className="field-radiobutton">
                                                    <RadioButton inputId="typeTran2" name="typeTran" value="res" checked={typeTran === 'res'} onChange={(e) => onChangeType(e)} />
                                                    <label htmlFor="typeTran2">Entity -Respon</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <Button onClick={() => setTransDataView('text')} icon="pi pi-code" disabled={transData === ''} /> */}
                                        <Button className="p-button-raised w-10rem mr-2" label="Transform" icon="pi pi-arrow-right-arrow-left" onClick={() => onClicktransform(transDataList,typeTran)} disabled={transDataList.length === 0} />
                                        <DataTable value={transDataList} >
                                            {columns.map(({ field, header }) => {
                                                return <Column key={field} field={field} header={header}
                                                    style={{ width: '50%' }} 
                                                    body={field === 'type'? dropEditor : textEditor}
                                                    />;
                                            })}
                                        </DataTable>
                                    </div>
                                    <div className="field col-12 md:col-6">
                                        <h6>Transform File</h6>
                                        <Button className={classNames("p-button-outlined w-3rem mb-2 mr-2 ",{ "p-button-secondary" : transFileView === 'text' },{ "p-button-success" : transFileView === 'list' && transFile !== '' },{ "p-button-secondary" : transFile === '' } )} onClick={() => setTransFileView('list')} icon="pi pi-list" disabled={transFile === ''} />
                                        <Button className={classNames("p-button-outlined w-3rem mb-2 mr-2 ",{ "p-button-secondary" : transFileView === 'list' },{ "p-button-success" : transFileView === 'text' && transFile !== '' },{ "p-button-secondary" : transFile === '' } )} onClick={() => setTransFileView('text')} icon="pi pi-code" disabled={transFile === ''} />
                                        {
                                            transFileView === 'text' && <Button className="p-button-outlined p-button-secondary w-3rem mb-2" onClick={() => onClickCopy(transFile)} icon="pi pi-copy" disabled={transFile === ''} />
                                        }
                                        {
                                            transFileView === 'list' && renderFileListView(transFileList,typeTran)
                                        }
                                        {
                                            (transFileView === 'text' || transFile === "")  && <InputTextarea id="transData" rows={lineHeight} value={transFile} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
