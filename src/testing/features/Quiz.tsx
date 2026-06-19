import { Box, Button, Container, Typography } from '@mui/material';
import { useState, type FC } from 'react';
import { quiz } from '../quizData';
import { Matching } from './Matching';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { TestingResults } from '../components/TestingResults';
import { reset } from './quizSlice';

export const Quiz: FC = () => {
  const answers = useSelector((state: RootState) => state.listsReducer.lists);
  const dispatch = useDispatch();
  const [testingResults, setTestingResults] = useState<
    {
      correctAnswers: number;
      totalQuestions: number;
    }[]
  >([]);

  const handleCheckAnswers = () => {
    setTestingResults(() => {
      const newResults: {
        correctAnswers: number;
        totalQuestions: number;
      }[] = [];

      for (let i = 0; i < answers.length; ++i) {
        newResults.push({
          totalQuestions: answers[i].length,
          correctAnswers: quiz[i].tasks.reduce((correctCount, task, index) => {
            return task.answer === answers[i][index]
              ? correctCount + 1
              : correctCount;
          }, 0),
        });
      }

      return newResults;
    });
  };

  const handleReset = () => {
    setTestingResults([]);
    dispatch(reset());
  };

  return (
    <Container maxWidth="md">
      {quiz.map((item, index) => (
        <Box key={item.id} component="section" sx={{ m: 2, p: 2 }}>
          <Typography variant="h5" gutterBottom>
            {index + 1}. {item.title}
          </Typography>
          {/* Здесь будет вызов компонента с заданием на сопоставление */}

          <Matching tasks={item.tasks} index={index} />
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button variant="contained" onClick={handleCheckAnswers}>
          Проверить
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Начать снова
        </Button>
      </Box>

      {testingResults.length !== 0 && (
        <TestingResults results={testingResults} />
      )}
    </Container>
  );
};
