import React from "react"
import classnames from "classnames"
import "./style.less"

//Swiper Page changing indicator

const Pagination = (props) =>{
    //.fill()   es6 new filling function
    let arr = new Array(props.len).fill(1)
    let currentIndex = props.currentIndex

    return(
        <div className="swiper-pagination">
            <ul>
                {
                    //traverse array
                    arr.map((ele,index) =>{
                        //classname({}) is object type
                        return <li className={ classnames({'selected':currentIndex === index})} key={index}></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination