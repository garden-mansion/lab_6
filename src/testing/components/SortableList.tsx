import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { useState, type FC } from 'react';
import List from '@mui/material/List';
import { SortableItem } from './SortableItem';

interface ComponentProps {
  answers: string[];
}

export const SortableList: FC<ComponentProps> = ({ answers }) => {
  const [draggedItems, setDraggedItems] = useState<string[]>(answers);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over === null) {
      return;
    }

    if (active.id !== over.id) {
      setDraggedItems((draggedItems) => {
        const oldIndex = draggedItems.indexOf(active.id.toString());
        const newIndex = draggedItems.indexOf(over.id.toString());
        return arrayMove(draggedItems, oldIndex, newIndex);
      });
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
