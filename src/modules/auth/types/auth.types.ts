export interface User {
	id: string;
	email: string;
	name: string;
	role: "admin" | "user";
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface RegisterData {
	email: string;
	password: string;
	name: string;
}

export interface AuthResponse {
	user: User;
	token: string;
}

export interface ResetPasswordData {
	email: string;
}

export interface ChangePasswordData {
	oldPassword: string;
	newPassword: string;
}
