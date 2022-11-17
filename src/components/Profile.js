import {useState,useEffect} from 'react'
import FecthingData from './FecthingData';
import axios from 'axios';





const Profile = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    
      axios.get('https://dummyjson.com/products?limit=100')
      .then(res => {
        console.log(res)
        setData(res.data.products)
      })
      .catch(err => {
        throw err
      })
  },[])
return (
  <div className='container-product'>
        {data.length > 0 ? data.map(e=>{
              return(
              <FecthingData key={e.id} title={e.title} img={e.images[0]} alt={e.thumbnail[0]} price={`Pricce : $.${e.stock}`} stock={`Stock : ${e.stock}`}/>
              )
          })
          : <FecthingData title="loading..."/>
        }
  </div>
)
}


export default Profile