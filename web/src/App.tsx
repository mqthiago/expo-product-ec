import { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from 'react-fetch-hook';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

function App() {
  const { isLoading, data } = useFetch<{description:string;imageUrl?:string;}[]>("http://localhost:3333/product", {
    formatter: (response) => response.json()
});
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(data)
  return (
    <div className="App">
      <h2> Single Item</h2>
      <Slider {...settings}>
        {
          data?.map(product=>{
            return(<figure>
              <img src={product.imageUrl}/>
              <figcaption>{product.description}</figcaption>
            </figure>)
          })
        }
      </Slider>
    </div>
  );
}

export default App
