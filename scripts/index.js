// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


   async function searchNews(){

     let search=document.getElementById("search_input").value;
     try{
         let res=await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-04-02&sortBy=${search}&apiKey=707525d49c0f49fc962c9db5a71989ae`)
       let data=await res.json();
       append(data)
       console.log(data)
    
        }catch(err){
         console.log(err)
     }
   }


  function append(data){
      
   let news=document.querySelector("#news")
    let title=document.createElement("h3")
     let discription=document.createElement("p")
     let url=document.createElement("img")


     title.innerHTML=data.title
     discription.innerHTML=data.discription
     url.src=data.url
  news.append(title,discription,url)
  document.querySelector("#results").append(news)
  }