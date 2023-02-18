import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GameCards(props) {
  return (
    <Card sx={{ maxWidth: 345 }} raised={true}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.ImagePath}
          alt="Words and Numbers"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.GameTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.GameDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}