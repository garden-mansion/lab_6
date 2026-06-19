import { Box, Button, Container, Typography } from '@mui/material';
import type { FC } from 'react';
import { quiz } from '../quizData';
import { Matching } from './Matching';

export const Quiz: FC = () => {
  return (
    <Container maxWidth="md">
      {quiz.map((item, index) => (
        <Box key={item.id} component="section" sx={{ m: 2, p: 2 }}>
          <Typography variant="h5" gutterBottom>
            {index + 1}. {item.title}
          </Typography>
          {/* Здесь будет вызов компонента с заданием на сопоставление */}

          <Matching tasks={item.tasks} />
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button variant="contained">Проверить</Button>
        <Button variant="contained">Начать снова</Button>
      </Box>
    </Container>
  );
};
