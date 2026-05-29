import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface BuildCardProps {
  building: {
    img: string;
    title: string;
    description: string[];
  };
  index: number;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  marginBottom: theme.spacing(1.5),
}));

export const BuildCard: FC<BuildCardProps> = ({ building, index }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: {
          sm: index % 2 ? 'row' : 'row-reverse',
          xs: 'column',
        },
      }}
    >
      <CardMedia component="img" alt={building.title} image={building.img} />
      <Box>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {building.title}
          </Typography>
          {building.description.map((item, ind) => (
            <StyledTypography key={ind}>{item}</StyledTypography>
          ))}
        </CardContent>
        <CardActions
          sx={{
            justifyContent: {
              sm: index % 2 ? 'end' : 'start',
              xs: 'center',
            },
          }}
        >
          <Button size="small" component={Link} to={"/building/" + index}>
            Подробнее
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
