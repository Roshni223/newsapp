import './App.css';
import News from './components/News';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pageSize=15;
  apiKey = process.env.REACT_APP_NEWS_APP_API_KEY;
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/general" element={<News apiKey={this.apiKey} pageSize={this.pageSize} key={"general"} country={"us"} category={"general"}/>}/>
            <Route path="/business" element={<News apiKey={this.apiKey} pageSize={this.pageSize} key={"business"} country={"us"} category={"business"}/>}/>
            <Route path="/entertainment" element={<News apiKey={this.apiKey} pageSize={this.pageSize} key={"entertainment"} country={"us"} category={"entertainment"}/>}/>
            <Route path="/health" element={<News apiKey={this.apiKey} pageSize={this.pageSize} key={"health"} country={"us"} category={"health"}/>}/>
            <Route path="/science" element={<News apiKey={this.apiKey} pageSize={this.pageSize} key={"science"} country={"us"} category={"science"}/>}/>
            <Route path="/sports" element={<News apiKey={this.apiKey} pageSize={this.pageSize} key={"sports"} country={"us"} category={"sports"}/>}/>
            <Route path="/technology" element={<News apiKey={this.apiKey} pageSize={this.pageSize} key={"technology"} country={"us"} category={"technology"}/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

