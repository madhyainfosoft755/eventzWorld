import React, { useState ,useEffect} from 'react';
import './PostingBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import Search from '../../Google Search/Search';
import moment from 'moment';
import ImageUploload from '../../../ImageUpoload'
// import AWS from 'aws-sdk';
import { Link } from "react-router-dom";





const PostBox = ({


  
}) =>   {
 


  

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    eventVenue: '',
    eventDate: '',
    eventTime: '',
    text: '',
    image:'',
    video:"",
    audio:"",
    time:"",
    latitude: "", 
    longitude: "",
    formatted_address:"",
  })

  // const [inputs, setInputs] = useState({});
  // const handleInput = (e) => {
    // setInputs({ ...inputs, [e.target.name]: e.target.value });
  // };
 
  const handleLocationChange = (latitude, longitude,formatted_address) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      latitude: latitude,
      longitude: longitude,
      formatted_address:formatted_address,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // You can perform any additional actions here, like submitting the data to a backend API.
    CreatePost();
  };
  

 
  
  const [eventDate, setEventDate] = useState(moment().format('YYYY-MM-DD'));
  const [eventTime, setEventTime] = useState(moment().format('HH:mm'));

  

  
   
  const [image,setimage]=useState(null)
  const [video,setvideo]=useState(null)
  const [audio,setaudio]=useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      
    }));
    console.log(value,"value")
    
  };

  
  const handleInputChange = (event) => {
    const { name, value } = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
    const { name, value } = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleEventTimeChange = (e) => {
    setEventTime(e.target.value);
    const { name, value } = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  


  
  

  const CreatePost = async () => {
    console.log("Form submitted", formData);
  
    const postDataToUpload = new FormData();
    
    let dataToUpload = {...formData}


    // Update the formData object
 
    
  
    postDataToUpload.append("data", JSON.stringify(formData))
    postDataToUpload.append("image", image);
    postDataToUpload.append("video", video);
    postDataToUpload.append("audio", audio);
    postDataToUpload.append("eventDate", JSON.stringify(eventDate))
    postDataToUpload.append("eventTime", JSON.stringify(eventTime))
    const res = await fetch(`http://localhost:4113/create_post/CreatePost`, {
      method: "POST",
      // ContentType: 'application/json',
      body: postDataToUpload ,
    }); 
    const data = await res.json();
    console.log(res);
    console.log(postDataToUpload,"postdata")


  
    if (res.ok) {
      // Successful post submission
      console.log('Post submitted successfully');
      window.location.href = '/ViewPage'; // Redirect to the view page
    } else {
      console.log('Post submission failed');
  };}

  
//image upload function
const handleImageUpload  = (e) =>{
console.log(e.target.files[0]);
setimage(e.target.files[0]);
}
const handleVideoUpload  = (e) =>{
  console.log(e.target.files[0]);
  setvideo(e.target.files[0]);
  }

  const handleaudioUpload  = (e) =>{
    console.log(e.target.files[0]);
    setaudio(e.target.files[0]);
    }

  return (
    <div className="post-box">
    <div>
      <h2>Create a Post</h2>
      <form  onSubmit={handleSubmit}>
       
        <input
          type="text"
          placeholder="Event Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          
          
          className="post-input"
        />
       
       
          <div  className=''  style={{height:"px", paddingLeft: '2rem', paddingBottom: '3px' ,width:"",display: 'flex',
  flexdirection: 'column',
 }}>
            <Search
            // value={formData.addres}
            onLocationChange={handleLocationChange} 
            
            />
          </div>
          

          <select
          
            
            name="category"
            className="post-input"
            value={formData.category}
          onChange={handleChange}
           
          >
            <option value="">Select Event Category</option>
            <option value="cricket">Sport</option>
            {/* <option value="dance"></option> */}
            <option value="Music">Music</option>
            <option value="art">Art</option>
            {/* <option value="football"></option> */}
          </select>
          <input
            type="text"
            placeholder="Event Venue"
            name="eventVenue"
            value={formData.eventVenue}
            onChange={handleChange}
             

            
            
            className="post-input"
          />
             <input
            type="date"
            placeholder="Event Date"
            value={eventDate}
            onChange={handleEventDateChange}
            className="post-input"
          />
          <input
            type="time"
            placeholder="Event Time"
            value={eventTime}
            onChange={handleEventTimeChange}
            className="post-input"
          />

          <div className="input-group upload">
            <label htmlFor="image-upload">
              <FontAwesomeIcon icon={faImage} className="fa-icons" />
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              // value={formData.image}
              onChange={handleImageUpload}
             
              className="post-input hide"
              multiple
            />
            {/* <ImageUploload  /> */}
          </div>

          <div className="input-group upload">
            <label htmlFor="audio-upload">
              <FontAwesomeIcon icon={faMusic} className="fa-icon" />
            </label>
            <input
              id="audio-upload"
              type="file"
              accept="audio/*"
              // onChange={handleInputChange}
              className="post-input hide"
              // value={formData.audio}
              onChange={handleaudioUpload }
            />
          </div>

          <div className="input-group upload">
            <label htmlFor="video-upload">
              <FontAwesomeIcon icon={faVideo} className="fa-con" />
            </label>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              // onChange={handleInputChange}
              className="post-input hide"
              multiple
              // value={formData.video}
              onChange={handleVideoUpload}
            />
          </div>

       

          <textarea
            placeholder="Enter your text here"
            name="text"
            value={formData.text}
            onChange={handleChange}
            
            // onChange={handleInputChange}
            className="post-input text"
          ></textarea>

          <button type="submit" className="post-submit-button">
            Post
          </button>
        </form>


      </div>

      
    </div>
    
  );
};

export default PostBox;
