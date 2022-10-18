import React, { useEffect,useState } from "react"




const App = () => {
    
    const [data , setdata] = useState([]);








    useEffect(() => {
   
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c42d17aabf594b009cdce5c40804d11d')
        .then(res => res.json())
        .then(res =>{
            setdata(res);
        })
        .catch(e =>{
            console.log(e);
        })
    });

};



export default App;
export {data}