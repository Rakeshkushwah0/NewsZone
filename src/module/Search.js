
  const search = async () =>{

    if(text==""){
     return;
    }
     
    console.log("on click event is fired")
    
       console.log("search");
      
        
       const fetchApi = async () => {
         setloading(true);
         const url = await fetch(
           `https://newsapi.org/v2/top-headlines?${text?`&q=${text}`:""}&apiKey=74d5104d4eb04470a8dd34d4e6389513&page=${page}&pageSize=9`
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
   
   