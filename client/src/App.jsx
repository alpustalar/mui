import './App.scss'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {MainLayout} from "./MainLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import Register from "./components/account/Register.jsx";





const App = () => {
    return (
       <BrowserRouter>
            <Routes>
                {/*** USER ROUTES START*/}

                <Route path="/" element={<MainLayout />}>
                    {/*** static pages start */}

                   <Route index element={ <IndexPage/> }/>
                   <Route path="about-us" element={ <AboutUsPage/> }/>
                   <Route path="products" element={ <ProductsPage/> }/>
                   <Route path="account" element={ <AccountPage/> }/>
                   <Route path="register" element={ <Register/> }/>

                    {/*! static pages end */}
                </Route>

                {/*! USER ROUTES END*/}



                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;