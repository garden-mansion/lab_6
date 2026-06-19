import { Box, Typography } from '@mui/material';
import type { FC } from 'react';

interface TestingResultsProps {
  results: {
    correctAnswers: number;
    totalQuestions: number;
  }[];
}

export const TestingResults: FC<TestingResultsProps> = ({ results }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column wrap',
        gap: '0.75rem',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">Результаты теста</Typography>

      <Box sx={{ display: 'flex', flexFlow: 'column wrap', gap: '0.5rem' }}>
        {results.map((result, index) => {
          const label =
            result.correctAnswers === result.totalQuestions
              ? 'Все ответы верные'
              : `Верных ответов ${result.correctAnswers} из ${result.totalQuestions}`;

          return (
            <Typography key={index}>
              Задание {index + 1}. {label}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
