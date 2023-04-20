import React, { useEffect  , useState} from 'react'
import "./VeiwCategory.css"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const VeiwCategory = () => {
    const [category , setCategory] = useState([]);
    const params = useParams();
    console.log(params)
   const  getInCategory = async()=>{
await fetch(`http://localhost:3500/categories/${params.veiw}`).then((res)=>res.json()).then((data)=>setCategory(data))
    }
    useEffect(()=>{
getInCategory()
    } , []);
 
  return (
    <div className='VeiwCategory'>
    <div className="card"  >
   <div className="card-body">
    <h5 className="card-title">{category.name}</h5>
    <p className="card-text">{category.email}</p>
    <Link to="/categories" href="#" className="btn btn-primary">Go To Categories</Link>
  </div>
</div>
    </div>
  )
}

export default VeiwCategory