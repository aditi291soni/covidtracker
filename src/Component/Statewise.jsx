import React from 'react';
import { useEffect,useState } from 'react';



const Statewise = () => {
    const [data, setdata] = useState([]);
    const getCovidData= async ()=>{
        const res =await fetch('https://data.covid19india.org/data.json');
        const actualData =await res.json();
        
        setdata(actualData.statewise);
        console.log(data);
        
       }
    useEffect(() => {
    getCovidData();
    }, []);
  return (
    <>
      <div className="main">
          <h1>INDIA COVID-19 DASHBOARD</h1>
      </div>
      <table>
      <thead>
      <tr>
    <th >State</th>
    <th>Confirmed</th>
    <th>Recovered</th>
    
    <th >Deads</th>
    <th>Active</th>
    <th>Updated</th>
  </tr>
  </thead>


  {data.map((elem,index)=>{
      console.log(elem)
return (<tr>
    <th >{elem.state}</th>
    <th>{elem.confirmed}</th>
    <th>{elem.recovered}</th>
    
    <th >{elem.deaths}</th>
    <th>{elem.active}</th>
    <th>{elem.lastupdatedtime}</th>
  </tr>

  )
  
  })}
      </table>
    </>
  );
}

export default Statewise;
