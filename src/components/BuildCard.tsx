import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { FC } from 'react';

interface BuildCardProps {
  building: {
    img: string;
    title: string;
    description: string[];
  };
}

export const BuildCard: FC<BuildCardProps> = ({ building }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia component="img" alt={building.title} image={building.img} />
      <Box>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {building.title}
          </Typography>
          {building.description.map((item, ind) => (
            <Typography key={ind} variant="body2">
              {item}
            </Typography>
          ))}
        </CardContent>
        <CardActions sx={{ justifyContent: 'end' }}>
          <Button size="small">Подробнее</Button>
        </CardActions>
      </Box>
    </Card>
  );
};
