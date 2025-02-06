import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./modules/auth/context/AuthContext";
import { AppRoutes } from "./routes";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			staleTime: 5 * 60 * 1000, // 5 minutes
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthProvider>
					<AppRoutes />
					<ToastContainer />
				</AuthProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
