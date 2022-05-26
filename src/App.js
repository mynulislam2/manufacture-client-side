import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Component/Error';
import Footer from './Component/Fotter/Footer';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import ResetPass from './Component/ResetPass/ResetPass';
import Blogs from './Pages/Blogs/Blogs';
import BuyProduct from './Pages/BuyProduct/BuyProduct';
import AddProduct from './Pages/DashBoard/AddProduct';
import AddReview from './Pages/DashBoard/AddReview';
import DashBoard from './Pages/DashBoard/DashBoard';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';
import ManageAllorder from './Pages/DashBoard/ManageAllorder';
import ManageProducts from './Pages/DashBoard/ManageProducts';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyProfile from './Pages/DashBoard/MyProfile';
import Payment from './Pages/DashBoard/Payment';
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>

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
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="manageallorder" element={
            < ManageAllorder />} />
            <Route path="manageproducts" element={< ManageProducts />} />
          </Route>
          <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>

          <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;
