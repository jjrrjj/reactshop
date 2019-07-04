import React from 'react';
import './App.scss';
import { Route, Link,Switch} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage.component'
import Shop from './Pages/Shop/Shop.component'

import './App.scss';

const About = () => {
  return (
    <div>
      about
    </div>
  );
}
const Contact = () => {
  return (
    <div>
      Contact
    </div>
  );
}
const NotFound = () => {
  return (
    <div>
      NOT FOUND
    </div>
  );
}
// const Shop = (props) => {

//   return (
//     <div>

//           <Link to={`hats `}>Hats</Link>
//           <Link to={`coats `}>Coats</Link>
//           <Link to={`jackets `}>Jackets</Link>

//       {props.match.params.item ? (
//         <div>
//           showing {props.match.params.item}
//         </div>
//       ):(
//         <div>
//           showing all
//         </div>
//       )}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
            <li>
              <Link to="/shop/">Shop All</Link>
            </li>
          </ul>
        </nav>

      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/shop/:item" component={Shop}/>
        <Route path="/shop/" exact component={Shop}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
