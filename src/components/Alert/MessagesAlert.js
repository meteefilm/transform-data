import { Toast } from 'primereact/toast';
import React, { useEffect, useRef } from 'react';

export default function MessagesAlert({alert,setAlert}) {

    const toast = useRef(null);

    useEffect(() => {
        const showMessages = (severity = "error", summary = "", detail = "", sticky = true) => {
            toast.current.show({ severity: severity, summary: summary, detail: detail, life: 2000});
        };

        let type = alert && alert.type?alert.type:'warn'
        let summary = (type === 'error')?"เกิดข้อผิดพลาด":"แจ้งเตือน";

        if (alert && alert.response && alert.response) {
            let {status ,message , error,statusText  } = alert.response;
            message = message?message:error;
            message = message !== ""?message:statusText
            showMessages('error', `เกิดข้อผิดพลาด Status Code : ${status}`, `${message}`);

        }else if (alert && alert.errorcode !== undefined && (alert.errorcode > 0 || alert.errorcode !== "0")) {
            let { errormessage  } = alert;
            showMessages('error', `เกิดข้อผิดพลาด `, `${errormessage}`);

        }else if(alert && alert.text) {
            showMessages(type, summary, `${alert.text}`,"");
            setAlert(null)
        }else if(alert && alert.message ){
            //500 
            showMessages("error", `เกิดข้อผิดพลาด `, `การเรียก Web Service มีข้อผิดพลาด`,"");
            setAlert(null)

        } else if(alert !== null) {
            showMessages("error", summary , `ส่ง Parameterไม่ครบ หรือส่งค่าไม่ถูกต้อง`,"");
            setAlert(null)
        }
    }, [alert,setAlert])

    return (
        <>
            <Toast 
                className='text-xl' 
                ref={toast} 
                position="top-right" 
                style={{width :'auto' , minWidth:'25rem', whiteSpace: "pre-wrap", float: "left" }} 
            />
        </>
    )
}

