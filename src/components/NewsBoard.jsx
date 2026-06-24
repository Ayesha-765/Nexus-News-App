import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([]);
  useEffect(()=> {
    let url = `https://api.currentsapi.services/v1/latest-news?&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url).then(response => response.json()).then(data => setArticles(data.news));
  },[category])
  
   return (
    <div>
        <h2 className="text-center mt-4">Latest <span className="badge bg-danger">News</span></h2>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {articles.map((news,index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />
        
        })}
        </div>
    </div>
  )
}

export default NewsBoard