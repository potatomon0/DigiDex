import React,{useContext,useEffect} from 'react'
import {AppContext} from '../App'

function List() {
    const {data,setData}=useContext(AppContext)
  return (
    <div >
    <div>{data.map((digi, i)=>{
        return <div className='digimon'>
            <div className="digi" key={i}>{digi.name}<br></br>{digi.level}</div>
            <img src={digi.img} alt="" className="img"/>
        </div>
    })}
    
    </div>
    </div>
    // <div>{console.log(data[0].name)}</div>
  )
}

export default List