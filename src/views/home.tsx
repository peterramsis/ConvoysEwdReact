import { useEffect } from "react";
import { useStateContext } from "../core/ContextProvider";
import axiosClient from "../core/axiosClient";

export default function Home() {
    const { lastFiveNews, setLastFiveNews } = useStateContext();

    const fetchData = () => {
        axiosClient.get("/lastFiveNews").then((result) => {
            console.log(`data: ${result.data.data}`);
            setLastFiveNews(result.data.data);
        });
    };

    useEffect(() => {
        fetchData(); // Fetch data on initial load
    }, []);

    return (
        <div className="home">
           <div className="carousel w-full h-[400px]">
             {
                lastFiveNews != null  ?  lastFiveNews.map((item)=> {
                    
                    return <div id={item.id} className="carousel-item w-full">
                     
                    <img
                      src={item.img} // Make sure `img` contains the image URL
                      alt={item.name} // Adding an alt attribute for accessibility
                      className="w-full aspect-square image-full" />
                  </div>
                }) : "loading"
             }

          </div>
<div className="flex w-full justify-center gap-2 py-2">
  
{
  lastFiveNews != null && lastFiveNews.length > 0 && (
    lastFiveNews.map((item ,index) => {
      return (
        <a href={'#'+item.id} key={item.id} className="btn btn-xs">
          {index+1}
        </a>
      );
    })
  )
}

  
</div>
        </div>
    );
}
