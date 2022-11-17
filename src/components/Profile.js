import {useState,useEffect} from 'react'
import FecthingData from './FecthingData';





const Profile = (props) => {
  const [data,setData] = useState([]);
  useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(res =>{
          setData(res.products)
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