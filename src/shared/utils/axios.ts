import axios from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const api = axios.create({
	baseURL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Request interceptor
api.interceptors.request.use(
	config => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

// Response interceptor
api.interceptors.response.use(
	response => response,
	error => {
		const message = error.response?.data?.message || "An error occurred";

		switch (error.response?.status) {
			case 401:
				toast.error("Session expired. Please login again.");
				localStorage.removeItem("token");
				window.location.href = "/login";
				break;
			case 403:
				toast.error("You do not have permission to perform this action");
				break;
			case 404:
				toast.error("Resource not found");
				break;
			case 500:
				toast.error("Server error. Please try again later");
				break;
			default:
				toast.error(message);
		}

		return Promise.reject(error);
	},
);
