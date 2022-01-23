import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import * as weatherActions from './../../actions/weatherActions';
import { connect } from 'react-redux';
import { Country, State, City } from 'country-state-city';
import { List, Divider, Input, Row, Col, Button } from 'antd';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from './data';
const { Search } = Input;
const Countries = Country.getAllCountries();
const Cities = State.getAllStates();
const dt= [
  {name: 'Page A', uv: 4000, pv: 2400},
  {name: 'Page B', uv: 3000, pv: 1398},
  {name: 'Page C', uv: 2000, pv: 9800},
  {name: 'Page D', uv: 2780, pv: 3908},
  {name: 'Page E', uv: 1890, pv: 4800},
  {name: 'Page F', uv: 2390, pv: 3800},
  {name: 'Page G', uv: 3490, pv: 4300},
]
class AdminHomePage extends Component {
  state = { txtCityName: "", arrHintCity: [], objCitySelected: "", arrDataWeather: data.daily, start: Date.now(),arrDataChart:[] }
  onHint = (event) => {
    const { target } = event;
    const { value } = target
    this.setState({ txtCityName: value });
    let arrHintTemp = [];
    if (value) {
      arrHintTemp = Cities.filter((city) => { return city.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 });
      this.setState({ arrHintCity: arrHintTemp });
    }
    else {
      this.setState({ arrHintCity: [] });
    }
  }
  onSearch = value => {
    // const { weatherAction } = this.props;
    // const {fetchWeather } = weatherAction;
    // const {objCitySelected}= this.state;
    // fetchWeather(objCitySelected);
    let start= Date.now();
    console.log(start);
    this.setState({ arrDataWeather: data.daily });
    let arrDataChartTemp=[];
    let index=0;
    let {length}= data.daily;
    while(index<length){
      arrDataChartTemp.push({name:this.showDate(start,index),"temp °C":(data.daily[index].temp.eve-273.15).toFixed(1),"humidity %":data.daily[index].humidity});
      index++;
    }
    this.setState({arrDataChart:arrDataChartTemp});
  };
  showDate = (date, value) => {
    date = date + 86400000 * value;
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${da}-${mo}-${ye}`;
  }
  onAtSelect = (item) => {
    const { name } = item;
    this.setState({ objCitySelected: item, txtCityName: name, arrHintCity: [] })
  }
  render() {
    const { txtCityName, arrHintCity, arrDataWeather, start,arrDataChart } = this.state;
    console.log(this.state);
    return (
      <>
        {/* <Input placeholder="city name" value={txtCityName} onChange={(event) => this.onHint(event)} /> */}
        <Search
          placeholder="input city name"
          allowClear
          enterButton="Search"
          size="large"
          value={txtCityName}
          onChange={(event) => this.onHint(event)}
          onSearch={() => this.onSearch()}
        />
        {arrHintCity.length > 0 ? <>
          <Divider orientation="left">hint</Divider>
          <List
            size="small"
            bordered
            dataSource={arrHintCity}
            className='listofcities listofcities--primary'
            renderItem={item =>
              <List.Item className='listofcities_item' onClick={() => { this.onAtSelect(item) }}>
                {item.name}
              </List.Item>
            }
          />
        </> : null}
        <Row className='section-content'>
          <Col span={14}>
            <Row className='daily-header'><div>8-day forecast chart</div></Row>
            <Row>
              <ResponsiveContainer className="chart" height={550}>
                <LineChart
                  width='100%'
                  height={550}
                  data={arrDataChart}
                  margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="humidity %" stroke="#82ca9d" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="temp °C" stroke="red" />
                </LineChart>
              </ResponsiveContainer>
            </Row>
          </Col>
          <Col span={10} >
            <Row className='daily-header'><div>8-day forecast</div></Row>
            {arrDataWeather.length > 0 ? arrDataWeather.map((item, index) => (
              <Row key={index} className='daily-cart daily-cart--rounded'>
                {this.showDate(start, index)}
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={item.weather[0].icon}
                  className='daily-cart_image'
                />
                {(item.temp.day - 273.15).toFixed(1)}°C/{(item.temp.night - 273.15).toFixed(1)}°C
                <Button className='daily-cart_btn daily-cart_btn--primary daily-cart_btn--rounded'>show detail</Button>
              </Row>)) : null}
          </Col>
        </Row>
      </>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    weatherAction: bindActionCreators(weatherActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(AdminHomePage);
