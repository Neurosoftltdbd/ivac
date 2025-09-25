import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage";
import DashboardPage from "./dashboard/DashboardPage";
import SettingsPage from "./dashboard/SettingsPage";
import ProfilePage from "./dashboard/ProfilePage";
import IvacCustomerPage from "./dashboard/IvacCustomerPage";
import NotFoundPage from "./NotFoundPage";
import IvacCodePage from './dashboard/IvacCodePage';
import CreateIvacCustomerPage from './dashboard/CreateIvacCustomerPage';



function App() {
    const isLogedin = true;

    const commonRuotes = [
        {path:'/', element:<LoginPage/>},
        {path:'*', element:<NotFoundPage/>}
    ]

    const protectedRoutes = [
        {path:"/dashboard", element:<DashboardPage/>},
        {path:"/settings", element:<SettingsPage/>},
        {path:"/profile", element:<ProfilePage/>},
        {path:"/ivac-customer", element:<IvacCustomerPage/>},
        {path:"/ivac", element:<IvacCodePage/>},
        {path:"/create-ivac-customer", element:<CreateIvacCustomerPage/>}

    ]

    const routes = isLogedin? [...protectedRoutes, ...commonRuotes]:[...commonRuotes];

    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map(({path, element}, index)=>(
                        <Route path={path} element={element}  key={index}/>
                    ))
                }
            </Routes>
        </BrowserRouter>

    );
}

export default App
