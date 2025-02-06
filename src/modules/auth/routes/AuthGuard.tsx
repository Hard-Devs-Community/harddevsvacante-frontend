import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated } = useAuthContext();
	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return <>{children}</>;
};
