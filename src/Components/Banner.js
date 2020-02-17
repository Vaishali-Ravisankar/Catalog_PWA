import React, { Suspense } from "react";
import "../Styles/css/bootstrap.min.css";
import "../Styles/css/components.scss";
import "../Styles/css/style.scss";


class Banner extends React.Component {
    
  render(){
    return(
      <React.Fragment>
      
<div className="Banner_page">
<div class="banner_image">
<img class="img-responsive img-changes" />
<div class="banner_text">
<h1>Fashion for <br />Upcoming Winter</h1>
<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Ut enim ad minim veniam, quis nostrud exercitation</p>
           <a href="#" class="btn btn-default btn-lg">View Collection</a>
</div>
</div>
  
</div>
</React.Fragment>
    )
    }
};

export default Banner;
