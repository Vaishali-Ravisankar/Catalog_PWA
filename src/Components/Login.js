import React, { Suspense } from "react";
import "../Styles/css/bootstrap.min.css";
import "../Styles/css/components.scss";
import "../Styles/css/style.scss";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";
import PostList from "./Products";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import PubNubReact from 'pubnub-react';
class Login extends React.Component {
  constructor(props){ 
  super(props)
  this.state = {
    theme: "light",
    activeArticleId: 1
  };
  this.toggleTheme=this.toggleTheme.bind(this)
  };
  // componentDidMount(){
  //   Notification.requestPermission(function(status) {
  //     console.log("Notification permission status:", status);
  //     if (Notification.permission == 'granted') {
  //       navigator.serviceWorker.getRegistration().then(function(reg) {
  //         var options = {
  //           body: 'Here is a notification body!',
  //           icon:'../images/2.png',
  //          // icon: 'https://dummyimage.com/200x100/000/fff',
  //           vibrate: [100, 50, 100],
  //           data: {
  //             dateOfArrival: Date.now(),
  //             primaryKey: 1
  //           },
  //           actions: [
  //             {action: 'close', title: 'Close notification',
  //               icon: 'images/1.png'},
  //           ]
  //         };
  //         reg.showNotification('Notification here!!!!!', options);
  //       });
  //     }
  //   });
  // }


 
  toggleTheme() {
    const theme = this.state.theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("color-theme-in-transition");
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  }

  render() {
    return (
      <div>
        <Header toggleTheme={this.toggleTheme} />
        <Banner />
        <PostList />
        <NewsLetter />
        <Footer />
        
      </div>
    );
  }
}

export default Login;
