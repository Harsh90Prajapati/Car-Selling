import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';

const SingleFile = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [file, setFile] = useState([]);
 

  
    const options = {
      method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/basic',
    params: {
      country: 'us',
      service: 'netflix',
      type: 'movie',
      genre: '18',
      page: "2",
      output_language: 'en',
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'd810575c63msh48ddf9184bd1246p1f7a2fjsn017d00747986',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
    };
    
  
  useEffect(() => {
    const fetchData = () => {
      axios.request(options).then(function (response) {
       
        setFile(response.data.results);
        console.log(response.data.results, "data");
      }).catch(function (error) {
        console.error(error);
      });
    }
  
    fetchData();
  }, [])

  
    
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 bg-white p-3">
          <img src={file.posterURLs[92]} alt="" />
          <p className="text-xl font-bold py-2">{file.originalTitle}</p>
        <p className="text-gray-400 ">{file.overview}</p>
        <button  className="bg-green-500 w-full text-white my-2">edit file</button>
      </div>
      </div>
  )
}

export default SingleFile