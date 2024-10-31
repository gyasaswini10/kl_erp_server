import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image from './skill.jpg'
import './skill.css';
export default function MultiActionAreaCard() {
 
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"

          image={image}
          alt="Student"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Student
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Student is equipped with skills like html, css, react ,angilar
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
       Skill
        </Button>
      </CardActions>
    </Card>
  );
}
