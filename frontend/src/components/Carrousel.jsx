import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/styles.css";
import {Autoplay, Grid, Pagination,  Navigation } from "swiper";
import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

export default function Carrousel() {
const cities = useSelector(store => store.citiesReducer.cities);

  return (
    <>
      <Box sx={{justifyContent: 'center'}}>
        <Typography sx={{justifySelf:'center', margin: '0 .5rem', fontSize: '5rem', color: 'white'}} className="carrousel-title" >
          Popular MyTinerary
        </Typography>
      </Box>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        slidesPerGroup={2}
        grid={{
          rows: 2,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Grid, Pagination,  Navigation]}
        className="mySwiper"
      >
        {cities && cities.map((city, index) => 
        <SwiperSlide key={index} className="cities">
          <img style={{height:'90%', width: '100%', objectFit: 'cover'}} src={city.image} alt="foto"/>
          <Typography variant="h6" style={{color: 'white', width: '100%'}} sx={{alignSelf:'flex-end', margin: '0 .5rem', }}>{city.name}</Typography>
        </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

