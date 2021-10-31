import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import AddService from './pages/Home/Profile/AddService/AddService';
import ManageOrder from './pages/Home/Profile/ManageOrder/ManageOrder';
import MyBooking from './pages/Home/Profile/MyBooking/MyBooking';
import PlaceService from './pages/Home/Services/PlaceService';
import ServiceDetails from './pages/Home/Services/ServiceDetails';
import Login from './pages/Login/Login';
import PrivateRouter from './pages/Login/PrivateRouter';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRouter path="/service-details/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRouter>
            <PrivateRouter path="/place-service/:id">
              <PlaceService></PlaceService>
            </PrivateRouter>
            <PrivateRouter path="/add-service">
              <AddService></AddService>
            </PrivateRouter>
            <PrivateRouter path="/manage-order">
              <ManageOrder></ManageOrder>
            </PrivateRouter>
            <PrivateRouter path="/my-booking">
              <MyBooking></MyBooking>
            </PrivateRouter>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
