import React, { useEffect, useState } from 'react'
import { FaFireAlt } from "react-icons/fa";
import '../styles/HomeSearch.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomeSearch = () => {

  const navigate = useNavigate();

  const [search, setSearch] = React.useState('');

  const [searchType, setSearchType] = useState('bodyPart');

  const handleSearch = () => {
    if (search !== '' && searchType === 'bodyPart') {
      navigate(`/bodyPart/${search}`);
      setSearch('');
    } else if (search !== '' && searchType === 'equipment') {
      navigate(`/equipment/${search}`);
      setSearch('');
    }
  }

  const [bodyParts, setBodyParts] = useState([])
  const [equipment, setEquipment] = useState([])

  const bodyPartsOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'ae40549393msh0c35372c617b281p103ddcjsn0f4a9ee43ff0',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const equipmentOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
    headers: {
      'X-RapidAPI-Key': 'ae40549393msh0c35372c617b281p103ddcjsn0f4a9ee43ff0',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  useEffect(() => { 

    fetchData();
  }, [])

  const fetchData = async () =>{
    try {
      const bodyPartsData = await axios.request(bodyPartsOptions);
      console.log(bodyPartsData.data);
      setBodyParts(bodyPartsData.data);

      const equipmentData = await axios.request(equipmentOptions);
      console.log(equipmentData.data);
      setEquipment(equipmentData.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='home-search-component' id='search'>
        <h3>Search for Your Perfect Workout</h3>
        <div className="search-type-buttons">
          <h4>Search by: </h4>
          <span>
            <button className={searchType === 'bodyPart' ? 'active': ''} onClick={()=> setSearchType('bodyPart')} >Body Parts</button>
            <button className={searchType === 'equipment' ? 'active': ''} onClick={()=> setSearchType('equipment')} >Equipment</button>
          </span>
        </div>
        <div className='search-body'>
          {searchType === 'bodyPart' ? 
          
            <select onChange={(e)=> setSearch(e.target.value)} value={search} >
              <option value="">Choose body part</option>
              {bodyParts.map((bodyPart, index) => (
                <option key={index} value={bodyPart}>{bodyPart}</option>
              ))}
            </select>
          :
            <select  onChange={(e)=> setSearch(e.target.value)} value={search}>
              <option value="">Choose Equipment</option>
              {equipment.map((equip, index) => (
                <option key={index} value={equip}>{equip}</option>
              ))}
            </select>
          
          }
            <button onClick={() => handleSearch()} >Search</button>
        </div>
        <div className="popular-categories-container">
            <span>
                <h5>Popular Categories</h5>
                <FaFireAlt className="fire-icon" />
            </span>
            <div className="popular-categories">

              <div className="popular-category" onClick={()=> navigate("/bodyPart/back")} >
                <img src="https://images.pexels.com/photos/8401904/pexels-photo-8401904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Back</p>
              </div>
              <div className="popular-category" onClick={()=> navigate("/bodyPart/cardio")}>
                <img src="https://images.pexels.com/photos/3757377/pexels-photo-3757377.jpeg" alt="" />
                <p>Cardio</p>
              </div>
              <div className="popular-category" onClick={()=> navigate("/equipment/dumbbell")}>
                <img src="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg" alt="" />
                <p>Dumbbells</p>
              </div>
              <div className="popular-category" onClick={()=> navigate("/bodyPart/chest")}>
                <img src="https://images.pexels.com/photos/7675417/pexels-photo-7675417.jpeg" alt="" />
                <p>Chest</p>
              </div>

            </div>
        </div>
    </div>
  )
}

export default HomeSearch