import { Routes, Route, Navigate } from "react-router-dom";
import { AuthGuard } from "@modules/auth/routes/AuthGuard";
import { GuestGuard } from "@modules/auth/routes/GuestGuard";
import { LoginPage } from "@modules/auth/pages/LoginPage";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='/login'
				element={
					<GuestGuard>
						<LoginPage />
					</GuestGuard>
				}
			/>
			{/* <Route
				path='/register'
				element={
					<GuestGuard>
						<RegisterPage />
					</GuestGuard>
				}
			/> */}
			<Route
				path='/dashboard'
				element={
					<AuthGuard>
						<h1>Dashboard</h1>
					</AuthGuard>
				}
			/>

			<Route path='*' element={<Navigate to='/login' replace />} />
		</Routes>
	);
};
