import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {Link as RouterLink} from "react-router-dom";


function CardCities(props) {
return (
  <ImageList sx={{ width: '90vw', margin: '2rem', }}>
      <p style={{display: 'none'}}>Hola</p>
            {props.cities && props.cities.map((city, index) =>
        <ImageListItem key={index} className="image-list-item">
          <img
            src={`${city.image}?w=248&fit=crop&auto=format`}
            srcSet={`${city.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={city.name}
            loading="lazy"
          />
            <RouterLink to={`/cities/city/${city.id}`}>
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
        </ImageListItem>
      )}
  </ImageList>
)
}

export default CardCities;