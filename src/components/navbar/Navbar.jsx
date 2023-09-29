import React, {useState}from 'react';
import {RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import  './navbar.css';
import logo from '../../assets/logo.svg'

const Menu =()=>{
    return(
      <>
      <p> <a href="" className="home">   Home </a></p>
      <p><a href="" className="wgpt3">  What is GPT3? </a></p>
      <p><a href="" className=" possibility"> Open AI</a></p>
      <p>  <a href="" className="fetures">  Case studies  </a></p>
      <p><a href="" className="Blog">  Library   </a></p> 
     </>
    )
}
const Navbar = () =>{
  const [toggleMenu, setToggleMenu]= useState(false);

  return (
    <div className='gpt3__navbar'>
       <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
              <img src={logo} alt="logo"/>
          </div>
          <div className="gpt3__navbar-links_container">
            <Menu/>
          </div>
          <div className="gpt3__navbar-sign">
            <p className="signin"> Sign in</p>
            <button type='button'>Sign up</button>
          </div>
          <div className="gpt3__navbar-menu">
            {toggleMenu?<RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
            :<RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} />
            
          }
    
          { toggleMenu && ( 
             <div className="gpt3__navbar-menu_container scale-up-center">
             <div className="gpt3__navbar-menu_container-links ">
                      <Menu/>
               <div className="gpt3__navbar-menu_container-links-sign">
                  <p className="signin"> Sign in</p>
                  <button type='button'>Sign up</button>
               </div>    
              </div>
              
            </div> 
          )}
          </div>
       </div>
    </div>
  )
}

export default Navbar                                                                                                                                                                                                                                                                                                         