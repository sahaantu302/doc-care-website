
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Gallery from './pages/Gallery/Gallery';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <PrivateRoute path="/appointment/:serviceId">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
