import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Paths from './Paths';
import HomeScreen from './Screen/HomeScreen';
import AboutUs from './Screen/AboutUs';
import ScrollToTop from './Common/ScrollToTop';
import { LanguageProvider } from './Common/LanguageContext';
import Gallary from './Screen/Gallary';
import ProductDetail from './Component/ProductDetails/ProductDetails';
import ProductList from './Component/Home/Product/AllProductScreen';


function App() {
  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path={Paths.Home} element={<HomeScreen />} />
            <Route path={Paths.AboutUs} element={<AboutUs />} />
            <Route path={Paths.Gallary} element = {<Gallary />} />
            <Route path={Paths.AllProduct} element = {<ProductList />} />
            <Route path={Paths.ProductDetails} element = {<ProductDetail />} />
            {/* <Route path={Paths.ContactUs} element={<Contact />} />
          <Route path={Paths.Product} element={<Service />} /> */}
          </Routes>
        </BrowserRouter>
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
