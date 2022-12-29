import React from 'react';

const Banner = () => {
    return (
//         <div>
//             <div className="carousel w-full ">
//             <div id="item1" className="carousel-item w-full">
//     <img src="https://i.pinimg.com/736x/ac/01/44/ac014446e4c62e078975a3b603f67938.jpg" className="w-full h-96" />
//   </div> 
//   <div id="item2" className="carousel-item w-full">
//     <img src="https://cdnblog.etmoney.com/wp-content/uploads/2021/09/investing-at-market-high-1.jpg" className="w-full h-96" />
//   </div> 
 
//   <div id="item3" className="carousel-item w-full">
//     <img src="https://www.amakella.com/wp-content/uploads/2020/08/how-the-stock-market-works-1024x576.jpg" className="w-full h-96" />
//   </div> 
//   <div id="item4" className="carousel-item w-full">
//     <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/21/860914-stockmarket-istock-111518.jpg" className="w-full h-96" />
//   </div>
// </div> 
// <div className="flex justify-center w-full py-2 gap-2">
//   <a href="#item1" className="btn btn-xs">1</a> 
//   <a href="#item2" className="btn btn-xs">2</a> 
//   <a href="#item3" className="btn btn-xs">3</a> 
//   <a href="#item4" className="btn btn-xs">4</a>
// </div>
//         </div>

<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.pinimg.com/736x/ac/01/44/ac014446e4c62e078975a3b603f67938.jpg" className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://cdnblog.etmoney.com/wp-content/uploads/2021/09/investing-at-market-high-1.jpg" className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://www.amakella.com/wp-content/uploads/2020/08/how-the-stock-market-works-1024x576.jpg" className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/21/860914-stockmarket-istock-111518.jpg" className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    );
};

export default Banner;