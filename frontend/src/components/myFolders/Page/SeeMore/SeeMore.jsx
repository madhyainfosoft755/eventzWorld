import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./SeeMore.css"

const SeeMore = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching item details for id:", id);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4113/create_post/getCreatePostbyid/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setItemDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item details:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(()=>{
  //   console.log(itemDetails,"jdjsndsd")

  // },[itemDetails])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!itemDetails) {
    return <div>No data found for the given id.</div>;
  }

  return (
    <div className='see-more-container' style={{backgroundColor:"antiquewhite",  height: "100vh"}}>
    <div className="item-box">
     <img  className="image-title item-image" src={`http://localhost:4113/image/${itemDetails[0].image}`} alt={itemDetails.title} />
      {/* <h1>{itemDetails[0].id}</h1>  */}
      <div className='item-name'>
      <h3> Event-  {itemDetails[0].name} </h3>
      <p className='item-box'>{itemDetails[0].addres}</p>
      <p className='item-box'>{itemDetails[0].category}</p>
      <p className='item-box'>{itemDetails[0].eventDate}</p>
      <p className='item-box'>{itemDetails[0].eventTime}</p>
      <p className='item-box'>{itemDetails[0].eventVenue}</p>
      
      </div >
        
      </div>
    
      
    
    </div>
  );
};

export default SeeMore;