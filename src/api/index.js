import axios from "../utils/request";

/**
 * path address
 */

const base = {
    baseUrl:"http://localhost:5566",
    homehot1:"/api/Home/hot1",
    homehot2:"/api/Home/hot2",

}

/**
 * request method
 */
const api = {
    getHomeHot1(){
        return axios.get(base.baseUrl + base.homehot1)
    },
    getHomeHot2(){
        return axios.get(base.baseUrl + base.homehot2)
    }
}

export default api;