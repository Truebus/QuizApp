import axios from "axios";

const BASE_URL = "http://localhost:5000";

const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-Type": "application/json",
    }
})

export const Store = async(req,res,quizdata)=>{
    try{
       const data = await api.post('/api/quiz/postdata',quizdata);
       return data.data;
    }
    catch(err){
        res.status(404).json({message: "problem in store data"});
    }
}

// export const Fetch = async(req,res)=>{
//     try{
//         const category = req.params;
//        const data = await api.get(`/api/quiz/category/${category}`);
//        return data.data;
//     }
//     catch(err){
//         res.status(404).json({message: "problem in store data"});
//     }
// }
export const Fetch = async (category) => {
    try {
        const { data } = await api.get(`/api/quiz/category/${category}`);
        return data.questions;
    } catch (err) {
        console.error("Error fetching questions:", err);
        return [];
    }
}
