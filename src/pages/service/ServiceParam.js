import MessagesAlert from 'components/Alert/MessagesAlert';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react';
import { onCopyText } from 'utils/CopyUtils';

export default function ServiceParam() {
    const [data, setData] = useState('');
    const [alert, setAlert] = useState(null);
    const [lineHeight, setLineHeight] = useState(4);
    const [transData, setTransData] = useState('');

    const onClickSubmit = (_data) => {
        let newData = {};
        if (_data) {
            try {
                _data = JSON.parse(_data);
                newData = replaceTypeToValue(_data);
            } catch (err) {
                console.log('err ', err.message);
                setAlert({ type: 'warn', text: 'กรุณาใส่ข้อมูลที่เป็น json data !!' });
            }
        }
        newData = JSON.stringify(newData, null, 4);
        setTransData(newData);
    };

    const replaceTypeToValue = (oldVal) => {
        let newVal = {};
        for (let key in oldVal) {
            switch (typeof oldVal[key]) {
                case 'object': {
                    if (Array.isArray(oldVal[key])) {
                        let arr = [];
                        arr = oldVal[key].map((e) => {
                            return replaceTypeToValue(e);
                        });
                        newVal = { ...newVal, [key]: arr };
                    } else {
                        let newSub = {};
                        newSub = replaceTypeToValue(oldVal[key]);
                        newVal = { ...newVal, [key]: newSub };
                    }

                    break;
                }
                case 'number':
                    newVal = { ...newVal, [key]: 0 };
                    break;
                case 'string':
                default:
                    newVal = { ...newVal, [key]: '' };
            }
            setLineHeight((preState) => preState + 1);
        }
        return newVal;
    };

    const onClearData = () => {
        setData('');
        setLineHeight(4);
        setTransData('');
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
                        <h5>Transform Service Param(Request/Response)</h5>
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
