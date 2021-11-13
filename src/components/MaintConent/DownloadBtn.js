import React from 'react'
import './DownloadBtn.css'; 

function DownloadBtn(props) {
    return (
        <button className={"DownloadBtn " + props.color } >
            <img src={props.iconBtnSrc} alt={props.iconBtnAlt} className={"downloadBtnIcon"} />
            {props.btnTitle}
        </button>
    )
}

export default DownloadBtn
