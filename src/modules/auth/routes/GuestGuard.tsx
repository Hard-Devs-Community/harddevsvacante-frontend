import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const GuestGuard = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated } = useAuthContext();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/dashboard";

	if (isAuthenticated) {
		return <Navigate to={from} replace />;
	}

	return <>{children}</>;
};
