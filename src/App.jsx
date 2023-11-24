import './App.css'
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {StorePage} from "./pages/StorePage.jsx";
import {ErrorPage} from "./pages/ErrorPage.jsx"
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout.jsx";
import {AdminPage} from "./pages/AdminPage.jsx";

function App() {
    const ROLES = {
        User: 1986,
        Admin: 2401
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="*" element={<NotFoundPage/>} errorElement={<ErrorPage/>}/>
                <Route path="/" element={<HomePage/>} errorElement={<ErrorPage/>}/>
                <Route path="store" element={<StorePage/>} errorElement={<ErrorPage/>}/>

                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                    <Route path="admin" element={<AdminPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
