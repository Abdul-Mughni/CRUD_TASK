import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <header class="header navbar-fixed-top">
    <nav class="navbar" role="navigation">
      <div class="container">
            <div class="menu-container js_nav-item">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="toggle-icon"></span>
              </button>

                <div class="logo">
                  <a class="logo-wrap" href="#body">
                      <img class="logo-img logo-img-main" src="img/logo.png" alt="FlameOnePage Logo"/>
                      <img class="logo-img logo-img-active" src="img/logo-dark.png" alt="FlameOnePage Dark Logo"/>
                  </a>
              </div>
          </div>

          <div class="collapse navbar-collapse nav-collapse">
          

          
              <div class="menu-container">
                  <ul class="nav navbar-nav navbar-nav-right">
                      <li class="js_nav-item nav-item" ><Link class="nav-item-child nav-item-hover" style={{color:"black"}} to="/">Home</Link></li>
                      <li class="js_nav-item nav-item"><Link class="nav-item-child nav-item-hover" style={{color:"black"}} to="/Generic">Generic</Link></li>
                      <li class="js_nav-item nav-item"><Link class="nav-item-child nav-item-hover" style={{color:"black"}} to="/Todo">Todo</Link></li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>
  </header>
  </>
  )
}

export default Navbar