import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { type FC } from 'react';
import List from '@mui/material/List';
import { SortableItem } from '../components/SortableItem';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { setDraggedItems } from './quizSlice';

interface ComponentProps {
  index: number;
}

export const SortableList: FC<ComponentProps> = ({ index }) => {
  const dispatch = useDispatch();
  const currentAnswers = useSelector(
    (state: RootState) => state.listsReducer.lists[index],
  );
  const draggedItems = currentAnswers || [];

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over === null) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = draggedItems.indexOf(active.id.toString());
      const newIndex = draggedItems.indexOf(over.id.toString());
      const newList = arrayMove(draggedItems, oldIndex, newIndex);
      dispatch(setDraggedItems({ index, items: newList }));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={draggedItems}
        strategy={verticalListSortingStrategy}
      >
        <List>
          {draggedItems.map((item) => (
            <SortableItem key={item} item={item} />
          ))}
        </List>
      </SortableContext>
    </DndContext>
  );
};
