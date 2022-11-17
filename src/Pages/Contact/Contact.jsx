import React from 'react';
import "./Contact.css";
const Contact = () => {
  return (
    <>
    <div className="main_contact_form">
        <div className="heading">
        <h1>Contact us</h1>
        </div>
        <div className="inputs">
            <input type="email" placeholder='example@gmail.com' name="" id="" />
            <label htmlFor="">Your queries</label>
            <textarea name="contact" id="contact" cols="30" rows="10"></textarea>
        </div>
        <div className='btn_container'>
            <button className='btn'>Contact</button>
        </div>
    </div>
    </>
  )
}

export default Contact