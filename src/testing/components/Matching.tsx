import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { type tTasks } from '../quizData';
import { type FC } from 'react';
import { getShuffledArray } from '../../utils/getShuffledArray';
import { SortableList } from './SortableList';

interface ComponentProps {
  tasks: tTasks;
}

export const Matching: FC<ComponentProps> = ({ tasks }) => {
  const answers = getShuffledArray<string>(tasks.map((task) => task.answer));

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <List>
          {tasks.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton
                sx={{
                  border: '1px solid gray',
                  borderRadius: '5px',
                  textAlign: 'right',
                }}
              >
                <ListItemText primary={item.question} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid size={6}>
        <SortableList answers={answers} />
      </Grid>
    </Grid>
  );
};
