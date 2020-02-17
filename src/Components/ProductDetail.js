import React, { Suspense } from "react";
import "../Styles/css/bootstrap.min.css";
import "../Styles/css/components.scss";
import "../Styles/css/style.scss";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import Header from "./Header";

class ProdDetail extends React.Component {
    constructor(props){ 
        super(props)
        this.state = {
          theme: "light",
          activeArticleId: 1
        };
        this.toggleTheme=this.toggleTheme.bind(this)
        };
        toggleTheme() {
            const theme = this.state.theme === "light" ? "dark" : "light";
            document.documentElement.classList.add("color-theme-in-transition");
            this.setState({ theme });
            document.documentElement.setAttribute("data-theme", theme);
            window.setTimeout(() => {
              document.documentElement.classList.remove("color-theme-in-transition");
            }, 1000);
          }

  render(){
      
    return(
<div className="product_detial">
<Header toggleTheme={this.toggleTheme} />
<div class="banner_subpage">
<img class="img-responsive img-changes" />
<div class="banner_text">
<h1>single Product Page</h1>
<p>Home &#8594; Category &#8594; Product Detials</p>
</div>
</div>
<div class="container-fluid paddingT120">
            <div class="row">
                <div class="col-md-6 image_block" ><img src="./assets/f-p-1.png" alt="" />
                </div>
                <div class="col-md-6 product_desc">
                    <h2>Item Model</h2>
                    <p class="price">$159</p>
                    <pre id="t1">
                        <strong>Category</strong>       : Household
                    </pre>
                    <pre class="t2">
                        <strong>Availability</strong>    : InStock
                    </pre>
                  <p id="message">Mill Oil is an innovative oil filled radiator with the most modern techonology. If you are looking for something that can make your interior look awsome. and at the same time give you the plesant warm feeling during the winter.</p>
                   
                    <pre> <label class="t2">Quantity:    </label>
  <input type="number" id="quantity" name="quantity" min="1" max="5" /></pre>
        <div class="add_cart"><button type="button" class="btn btn-default cart">ADD TO CART</button><span class="fa fa-diamond"></span><span class="fa fa-heart-o"></span></div>
        </div>     
        </div>
        </div>
<NewsLetter />
<Footer />
</div>
    )}
};

export default ProdDetail;
