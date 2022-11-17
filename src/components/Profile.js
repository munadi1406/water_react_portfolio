import {useState,useEffect} from 'react'
import FecthingData from './FecthingData';
import axios from 'axios';





const Profile = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
      axios.get('https://dummyjson.com/products?limit=100')
      .then(res => {
        setData(res.data.products)
      })
      .catch(err => {
        throw err
      })
  },[])
return (
      <div>
          {data.map(e=>{
              return(
              <FecthingData key={e.id} title={e.title} img={e.images[1]} jamal="oke jamal"/>
              )
          })}
      </div>
)
  
}


export default Profile