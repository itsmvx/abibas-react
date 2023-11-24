import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const MiddleWare = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/not-found" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    )
}

MiddleWare.propTypes = {
    allowedRoles: PropTypes.any
}
export default MiddleWare