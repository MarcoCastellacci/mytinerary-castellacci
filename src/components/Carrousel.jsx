import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "../styles/styles.css";
// import required modules
import { Grid, Pagination } from "swiper";
import { useEffect, useState } from "react";

function useCities (){
    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetch("/public/json/cities.json")
        .then(response => response.json())
        .then(data =>{setCities(data)})
    }, []);
    return cities;
}

function Carrousel() {
    const cities = useCities();
    cities.map(city => console.log(city.name));
    console.log(cities);
return (
    <>
    
    <Swiper
        slidesPerView={2}
        grid={{
            rows: 2,
        }}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        
    </Swiper>
    </>
);
}
export default Carrousel;
