import MessagesAlert from 'components/Alert/MessagesAlert';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react';
import { NullString } from 'utility-fns';
import { onCopyText } from 'utils/CopyUtils';

export default function SetEntity() {
    const [data, setData] = useState('');
    const [tagName, setTagName] = useState("entity")
    const [alert, setAlert] = useState(null);
    const [lineHeight, setLineHeight] = useState(4);
    const [transData, setTransData] = useState('');

    const onClickSubmit = (_data) => {
        if (_data && NullString(_data) !== '') {
            opnTransFormData(_data);
        } else {
            setAlert({ type: 'warn', text: 'กรุณาใส่ข้อมูลที่ต้องการ transform !!' });
        }
    };

    const opnTransFormData = (_data) => {
        let list =  _data.split(',')
        let newData = ""
        list.forEach(e => {
            let lowerCase = e.toLowerCase().trim()
            let pascal = renderPascal(lowerCase)
            // newData += pascal+'\n'
            newData += tagName+".set"+pascal+"(requestBody.getData().get"+pascal+"());\n";
            setLineHeight((preState) => preState + 1);
        });
        setTransData(newData)
    }

    const renderPascal = (text = '') => {
        if (text) {
            let _text = text.split('_');
            let newData = '';
            _text.forEach((e) => {
                newData += e.charAt(0).toUpperCase() + e.slice(1);
            });
            text = newData;
        }
        return text;
    };

    const onClearData = () => {
        setData('');
        setLineHeight(4);
        setTransData('');
        setTagName('entity')
    };

    const onClickCopy = (text) => {
        onCopyText(text);
        setAlert({ type: 'success', text: 'Copy Success !' });
    };

    return (
        <>
            <MessagesAlert alert={alert} setAlert={setAlert} />
            <div className="grid">
                <div className="col-12 md:col-12">
                    <div className="card p-fluid">
                        <h5>Transform Service Set Entity</h5>
                        <br />
                        <div className="grid">
                            <div className="col-12 ">
                                <div className="p-fluid formgrid grid ">
                                        <div className="field col-12 md:col-4">
                                            <label htmlFor="url">App Name</label>
                                            <div className="p-inputgroup">
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-hashtag"></i>
                                                </span>
                                                <InputText id="tagName" type="text" className="font-bold" placeholder="Data for transform ..." value={tagName} onChange={(e) => setTagName(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                <div className="p-fluid formgrid grid ">
                                    <div className="field col-12 ">
                                        <label htmlFor="url">Data</label>
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-book"></i>
                                            </span>
                                            <InputTextarea id="text" type="text" placeholder="Data for transform ..." value={data} onChange={(e) => setData(e.target.value)} />
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
                        <div className="field">
                            <Button className="p-button-outlined p-button-secondary w-3rem mb-1" onClick={() => onClickCopy(transData)} icon="pi pi-copy" disabled={transData === ''} />
                            <InputTextarea id="transData" rows={lineHeight} value={transData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
