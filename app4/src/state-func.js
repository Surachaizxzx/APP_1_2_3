import React, { useState } from "react";
export default function MessageBox() {
    let [text, setText] = useState('Hello worold');
    let [size, setsize] = useState(16);
    const onClickSetText = () => {
        let t = prompt('กำหนดความยาว');
        if (t) {
            setText(t);
        }
    }
    const onClickZoomln = () => {
        let newSize = size + 1;
        setsize(newSize);
    }
    let msgboxSyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size,
        backgroundColor: '#ccc',
        padding: 5,
        textAlign: 'left',
    }
    return (
        <div style={{
            textAlign: 'center',
            marginTop: 20
        }}>
            <div style={msgboxSyle}>{text}</div><br /><br />
            <button onClick={onClickSetText}>ข้อความ</button> &nbsp;
            <button onClick={onClickZoomln}>เพิ่มขนาดข้อความ</button> &nbsp;
            <button onClick={() => setsize(size - 1)}>ลดขนาดข้อความ</button> &nbsp;
        </div >
    )
}