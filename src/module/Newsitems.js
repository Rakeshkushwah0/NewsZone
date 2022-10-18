import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Img from "../img/download.jpg";
import Button from 'react-bootstrap/Button';

export default function Newsitems(props) {


  const [text, settext] = useState('');

  const handleonchange = (event) =>{
    // console.log("on change")
    
    settext(event.target.value);
}


 
const search = async () =>{

  if(text===""){
   return;
  }
   
  console.log("on click event is fired")
  
     console.log("search");
    
      
     const fetchApi = async () => {
       setloading(true);
       const url = await fetch(
         `https://newsapi.org/v2/top-headlines?${text?`&q=${text}`:""}&apiKey=c42d17aabf594b009cdce5c40804d11d&page=1&pageSize=9`
       );
 
       const actualData = await url.json();
       lastpage = actualData.totalResults;
 
       lastpage = Math.ceil(lastpage / 10);
       setlastpage(lastpage);
       setdatas(actualData.articles);
       setloading(false);
     };
     fetchApi();
    
     // console.log(text);
 }
 
 


  const Next = async () => {
    if(text!==""){
      setpage(++page);
      const fetchApi = async () => {
        setloading(true);
        const url = await fetch(
          `https://newsapi.org/v2/top-headlines?${text?`&q=${text}`:""}&apiKey=c42d17aabf594b009cdce5c40804d11d&page=${page}&pageSize=9`
        );
  
        const actualData = await url.json();
        lastpage = actualData.totalResults;
  
        lastpage = Math.ceil(lastpage / 10);
        setlastpage(lastpage);
        setdatas(actualData.articles);
        setloading(false);
      };
      fetchApi();
    }else{
      setpage(++page);

      console.log("next");
      console.log(props.country);
      
      const fetchApi = async () => {
        setloading(true);
        const url = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c42d17aabf594b009cdce5c40804d11d&page=${page}&pageSize=9`
        );
  
        const actualData = await url.json();
        lastpage = actualData.totalResults;
  
        lastpage = Math.ceil(lastpage / 10);
        setlastpage(lastpage);
        setdatas(actualData.articles);
        setloading(false);
      };
      fetchApi();
    }
 
  };
  const previous = async () => {
    if(text!==""){
      setpage(--page);
      const fetchApi = async () => {
        setloading(true);
        const url = await fetch(
          `https://newsapi.org/v2/top-headlines?${text?`&q=${text}`:""}&apiKey=c42d17aabf594b009cdce5c40804d11d&page=${page}&pageSize=9`
        );
  
        const actualData = await url.json();
        lastpage = actualData.totalResults;
  
        lastpage = Math.ceil(lastpage / 10);
        setlastpage(lastpage);
        setdatas(actualData.articles);
        setloading(false);
      };
      fetchApi();
    }else{
      setpage(--page);
      console.log("previous");
      const fetchApi = async () => {
        setloading(true);
        const url = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c42d17aabf594b009cdce5c40804d11d&page=${page}&pageSize=9`
        );
        const actualData = await url.json();
        setdatas(actualData.articles);
        setloading(false);
      };
      fetchApi();
    }
   
  };
  let [lastpage, setlastpage] = useState(100);
  let [page, setpage] = useState(1);
  let [loading, setloading] = useState(false);
  const [datas, setdatas] = useState([]);
  const fetchApi = async () => {
    const url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c42d17aabf594b009cdce5c40804d11d&pageSize=9`
    );
    const actualData = await url.json();
    setdatas(actualData.articles);
    console.log("hiiii");
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <><div>
    <span id="search">Search for News</span>
      <input value = {text}   onChange={handleonchange} />
      <Button style={{margin:"3px"}} type='submit' onClick={search} variant="outline-success">Search</Button>
    </div>
      <img src="../img/download.jpg" alt="" />
       <div id="spinner">
       {loading === true ? <Spinner /> : null}
       </div>
      

      <div className="row">
        {datas.map(function (val, indx) {
          
          return (
            loading===true?null:
            <div key={val.url} className="card col-md-3">
              <img
                src={val.urlToImage === null ? Img : val.urlToImage}
                className="card-img-top"
                alt="..."
                style={{ height: "27vh" }}
              />
              <div className="card-body">
                <span className="badge rounded-pill text-bg-success">
                  {val.source.name}
                </span>
                <h6 className="card-title">{val.title.slice(0, 40)}...</h6>
                <p className="card-text">
                  {val.description ? val.description.slice(0, 90) + "..." : ""}
                </p>
                <div id="author">
                  <span>By: {val.author?val.author:"unknown"}</span>
                  <span> on </span>
                  <span>{new Date(val.publishedAt).toGMTString()}</span>
                </div>

                <a href={val.url} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        <div className="d-flex justify-content-between">
          {" "}
          <button
            disabled={page <= 1}
            onClick={previous}
            type="button"
            className="btn btn-outline-dark btn-lg"
          >
            previous
          </button>
          <button
            disabled={page >= lastpage}
            onClick={Next}
            type="button"
            className="btn btn-outline-dark btn-lg"
          >
            Next
          </button>
        </div>
      </div>

      {/* <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
    </>
  );
}
