import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import{ GoCheck }from 'react-icons/go'

import styled from '@emotion/styled';
// const CardC=styled(Card)({
//    width:"280px",
//    height:"230px"

// });
import {CradContainer} from "./style"
export const Crad = () => {
  return (
    
        <CradContainer>
    <CardActionArea>
        <CardActions sx={{marginLeft:'2%'}}>
           <GoCheck fontSize={20}/>
    </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
       see more
      </Button>
    </CardActions>

        </CradContainer>
   

);
}