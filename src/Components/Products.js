import React, { Suspense } from "react";
import "../Styles/css/bootstrap.min.css";
import "../Styles/css/components.scss";
import "../Styles/css/style.scss";
import PostData from '../data/productsL.json';
import { withRouter } from 'react-router-dom';

class PostList extends React.Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.heartClick=this.heartClick.bind(this)
  }

  handleClick(){
    this.props.history.push('/productDetail')
  }
  heartClick(e){
    console.log("Heart icon clicked",e.target)
    var hasClass = e.target.classList.contains('fa-heart-o');
   if(hasClass){
     console.log('Entered Condition')
     e.target.classList.remove('fa-heart-o');
     e.target.classList.add('fa-heart');
   }
   else{
    e.target.classList.remove('fa-heart');
    e.target.classList.add('fa-heart-o');

   }
  }
  
    render(){
      console.log(this.props,'props')
      return(
        <div class="Products_page paddingT120">
          <div class="container">
            <div class="row text-center">
          {PostData.map((postDetail, index) => {
          return ( <div class="col-xs-12 col-sm-6 col-md-2 item">
                  <img class="img-responsive img-changes" alt={postDetail.id} src={postDetail.Photo} width="219"
                      height="254" />
                       <div class="overlay">
  <a class="icon eyeicon" title="User view" onClick={this.handleClick}><i class="fa fa-eye"></i></a>
  <a class="icon hearticon" title="User wish" onClick={this.heartClick}><i class="fa fa-heart-o"></i></a>
  </div>
                  <p><b>{postDetail.type}</b></p>
                  <p><span>&#36;</span>{postDetail.price}.00</p>
              </div>
          )
          })}
          </div>
          </div>
       </div>
      );
    }
};

export default withRouter(PostList)