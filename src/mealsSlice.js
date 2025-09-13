import { createSlice } from '@reduxjs/toolkit';
export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    { name: 'Śniadanie', cost: 50, selected: false },
    { name: 'Podwieczorek', cost: 25, selected: false },
    { name: 'Obiad', cost: 65, selected: false },
    { name: 'Kolacja', cost: 70, selected: false },
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.payload].selected = !state[action.payload].selected;
    },
  },
});
export const { toggleMealSelection } = mealsSlice.actions;
export default mealsSlice.reducer;
