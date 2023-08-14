import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './View.css'

const Card = ({ item }) => {
  return (
    <div className="card" style={{ container: 'width' }}>
      {/* <img className="image-title" src={`http://localhost:4113/image/${item.image}`} alt={item.title} /> */}
      <div className="text-holder">
        <h3>{item.name}</h3>
        <p>{item.text}</p>
        <p>{item.addres}</p>
        <p>{item.category}</p>
        <p>{item.eventDate}</p>
        <p>{item.eventTime}</p>
        <p>{item.eventVenue}</p>
        <Link to={`/SeeMore/${item.id}`}>
        <p className="see-more-link">See More</p>
        </Link>
      </div>
    </div>
  );
};


const ViewPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedRange, setSelectedRange] = useState('today');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4113/create_post/getDatabyid');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(nextWeek.getDate() + 3);

    // // const currentDate = new Date();
    // const Tommarrow = new Date(currentDate);
    // nextWeek.setDate(Tommarrow.getDate() + );

  
    let filteredData = items.filter(item => {
      const eventDate = new Date(item.eventDate);
      currentDate.setHours(0, 0, 0, 0);
      return eventDate >= currentDate && eventDate <= nextWeek;
    });
  
    if (selectedRange === 'today') {
      filteredData = filteredData.filter(item => {
        const eventDate = new Date(item.eventDate);
        return eventDate.toDateString() === currentDate.toDateString();
      });
    }
  
    // Sort the filteredData array by event date before setting it to state
    filteredData.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
  
    setFilteredItems(filteredData);
  }, [items, selectedRange]);

  const handleRangeChange = event => {
    setSelectedRange(event.target.value);
  };

  return (
    <div>
    <div className="card">
      <label htmlFor="dateRange">Eventz </label>
      <select style={{width:"10%" ,display:"flex" ,justifyContent:"center"}} id="dateRange" value={selectedRange} onChange={handleRangeChange}>
        <option value="today">Today</option>
        <option value="next7days">Next 3 Days</option>
        {/* <option value="next7days">Next 3 Days</option> */}
        {/* <option value="next7days">Next 1 Days</option> */}
      </select>
    </div>
    <div className="card-list">
      {selectedRange === 'today' && filteredItems.length > 0 && (
        <div>
          <h2>Today's Events</h2>
          {filteredItems.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
      {selectedRange === 'next7days' && filteredItems.length > 0 && (
        <div>
          <h2>Next 3 Days' Events</h2>
          {filteredItems.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
      {selectedRange === 'next7days' && filteredItems.length === 0 && (
        <div>
          <h2>No Events in the Next 3 Days</h2>
        </div>
      )}
    </div>
  </div>
  );
};

export default ViewPage;