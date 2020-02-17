import React, { Suspense } from "react";
import "../Styles/css/bootstrap.min.css";
import "../Styles/css/components.scss";
import "../Styles/css/style.scss";
import  logo from "../Styles/css/logo.png"

class Header extends React.Component {

  render(){
    return(
<header>

    <nav id="main-nav" class="navbar center navbar-default navbar-fixed-top" role="banner">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
               
                <a class="navbar-brand" href="#"><img src={logo} class="img-responsive" alt="logo" /></a>
            </div>

            <div class="collapse navbar-collapse">
            <div class="top_nav">
               <p> CALL US: 012 44  5698 7456 896</p>
                <div class="login_menu">
                <button className="header__button" onClick={e => this.props.toggleTheme(e)}>
      Toggle theme
    </button>
                <ul class="nav navbar-nav">
                    <li class="nav-link"><a href="#Login">LOGIN/REGISTER</a></li>
                    <li><a>|</a></li>
                    <li class="nav-link"><a href="#Account">MY ACCOUNT</a></li>
                    <li><a>|</a></li>
                    <li class="nav-link"><a href="#Contact">CONTACT US</a></li>
                   
                </ul> 
           
         </div>
        </div>
        <div class="container-fluid">
        
                <ul class="nav navbar-nav">
                    <li class="nav-link"><a href="#Home">Home</a></li>
                    <li class="nav-link"><a href="#Shop">Shop</a></li>
                    <li class="nav-link"><a href="#Blog">Blog</a></li>
                    <li class="nav-link"><a href="#Pages">Pages</a></li>
                    <li class="nav-link"><a href="#Contact">Contact</a></li>
                </ul>
                <span>
                 <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="fa fa-search"></span></a></li>
                        <li><a href="#"><span class="fa fa-user"></span></a></li>
                        <li><a href="#"><span class="fa fa-heart-o"></span></a></li>
                        <li><a href="#"><span class="fa fa-shopping-cart"></span></a></li>
                      </ul>
                </span>
            </div>
            </div>
    </nav>
</header>
    )
    }
};

export default Header;
