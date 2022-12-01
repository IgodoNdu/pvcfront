import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';

function Entries() {

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
      <h1>Entries</h1>
      <p>Lots of nkowa doro anya, Lots of nkowa doro anya,, Lots of nkowa doro anya, Lots of nkowa doro anya,</p>
      <div className='a-container'>
        {
            retrievedData && retrievedData?.data.map((retrieved, index) => (<Card 
                key={index}
                imgUrl={retrieved.pvcImage}
                fullname={retrieved.fullname}
                phone={retrieved.phone}
                />))
        }
      </div>
    </div>
  )
}

export default Entries
