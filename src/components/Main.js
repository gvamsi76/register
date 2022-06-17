import React, { useState } from 'react'
import './Main.css'
import logo512 from './logo512.png'
import { useNavigate } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Main() {
    const fileInput = React.createRef();
    const [image, setimgPreview] = useState();


    let navigate = useNavigate()

    const onFileChange = async (event) => {
        try {
            //

            if (event.target.files && event.target.files[0]) {
                // setimage(event.target.files[0]);
                let reader = new FileReader();
                reader.onload = (e) => {
                    //  setpreloadedImage(false);
                    setimgPreview(e.target.result);
                };
                reader.readAsDataURL(event.target.files[0]);
            }
            // Update the state
        } catch (error) {
            console.error('err--', error);
        }
    };

    const hadleImageinpuy = (e) => {
        fileInput.current.click();
    };
    return (
        <div>
            <h2>Add your company details</h2>
            <p>Loerm ipsum is simply dummy text of the printing and typesetting industry.</p><br />
            <form className='form'>
                <div class="text-center">
                    <img src={image ? image : logo512}
                        class="rounded-circle" style={{ width: "100px" }}
                        alt="" /><i style={{ marginRight: "-40px" }} onClick={hadleImageinpuy}
                        >upload your company logo</i>
                    <input style={{ display: "none" }}
                        ref={fileInput}
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onClick={() => {
                            fileInput.current.value = null;
                        }}
                        onChange={(data) => {

                            onFileChange(data);
                        }}
                    />
                </div><br />

                <label className='form-data2'>Company Name</label><br />
                <input className='input' type="text" /><br /><br />

                <label className='form-data'>Email id</label><br />
                <input className='input' type="text" validete /><br /><br />

                <label className='form-data'>Job title</label><br />
                <input type="text" className='input' /><br /><br />

                <label className='form-data1'>Years of expirence</label><br />
                <input type="number" className='input' /><br /><br />
               
                <Checkbox {...label} defaultChecked />
                <b> i accept the <b style={{ color: "orange" }}> Terms and Conditions </b> </b><br />
                
                <button class="btn" onClick={() => navigate('/')}>Back</button> <button className='form-input-btn' onClick={() => navigate('/verifyOTP')}>Send OTP</button>
            </form>
        </div>
    )
}