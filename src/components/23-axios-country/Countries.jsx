import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Country from './Country'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [loading, setloading] = useState(true)

    const loadData = async() => { 
      try {
        const resp = await axios.get("https://restcountries.com/v3.1/all");
        console.log(resp.data);
        const arr = resp.data.map(country=>({
            ccn3:country.ccn3,
            flag : country.flags.png,
            name : country.name.common,
            population : country.population,
			// ? ger null gelirse hata verme
            capital : country.capital?.join("-"),
          //  currencies :item.currencies ? Object.keys(item.currencies).join("-") :""
            currencies :country.currencies ? Object.keys(country.currencies).map(item=>country.currencies[item].name).join("-") :""
          }))
//gelen diziden yeni dizi oluşturuldu çünkü gelen cevaptaki tüm alanlar lazım değil lazım olanlardan eni bir dizi oluşturuldu
        setCountries(arr);
        setloading(false)
        
      } catch (error) {
        console.log(error);
      }
    }

   useEffect(()=>{loadData()}, [])
    
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Sıra</th>
        <th>Bayrak </th>
        <th>Ülke</th>
        <th>Nüfus</th>
        <th>Başkent</th>
        <th>Para Birimi</th>
      </tr>
    </thead>
    <tbody>
      {
        countries.map((country,i)=><Country key={country.name} {...country} index={i}/>)
      }
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </Table>
  )
}

export default Countries