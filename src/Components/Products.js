import React, { Suspense } from "react";
import "../Styles/css/bootstrap.min.css";
import "../Styles/css/components.scss";
import "../Styles/css/style.scss";
import PostData from '../data/productsL.json';
import { withRouter } from 'react-router-dom';
import placeholderImg from '../Styles/css/f-p-1.png'
import placeholderImg2 from '../Styles/css/f-p-2.png'
import placeholderImg3 from '../Styles/css/f-p-3.png'
import placeholderImg4 from '../Styles/css/f-p-4.png'
import placeholderImg5 from '../Styles/css/f-p-5.png'

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
           if(postDetail.Photo.includes('f-p-1')){
              return ( <div class="col-xs-12 col-sm-6 col-md-2 item">
              <img class="img-responsive img-changes" alt={postDetail.id} src={placeholderImg} width="219"
                  height="254" />
                   <div class="overlay">
<a class="icon eyeicon" title="User view" onClick={this.handleClick}><i class="fa fa-eye"></i></a>
<a class="icon hearticon" title="User wish" onClick={this.heartClick}><i class="fa fa-heart-o"></i></a>
</div>
              <p><b>{postDetail.type}</b></p>
              <p><span>&#36;</span>{postDetail.price}.00</p>
          </div>
      )
          }
         else if(postDetail.Photo.includes('f-p-2')){
            return ( <div class="col-xs-12 col-sm-6 col-md-2 item">
            <img class="img-responsive img-changes" alt={postDetail.id} src={placeholderImg2} width="219"
                height="254" />
                 <div class="overlay">
<a class="icon eyeicon" title="User view" onClick={this.handleClick}><i class="fa fa-eye"></i></a>
<a class="icon hearticon" title="User wish" onClick={this.heartClick}><i class="fa fa-heart-o"></i></a>
</div>
            <p><b>{postDetail.type}</b></p>
            <p><span>&#36;</span>{postDetail.price}.00</p>
        </div>
    )
        }
        else if(postDetail.Photo.includes('f-p-3')){
          return ( <div class="col-xs-12 col-sm-6 col-md-2 item">
          <img class="img-responsive img-changes" alt={postDetail.id} src={placeholderImg3} width="219"
              height="254" />
               <div class="overlay">
<a class="icon eyeicon" title="User view" onClick={this.handleClick}><i class="fa fa-eye"></i></a>
<a class="icon hearticon" title="User wish" onClick={this.heartClick}><i class="fa fa-heart-o"></i></a>
</div>
          <p><b>{postDetail.type}</b></p>
          <p><span>&#36;</span>{postDetail.price}.00</p>
      </div>
  )
      }
      else if(postDetail.Photo.includes('f-p-4')){
        return ( <div class="col-xs-12 col-sm-6 col-md-2 item">
        <img class="img-responsive img-changes" alt={postDetail.id} src={placeholderImg4} width="219"
            height="254" />
             <div class="overlay">
<a class="icon eyeicon" title="User view" onClick={this.handleClick}><i class="fa fa-eye"></i></a>
<a class="icon hearticon" title="User wish" onClick={this.heartClick}><i class="fa fa-heart-o"></i></a>
</div>
        <p><b>{postDetail.type}</b></p>
        <p><span>&#36;</span>{postDetail.price}.00</p>
    </div>
)
    }
    else if(postDetail.Photo.includes('f-p-5')){
      return ( <div class="col-xs-12 col-sm-6 col-md-2 item">
      <img class="img-responsive img-changes" alt={postDetail.id} src={placeholderImg5} width="219"
          height="254" />
           <div class="overlay">
<a class="icon eyeicon" title="User view" onClick={this.handleClick}><i class="fa fa-eye"></i></a>
<a class="icon hearticon" title="User wish" onClick={this.heartClick}><i class="fa fa-heart-o"></i></a>
</div>
      <p><b>{postDetail.type}</b></p>
      <p><span>&#36;</span>{postDetail.price}.00</p>
  </div>
)
  }
      })
      
    
            }
         
          </div>
          </div>
       </div>
      );
    }
};

export default withRouter(PostList)