
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage.jsx";
import LoginPage from "./LoginPage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import ProfilePage from "./dashboard/ProfilePage.jsx";
import SettingsPage from "./dashboard/SettingsPage.jsx";
import IvacCustomerPage from "./dashboard/IvacCustomerPage.jsx";

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