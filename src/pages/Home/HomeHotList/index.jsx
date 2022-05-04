import axios from "axios"
import React,{ useState,useEffect } from "react"
import api from "../../../api"
import HomeHotView from "../HomeHotView"

const HomeHotList = () =>{

    const [hot1List,setHot1List] = useState([])
    const [hot2List,setHot2List] = useState([])

     /**
     * get hot1 Data
     */
    useEffect(()=>{
        axios.get("http://localhost:5566/api/Home/hot1").then(res => {
            setHot1List(res.data.result)
        })
    })
    /**
     * get hot2 Data
     */
    useEffect(()=>{
        axios.get("http://localhost:5566/api/Home/hot2").then(res => {
            setHot2List(res.data.result)
        })
    })
    return(
        <div>
            {
                hot1List.length > 0 ?
                <HomeHotView data={ hot1List } title={ 'Hot Sale Products' }/> :
                <div>Waiting for data loading</div>
            }
            {
                hot2List.length > 0 ?
                <HomeHotView data={ hot2List } title={ 'New Products Recommand' }/> :
                <div>Waiting for data loading</div>
            }
        </div>
    )
}

export default HomeHotList