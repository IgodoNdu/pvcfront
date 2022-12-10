import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import '../Entries.css';


function Entries() {

  const [phoneFetch, setPhoneFetch] = useState("");
  const [fetchedData, setFetchedData] = useState("");

  const handleSearch = () => {
    //console.log(phoneFetch);
    const data = axios.get('https://pvcraffle-api.onrender.com/app/entry/get/'+phoneFetch)
        .then((response) => {
          const data = response.data;
          setFetchedData(data);
          console.log(data)
        })
        .catch(() => {
          alert('Error retrieving data');
        });
  }

    const [retrievedData, setRetrievedData] = useState("");

    useEffect(() => {
        const fetchdata = async () => {
            const data = await axios.get('https://pvcraffle-api.onrender.com/app/entry/get');
            //console.log('Entries', data);
            setRetrievedData(data);
        };
        fetchdata();
    }, []);

  return (
    <div id='entries'>
      <h1>Fetch Your Details</h1>
      <p>Lots of nkowa doro anya, Lots of nkowa doro anya,, Lots of nkowa doro anya, Lots of nkowa doro anya,</p>
      <div className='a-container'>
      
      </div>

      <div id='searchDetails'>

        <div className="wrap">
          <div className="search">
              <input type="text" className="searchTerm" placeholder="Search with Phone no" onChange={(e) => setPhoneFetch(e.target.value)} />
              <button type="submit" className="searchButton" onClick={(e)=>handleSearch()} value='FETCH'></button>
          </div>
        </div>

      </div>

      <div className='a-container'>
        {fetchedData.length > 0 &&
          <Card 
          key={fetchedData[0].raffleNo}
          lastName={fetchedData[0].lastName}
          firstName={fetchedData[0].firstName}
          raffleNo={fetchedData[0].raffleNo}
          myRefCode={fetchedData[0].myRefCode}
          votingState={fetchedData[0].votingState}
          />
          }
      </div>

    </div>
  )
}

export default Entries
