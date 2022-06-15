import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Cart';
import Navbar from './Component/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import PdDetails from './Component/PdDetails/PdDetails';
import Checkout from './Component/Checkout/Checkout';

function App() {
  return (

     <Router>
        <Provider store={store}>
        <Navbar></Navbar>
       <Switch>
         <Route exact path='/'>
            <Home></Home>
         </Route>

         <Route  path='/home'>
            <Home></Home>
         </Route>
          <Route path='/details/:id'>
             <PdDetails></PdDetails>
          </Route>
          <Route path='/cart'>
              <Cart></Cart>
          </Route>

          <Route path='/checkout'>
             <Checkout></Checkout>
          </Route>

       </Switch>
       </Provider>
     </Router>
    
     
  );
}

export default App;
