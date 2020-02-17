import React, { Suspense } from "react";
import "../Styles/css/bootstrap.min.css";
import "../Styles/css/components.scss";
import "../Styles/css/style.scss";
import first from "../Styles/images/1.png"
import second from "../Styles/images/2.png"
import third from "../Styles/images/3.png"
import fourth from "../Styles/images/4.png"
import fifth from "../Styles/images/5.png"
import sixth from "../Styles/images/6.png"
import seventh from "../Styles/images/7.png"
import eigth from "../Styles/images/8.png"

class Footer extends React.Component {

  render(){
    return(
      
<div className="footer_page">

<div class="container-fluid">
    <div class="row">
    <div class="col-md-3 col-sm-6">
        <div class="footer_block">
          <h4>About Us</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Lorem ipsum dolor sit amet, consectetur aidipisicing eit, sed do eiusmod tempor incididunt ut labore dolore manga aliua.</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer_block">
          <h4>Newsetter</h4>
          <ul class="list-unstyled">
            <li  class="margin-bottom"><a href="#">Stay updated with our latest trends</a></li>
            <li class="email"><input type="text" class="placeholder" placeholder="Email Address" /><a class="arrow" href="#">&#8594;</a></li>
           </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer_block">
          <h4>Instagram Feed</h4>
          <ul class="list-unstyled insta">
          <li>
            <img src={first} /><img src={second} /><img src={third} /><img src={fourth} /></li>
            <li><img src={fifth} /><img src={sixth} /><img src={seventh} /><img src={eigth}/></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
                <div class="footer_block">
    		<h4>Follow Us</h4>
            <ul class="list-unstyled">
            <li class="social-margin">Let us be social</li>
             <li class="icons">  
                 <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
            </li>     
            </ul>
        </div>

		</div>
    </div>
    <div class="row">
		<div class="col-md-12 copy">
			<p class="text-center"> Copyright &copy;2020</p>
		</div>
	</div>
</div>

</div>
    )
    }
};

export default Footer;
