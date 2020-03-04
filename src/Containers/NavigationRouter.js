import React from 'react';
import { Switch,Route, Router,Redirect} from 'react-router-dom';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Login from '../Components/Login';
import ProdDetail from '../Components/ProductDetail';
import ScrollToTop from '../Components/ScrollToTop'
import App from '../App'
import history from '../Components/History';
import ConfigureStore from '../Stores/ConfigureStore';


const store = ConfigureStore;

class  NavigationRouter extends React.Component{

    render(){
    return(
        <Provider store={store}>
            <Router history={history} > 
            <ScrollToTop>
                <Route exact path="/" component={App}/>
                <Route exact path="/#home" component={App}/>
                <Route exact path="/productDetail" component={ProdDetail}/>
                </ScrollToTop>
            </Router>
        </Provider>
        
        
    );
    }
}
export default NavigationRouter;