import React, {Component} from 'react';
import Home from './Home'
import Cart from './Cart'
import Order from './Order'
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (      
        <BrowserRouter>
            <div>
              <Route  exact path="/" component={Home}/>
              <Route  path="/cart" component={Cart}/>
              <Route  path="/order" component={Order}/>
            </div>
        </BrowserRouter>
    );
    }
}

export default App;
