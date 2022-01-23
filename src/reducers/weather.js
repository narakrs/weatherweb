import * as Types from './../constants/WeatherTypes';

const initialState = {
  weather: [],
  data: []
}; // tt:3

const setData = (payload) => {
  let start = Date.now();
  let arrDataChartTemp = [];
  let index = 0;
  let { length } = payload;
  while (index < length) {
    arrDataChartTemp.push({
      name: this.showDate(start, index),
      "temp °C": (payload[index].temp.eve - 273.15).toFixed(1),
      "humidity %": payload[index].humidity
    });
    index++;
  }
  return arrDataChartTemp;
};

const myreducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_FETCH_WEATHER_BY_CITY:
      return { ...state };
    case Types.GET_WEATHER_BY_CITY_SUCCESS:
      let data = setData(action.payload);
        return { weather: action.payload,data };
    default:
      return state;
  }
};

export default myreducer;
