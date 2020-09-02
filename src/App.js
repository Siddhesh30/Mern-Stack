import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import OrderList from "./components/orders-list.component"
import CreateOrder from "./components/create-order.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={OrderList} />
      <Route path="/create" component={CreateOrder} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
