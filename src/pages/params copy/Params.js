import MessagesAlert from 'components/Alert/MessagesAlert';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import React, { useState } from 'react';

export default function Params() {
    const [data, setData] = useState("")
    const [transData, setTransData] = useState("")
    const [lineHeight, setLineHeight] = useState(4)
    const [alert, setAlert] = useState(null)
    const [typeTran, setTypeTran] = useState("tags");

    const onClickTranForm = (_data) => {
      
    }
    

    const onClearData = () => {
      setData("")
      setTransData("")
      setLineHeight(4)
  }

  const onClickCopy = (text) => {
      setAlert({ type : 'success', text : "คัดลอก สำเร็จ !" })
      navigator.clipboard.writeText(text) 
  }

  const renderInputType = (type) => {
    if(type === "tags"){
      return (
        <>
          <h6>Float Label</h6>
          <div className="grid">
            <div className="col-12 md:col-2">
                <div className="field-radiobutton">
                    <RadioButton inputId="typeTran1" name="typeTran" value="tags" checked={typeTran === 'tags'} onChange={(e) => setTypeTran(e.value)} />
                    <label htmlFor="typeTran1">Tags/Service</label>
                </div>
            </div>
            <div className="col-12 md:col-2">
                <div className="field-radiobutton">
                    <RadioButton inputId="typeTran2" name="typeTran" value="params" checked={typeTran === 'params'} onChange={(e) => setTypeTran(e.value)} />
                    <label htmlFor="typeTran2">Params</label>
                </div>
            </div>
          </div>
        </>
      )
    }

  }
  

    return (
        <>
            <MessagesAlert alert={alert} setAlert={setAlert} />
            <div className="grid">
                <div className="col-12 md:col-12">
                    <div className="card p-fluid">
                        <h5>Transform Param</h5>
                        <br />
                        <h6>Tranform Type</h6>
                        <div className="grid">
                          <div className="col-12 md:col-2">
                              <div className="field-radiobutton">
                                  <RadioButton inputId="typeTran1" name="typeTran" value="tags" checked={typeTran === 'tags'} onChange={(e) => setTypeTran(e.value)} />
                                  <label htmlFor="typeTran1">Tags/Service</label>
                              </div>
                          </div>
                          <div className="col-12 md:col-2">
                              <div className="field-radiobutton">
                                  <RadioButton inputId="typeTran2" name="typeTran" value="params" checked={typeTran === 'params'} onChange={(e) => setTypeTran(e.value)} />
                                  <label htmlFor="typeTran2">Params</label>
                              </div>
                          </div>
                        </div>
                        {renderInputType(typeTran)}

                        <div className="field">
                            <label htmlFor="url">Data</label>
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-book"></i>
                                </span>
                                <InputText id="username" type="text" placeholder="Data for Tranform ..." value={data} onChange={(e) => setData(e.target.value)} />
                            </div>
                        </div>
                        <div className="field">
                            <Button className="p-button-raised w-10rem mr-2" label="Transform" icon="pi pi-arrow-right-arrow-left" onClick={() => onClickTranForm(data)} />
                            <Button className="p-button-raised p-button-warning w-10rem" label="Clear Data" icon="pi pi-undo" onClick={() => onClearData()} />
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
