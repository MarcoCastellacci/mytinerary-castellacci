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

export default function Carrousel(props) {

console.log(props.Cities);
  return (
    <>
      <Box sx={{justifyContent: 'center'}}>
        <Typography sx={{justifySelf:'center', margin: '0 .5rem', fontSize: '5rem', fontFamily: 'serif', color: '#42a5f5'}}>
          Popular Cities
        </Typography>
      </Box>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grid={{
          rows: 2
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          580: {
            slidesPerView: 2,
            spaceBetween: 10, 
            grid:{
              rows: 4
            },
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
            grid:{
              rows: 4
            },
          },
          780: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid:{
              rows: 4
            },
          },
          1080: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Autoplay, Grid, Pagination,  Navigation]}
        className="mySwiper"
      >
        {props.cities && props.cities.cities.map(city => 
        <SwiperSlide key={city.id}>
          <img style={{height:'100%', width: '50vw'}} src={city.image} alt="foto" className="ciudades"/>
          <Typography variant="h6" style={{color: 'white', width: '100%'}} sx={{alignSelf:'flex-end', margin: '0 .5rem', }}>{city.nombre}</Typography>
        </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

