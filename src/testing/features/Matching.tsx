import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { type tTasks } from '../quizData';
import { useEffect, type FC } from 'react';
import { getShuffledArray } from '../../utils/getShuffledArray';
import { SortableList } from './SortableList';
import { useDispatch } from 'react-redux';
import { addList } from './quizSlice';

interface ComponentProps {
  tasks: tTasks;
  index: number;
}

export const Matching: FC<ComponentProps> = ({ tasks, index }) => {
  const answers = getShuffledArray<string>(tasks.map((task) => task.answer));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addList({ index, items: answers }));
  }, []);

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
        <SortableList index={index} />
      </Grid>
    </Grid>
  );
};
