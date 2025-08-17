import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Contact from './components/common/Contact'
import Footer from './components/common/Footer'
import Adminlogin from './components/admin/Adminlogin'
import Buyerlogin from './components/buyer/Buyerlogin'
import Feedback from './components/buyer/Feedback'
import Buyer_registration from './components/buyer/Buyer_registration'
import BuyerHome from './components/buyer/BuyerHome'
import SellerLogin from './components/seller/SellerLogin'
import SellerRegister from './components/seller/SellerRegister'
import Buyereditprofile from './components/buyer/Buyereditprofile'
import SellerHome from './components/seller/SellerHome'
import Allcontacts from './components/admin/Allcontacts'
import Adminhome from './components/admin/Adminhome'
import Feedbackdetails from './components/admin/Feedbackdetails'
import Bookdetails from './components/seller/Bookdetails'
import Mainpage from './components/seller/Mainpage'
import Showbookdata from './components/seller/Showbookdata'
import Searchresults from "./components/buyer/Searchresults"
import Addedbooks from './components/seller/Addedbooks'
import SellerHeader from './components/seller/SellerHeader'
import SellerProfile from './components/seller/SellerProfile'
import Sellereditprofile from './components/seller/Sellereditprofile'
import BookInventory from './components/seller/BookInventory'
import Aboutus from './components/aboutus/Aboutus'
import Landing from './components/common/Landing'

const Routepath = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Footer' element={<Footer/>}></Route>
    <Route path='/Adminlogin' element={<Adminlogin/>}></Route>
    <Route path='/Buyerlogin' element={<Buyerlogin/>}></Route>
    <Route path='/Feedback' element={<Feedback/>}></Route>
    <Route path='/Buyer_registration' element={<Buyer_registration/>}></Route>
    <Route path='/BuyerHome' element={<BuyerHome/>}></Route>
    <Route path='/SellerLogin' element={<SellerLogin/>}></Route>
    <Route path='/SellerRegister' element={<SellerRegister/>}></Route>
    <Route path='/Buyereditprofile' element={<Buyereditprofile/>}></Route>
    <Route path='/SellerHome' element={<SellerHome/>}></Route>
    <Route path='/Adminlogin' element={<Adminlogin/>}></Route>
    <Route path='/Allcontacts' element={<Allcontacts/>}></Route>
    <Route path='/Adminhome' element={<Adminhome/>}></Route>
    <Route path='/Feedbackdetails' element={<Feedbackdetails/>}></Route>
    <Route path='/Bookdetails' element={<Bookdetails/>}></Route>
    <Route path='/Mainpage' element={<Mainpage/>}></Route>
    <Route path='/Showbookdata' element={<Showbookdata/>}></Route>
    <Route path='/Searchresults' element={<Searchresults/>}></Route>
    <Route path='/Addedbooks' element={<Addedbooks/>}></Route>
    <Route path='/SellerHeader' element={<SellerHeader/>}></Route>
    <Route path='/SellerProfile' element={<SellerProfile/>}></Route>
    <Route path='/Sellereditprofile' element={<Sellereditprofile/>}></Route>
    <Route path='/bookInventory' element={<BookInventory/>}></Route>
    <Route path='/Aboutus' element={<Aboutus/>}></Route>
    <Route path='/Landing' element={<Landing/>}></Route>
   

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routepath
