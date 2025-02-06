import { BaseApiService } from "@shared/services/base.service";
import type {
	User,
	LoginCredentials,
	RegisterData,
	AuthResponse,
	ResetPasswordData,
	ChangePasswordData,
} from "../types/auth.types";

class AuthService extends BaseApiService<User> {
	constructor() {
		super("/auth");
	}

	public async login(credentials: LoginCredentials): Promise<AuthResponse> {
		const response = await this.api.post(`${this.path}/login`, credentials);
		this.handleAuthResponse(response.data);
		return response.data;
	}

	public async register(data: RegisterData): Promise<AuthResponse> {
		const response = await this.api.post(`${this.path}/register`, data);
		this.handleAuthResponse(response.data);
		return response.data;
	}

	public async logout(): Promise<void> {
		await this.api.post(`${this.path}/logout`);
		this.clearAuth();
	}

	public async getCurrentUser(): Promise<User> {
		const response = await this.api.get(`${this.path}/me`);
		return response.data;
	}

	public async resetPassword(data: ResetPasswordData): Promise<void> {
		await this.api.post(`${this.path}/reset-password`, data);
	}

	public async changePassword(data: ChangePasswordData): Promise<void> {
		await this.api.post(`${this.path}/change-password`, data);
	}

	public async refreshToken(): Promise<AuthResponse> {
		const response = await this.api.post(`${this.path}/refresh-token`);
		this.handleAuthResponse(response.data);
		return response.data;
	}

	public isAuthenticated(): boolean {
		return !!localStorage.getItem("token");
	}

	private handleAuthResponse(authResponse: AuthResponse): void {
		localStorage.setItem("token", authResponse.token);
		localStorage.setItem("user", JSON.stringify(authResponse.user));
	}

	private clearAuth(): void {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	}
}

export const authService = new AuthService();
