import React,{useState,useRef,useEffect} from 'react'
import {HiMenu} from 'react-icons/hi'
import{ AiFillCloseCircle } from 'react-icons/ai';
import { Link,Route,Routes} from 'react-router-dom';

import {Sidebar, UserProfile} from '../components'
import {client} from '../client'
import logo from '../assets/PIXIGRAM(t).png';
import Pins from './Pins'

const Home = () => {
  const [TougleSidebar,setTougleSidebar]= useState(false);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar/>
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu fontSize={40} className="cursor-pointer" onClick={()=>setTougleSidebar(false)} />
        <Link to='/'>
          <img src={logo} alt='logo' className="w-28"/>
        </Link>
      </div>
    </div>
  )
}

export default Home