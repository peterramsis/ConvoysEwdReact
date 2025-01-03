import { useEffect } from "react";
import { useStateContext } from "../core/ContextProvider";
import axiosClient from "../core/axiosClient";

export default function Home() {
  interface News {
    id: number;
    img: string;
    name: string;
  }
  const { lastFiveNews, setLastFiveNews } = useStateContext();

  const fetchData = () => {
    axiosClient.get("/lastFiveNews").then((result) => {
      setLastFiveNews(result.data.data);
    }).catch(error => {
      console.error(error);
    });
  };

  useEffect(() => {
    fetchData(); // Fetch data on initial load
  }, []);

  return (
    <div className="home">
      <div className="carousel w-full h-[400px]">
        {lastFiveNews != null
          ? lastFiveNews.map((item: News) => {
              return (
                <div id={item.id.toString()} className="carousel-item w-full" key={item.id.toString()}>
                  <img
                    src={item.img} // Make sure `img` contains the image URL
                    alt={item.name} // Adding an alt attribute for accessibility
                    className="w-full aspect-square image-full"
                  />
                </div>
              );
            })
          : "loading"}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {lastFiveNews != null &&
          lastFiveNews.length > 0 &&
          lastFiveNews.map((item: News, index: number) => {
            return (
              <a href={"#" + item.id} key={item.id} className="btn btn-xs">
                {index + 1}
              </a>
            );
          })}
      </div>
    </div>
  );
}
