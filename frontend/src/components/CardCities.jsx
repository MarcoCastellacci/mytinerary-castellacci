import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import {Link as RouterLink} from "react-router-dom";
import { useSelector } from 'react-redux';


function CardCities() {
const filteredCities = useSelector(store => store.citiesReducer.filterCities)
return (
  <ImageList sx={{ width: '90vw', margin: '2rem', }}>
      <p style={{display: 'none'}}>Hola</p>
            {filteredCities.length > 0 ? filteredCities.map((city, index) =>
        <ImageListItem key={index} className="image-list-item">
          <img
            src={`${city.image}?w=248&fit=crop&auto=format`}
            srcSet={`${city.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={city.name}
            loading="lazy"
          />
            <RouterLink to={`/cities/city/${city._id}`}>
          <ImageListItemBar
            title={city.name}
            subtitle={city.country}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${city.name}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
            </RouterLink>
        </ImageListItem>):
        <Typography variant="h1" color="white" sx={{textAlign:'center', width: '85vw', backgroundColor: 'rgba(0, 0, 0, 0.651)'}} >
            No cities found
        </Typography>}
  </ImageList>
)
}

export default CardCities;