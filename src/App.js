import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import routers from './components/router'

//tự custom Link


export default class App extends Component {
  render() {
    return (

      <Router>
        <div>
          {/*Menu */}
          <Menu />
          {/*Nội dung */}
          <Switch>
            {this.showRoute(routers)}
          </Switch>
          
        </div>
      </Router>

    )
  }
  showRoute =(routers)=>{
    var result=null;
    if(routers.length>0){
      result=routers.map((item,index)=>{
        return <Route key={index} path={item.path} exact={item.exact} component={item.main} />
      })
    }
    return result;
  }
}
