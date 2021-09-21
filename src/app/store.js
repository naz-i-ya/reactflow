import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../components/mailSlice';
import userReducer from '../components/userSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});