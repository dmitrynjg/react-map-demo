import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coords: [
    [
      { latitude: 59.84660399, longitude: 30.29496392 },
      { latitude: 59.82934196, longitude: 30.42423701 },
      { latitude: 59.83567701, longitude: 30.38064206 },
    ],
    [
      { latitude: 59.82934196, longitude: 30.42423701 },
      { latitude: 59.82761295, longitude: 30.41705607 },
      { latitude: 59.84660399, longitude: 30.29496392 },
    ],
    [
      { latitude: 59.83567701, longitude: 30.38064206 },
      { latitude: 59.84660399, longitude: 30.29496392 },
      { latitude: 59.82761295, longitude: 30.41705607 },
    ],
  ],
  listPoint: [],
  currentWayPoint: null,
  loading: false,
  error: null,
};

const wayPointsSlice = createSlice({
  name: 'wayPoints',
  initialState,
  reducers: {
    fetchWayPointsStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchWayPointsSuccess(state, action) {
      state.loading = false;
      state.points = action.payload;
    },

    fetchWayPointsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    setCurrentWayPoint(state, action) {
      state.currentWayPoint = action.payload;
    },
  },
});
const wayPointReducer = wayPointsSlice.reducer;

export const { fetchWayPointsStart, fetchWayPointsSuccess, fetchWayPointsFailure, setCurrentWayPoint } =
  wayPointsSlice.actions;

export default wayPointReducer;
