import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects';
import * as Types from './../constants/ActionTypes';
import {
  fetchLoginSuccess,
  fetchLoginFail,
  filterSuccess,
} from '../actions/loginActions';
import { showLoading, hideLoading } from '../actions/uiActions';
import { getAllStudy, getStudy as getdataStudy,fetchOnNextStudyYes } from '../actions/studyActions';
import {getWeatherSuccess,getWeatherFail} from '../actions/weatherActions';
import * as subject from '../actions/subjectActions';
import { getList } from '../apis/loginApis';
import { getStudy, createMultiple } from '../apis/studyApi';
import { getSubject,createMultipleSJ,getDataSetSlect } from '../apis/subjectApi';
import {getWeather} from '../apis/weatherApis'
import { STATUS_CODE } from './../constants/index';
import * as WeatherTypes from './../constants/WeatherTypes';

function* watchFetchLoginAction() {
  while (true) {
    yield take(Types.LOGIN);
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    console.log('s', resp);
    if (status === STATUS_CODE.SUCCESS) {
      console.log('tc');
      yield put(fetchLoginSuccess(data));
    } else {
      console.log('tb');
      yield put(fetchLoginFail(data));
    }
    yield delay(2000);
    yield put(hideLoading());
  }
}
function* watchFilterLogin({ payload }) {
  yield delay(600);
  const list = yield select(state => state.login);
  console.log('state', list);
  yield put(filterSuccess(payload));
}
function* watchGetStudy() {
  console.log('vaoday');
  const resp = yield call(getStudy);
  const { status, data } = resp;
  console.log('s', data);
  yield put(showLoading());
  if (status === STATUS_CODE.SUCCESS) {
    console.log('tc');
    yield put(getAllStudy(data.data));
  }
  yield delay(2000);
  yield put(hideLoading());
}
function* insertStudy({ payload }) {
  console.log('ss', payload);
  yield put(showLoading());
  const resp = yield call(createMultiple, payload);
  const { status, data } = resp;
  console.log('s', data);
  if (status === 201) {
    console.log('tc');
    yield put(getdataStudy());
  }
  yield delay(1000);
  yield put(hideLoading());
}
function* onNextStudy({ payload }) {
  yield put(showLoading());
  yield put(fetchOnNextStudyYes(payload));
  yield delay(1000);
  yield put(hideLoading());
}

function* watchGetSubject() {
  const resp = yield call(getSubject);
  const { status, data } = resp;
  const state = yield select();
  console.log(state.subject.select);
  yield put(showLoading());
  if (status === STATUS_CODE.SUCCESS && state.subject.select==="") {
    console.log('tc');
    yield put(subject.getAllStudy(data));
  }
  else{
    let dt={subject:state.subject.select}
    const resp = yield call(getDataSetSlect,dt);
    const { status, data } = resp;
    console.log(data);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(subject.getAllStudy(data));
    }
  }
  yield delay(2000);
  yield put(hideLoading());
}
function* insertSubject({ payload }) {
  console.log('ss', payload);
  yield put(showLoading());
  const resp = yield call(createMultipleSJ, payload);
  const { status, data } = resp;
  console.log('s', data);
  if (status === 201) {
    console.log('tc');
    yield put(subject.getStudy());
  }
  yield delay(1000);
  yield put(hideLoading());
}
function* onNextSubject({ payload }) {
  yield put(showLoading());
  yield put(subject.fetchOnNextStudyYes(payload));
  yield delay(1000);
  yield put(hideLoading());
}
function* onSetSlect({payload}) {
  let dt= {subject:payload}
  if(payload!==''){
    const resp = yield call(getDataSetSlect,dt);
    const { status, data } = resp;
    console.log(data);
    yield put(showLoading());
    if (status === STATUS_CODE.SUCCESS) {
      yield put(subject.getAllStudy(data));
    }
    yield delay(2000);
    yield put(hideLoading());
  }
}
function* watchGetWeather({payload}) {
  let body={lat:payload.latitude,lon:payload.longitude};
  const resp = yield call(getWeather(body));
  const { status, data } = resp;
  yield put(showLoading());
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getWeatherSuccess(data));
  }
  else{
    yield put(getWeatherFail(data));
  }
  yield delay(2000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchLoginAction);
  yield takeLatest(Types.LOGIN_FILTER, watchFilterLogin);
  yield takeLatest(Types.GETSTUDY, watchGetStudy);
  yield takeLatest(Types.CREATEMULTIPLE, insertStudy);
  yield takeLatest(Types.ONNEXTSTUDY, onNextStudy);

  yield takeLatest(Types.GETSUBJECT, watchGetSubject);
  yield takeLatest(Types.CREATEMULTIPLESJ, insertSubject);
  yield takeLatest(Types.ONNEXTSUBJECT, onNextSubject);
  yield takeLatest(Types.SETSELECT, onSetSlect);

  yield takeLatest(WeatherTypes.GET_FETCH_WEATHER_BY_CITY,watchGetWeather);
}
export default rootSaga;
