import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {Link as RouterLink} from "react-router-dom";
import Filter from '../components/Filter';

function CardCities(props) {
return (
<>
    <Filter cities={props} />
  <ImageList sx={{ width: '90vw', margin: '2rem', }}>
            {props.cities && props.cities.cities.map(city =>
        <ImageListItem key={city.image} className="image-list-item">
          <img
            src={`${city.image}?w=248&fit=crop&auto=format`}
            srcSet={`${city.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={city.name}
            loading="lazy"
          />
            <RouterLink to={`/cities/city/${city.id}`}>
          <ImageListItemBar
            title={city.name}
            subtitle={city.pais}
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
</>
)
}

export default CardCities;