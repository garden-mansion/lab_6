import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getShuffledArray } from '../../utils/getShuffledArray';

interface ListsState {
  lists: string[][]; // хранит перемещаемые элементы каждого списка ответов
}

const initialState: ListsState = {
  lists: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    reset: (state) => {
      for (let i = 0; i < state.lists.length; ++i) {
        state.lists[i] = getShuffledArray(state.lists[i]);
      }
    },

    addList: (
      state,
      action: PayloadAction<{ index: number; items: string[] }>,
    ) => {
      const { index, items } = action.payload;
      state.lists[index] = items;
    },
    setDraggedItems: (
      state,
      action: PayloadAction<{ index: number; items: string[] }>,
    ) => {
      const { index, items } = action.payload;
      if (index >= 0 && index < state.lists.length) {
        state.lists[index] = items; // обновляем конкретный список
      }
    },
  },
});

// Экспортируем действия и редьюсер
export const { addList, setDraggedItems, reset } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
