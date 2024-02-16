import { Home } from './pages/Home/home.jsx';
import { AboutUs } from './pages/AboutUs/aboutUs.jsx';
import { ContactUs } from './pages/ContactUs/contactUs.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import { Header } from './layouts/header.jsx';
import { Footer } from './layouts/Footer.jsx';
import { MyProvider } from './utils/ContextProvider.jsx';
import { Shop } from './pages/shop/shop.jsx';
import { Product } from './pages/product/product.jsx';
import { Carte } from './pages/carte/carte.jsx';
import { CartProvider } from 'react-use-cart';


function App() {
    return (
        <MyProvider> 
            <CartProvider>
        <Header/>
            <Routes>
                {/* <Route path='*' element={<Error/>} /> */}
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<AboutUs/>} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/product/:name' element={<Product />}/>
                <Route path='/carte' element ={<Carte/>}/>
                
            </Routes>
            <Footer/>
                </CartProvider> 
        </MyProvider>
    );
}

export default App;
