import About from './About'
import Contact from './Contact'
import Home from './Home'
import NotFoud from './NotFoud'

import React, { Component } from 'react'
import Product from './Product'
 const routers=[
    {
        path:'/',
        exact:true,
        main:()=><Home />
    },
    {
        path:'/gioithieu',
        exact:false,
        main:()=><About />
    },
    {
        path:'/lienhe',
        exact:false,
        main:()=><Contact />
    },
    {
        path:'/sanpham',
        exact:false,
        main:({match})=><Product match={match} />
    },
    {
        path:'',
        exact:false,
        main:()=><NotFoud />
    }
    
]

export default routers