import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root';
import wayPointReducer from './slices/waypoints';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  reducer: {
    wayPoints: wayPointReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
