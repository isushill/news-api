import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
function App() {
   const [news, setNews] = useState([])
    useEffect(()=>{
     axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4402fbee57ed46ed98f8a00277308d4f')
     .then((res)=>{
        console.log(res.data.articles)
        setNews(res.data.articles)
     })
  }, [])

  return (
    <div className='container my-3'>
        <div className='row text-center'>
          <h1 className='text-center my-3 fw-semibold'>Yeh To Latest <span className='text-primary'>News</span> Hai 🚀
          </h1>
          <hr />
         {
            news.map((val)=>{
                 return (
                  <div className="col my-3">
                  <div className="card" style={{ width: "18rem" }}>
                  <img src={val.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">
                   {val.description}
                 </p>
              <div className='d-grid'><a href={val.url} className="btn btn-outline-danger" target='_blank'> Read More</a></div>
          </div>
        </div>
        
                  </div>
                 )
            })
         }
        </div>
    </div>
  );
}

export default App;
