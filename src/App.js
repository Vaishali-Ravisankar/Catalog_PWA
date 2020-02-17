import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
function App() {
    Notification.requestPermission(function(status) {
      console.log("Notification permission status:", status);
      displayNotification();
    });
  
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

function displayNotification() {

  
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'Shop Soon! Offer Ends!',
        //icon:'../images/2.png',
        icon: 'https://dummyimage.com/200x100/000/fff',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {action: 'close', title: 'Close notification',
            icon: 'images/1.png'},
        ]
      };
      reg.showNotification('Welcome to Women\'s Catalog', options);
    });
  }

}




export default App;


