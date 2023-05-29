import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    allStudents: [],
    currentStudent: { name: '', age: '' },
  },
  reducers: {
    addCurrentStudentName: (state, action) => {
      state.currentStudent.name = action.payload;
    },
    addCurrentStudentAge: (state, action) => {
      state.currentStudent.age = action.payload;
    },
    saveStudentInfo: (state) => {
      state.allStudents.push(state.currentStudent);
    },
  },
});

export const { addCurrentStudentName, addCurrentStudentAge, saveStudentInfo } =
  studentSlice.actions;

export default studentSlice.reducer;
