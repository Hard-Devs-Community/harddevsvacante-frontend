import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authService } from "@modules/auth/services/auth.service";
import type {
	LoginCredentials,
	RegisterData,
} from "@modules/auth/types/auth.types";

export const useAuth = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { data: user } = useQuery({
		queryKey: ["user"],
		queryFn: () => authService.getCurrentUser(),
		enabled: authService.isAuthenticated(),
	});

	const loginMutation = useMutation({
		mutationFn: (credentials: LoginCredentials) =>
			authService.login(credentials),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
			toast.success("Welcome back!");
			navigate("/dashboard");
		},
		onError: (error: any) => {
			toast.error(error.response?.data?.message || "Login failed");
		},
	});

	const registerMutation = useMutation({
		mutationFn: (data: RegisterData) => authService.register(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
			toast.success("Registration successful!");
			navigate("/dashboard");
		},
		onError: (error: any) => {
			toast.error(error.response?.data?.message || "Registration failed");
		},
	});

	const logoutMutation = useMutation({
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			queryClient.clear();
			toast.success("Logged out successfully");
			navigate("/login");
		},
	});

	return {
		user,
		isAuthenticated: authService.isAuthenticated(),
		login: loginMutation.mutate,
		register: registerMutation.mutate,
		logout: logoutMutation.mutate,
		isLoading: loginMutation.isPending || registerMutation.isPending,
	};
};
