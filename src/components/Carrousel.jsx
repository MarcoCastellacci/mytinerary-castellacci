import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "../styles/styles.css";
import { Grid, Pagination } from "swiper";
import Typography  from "@mui/material/Typography";

export default function Carrousel(props) {

console.log(props.Cities);
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2
        }}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {props.Cities && props.Cities.map(city => 
        <SwiperSlide key={city.id}>
          <img style={{height:'100%', backgroundColor: 'black'}} src={city.image} alt="foto" />
          <Typography variant="h6" style={{color: 'black'}} sx={{alignSelf:'flex-end',
          zIndex: '1',
          }}>{city.nombre}</Typography>
        </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

