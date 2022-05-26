import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/Fotter/Footer';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import ResetPass from './Component/ResetPass/ResetPass';
import BuyProduct from './Pages/BuyProduct/BuyProduct';
import AddReview from './Pages/DashBoard/AddReview';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyProfile from './Pages/DashBoard/MyProfile';
import Payment from './Pages/DashBoard/Payment';
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/login' element={<Login></Login>}>
          </Route>
          <Route path='/resetPass' element={<ResetPass></ResetPass>}>
          </Route>
          <Route path='/registration' element={<Registration></Registration>}>
          </Route>
          <Route path='/purchase/:id' element={
            <RequireAuth><BuyProduct></BuyProduct></RequireAuth>
          }>
          </Route>
          <Route path='/pay/:id' element={
            <RequireAuth><Payment></Payment></RequireAuth>
          }>
          </Route>
          
          <Route path="dashboard" element={<RequireAuth><DashBoard /></RequireAuth>}>
            <Route index path="addreview" element={<AddReview />} />
            <Route path="myorder" element={<MyOrders />} />
            <Route path="myprofile" element={<MyProfile />} />
          </Route>
          <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
