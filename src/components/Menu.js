import React, { Component } from 'react'
import { Route,  Link } from 'react-router-dom'

const MenuItem=[
    {
        name:'Trang Chủ',
        to:'/',
        exact:true
    },
    {
        name:'Giới thiệu',
        to:'/gioithieu',
        exact:false
    },
    {
        name:'Liên hệ',
        to:'/lienhe',
        exact:false
    }
    ,
    {
        name:'Sản phẩm',
        to:'/sanpham',
        exact:false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to} exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? 'active abc' : '';
          return (
            <li className={`my-link ${active}`}>
              <Link to={to} className="my-link">{label}</Link>
            </li>
          )
        }
        }
      />
    )
  }
export default class Menu extends Component {
    render() {
        return (

            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenu(MenuItem)}
                </ul>
            </nav>

        )
    }
    showMenu =(menuitem)=>{
            var reslut=null;
            if(menuitem.length>0){
                reslut=menuitem.map((menu,index)=>{
                    return <MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} key={index}/>
                });
            }
            return reslut;
    }
}