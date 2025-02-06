/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosResponse } from "axios";
import type {
	PaginatedResponse,
	QueryParams,
} from "@shared/types/base-service.type";
import { api } from "@shared/utils/axios";

export class BaseApiService<T> {
	api = api;
	constructor(protected readonly path: string) {}

	/**
	 * Get all items with optional pagination and filtering
	 */
	protected async getAll(params?: QueryParams): Promise<PaginatedResponse<T>> {
		const response: AxiosResponse<PaginatedResponse<T>> = await this.api.get(
			this.path,
			{ params },
		);
		return response.data;
	}

	/**
	 * Get a single item by ID
	 */
	protected async getById(id: string | number): Promise<T> {
		const response: AxiosResponse<T> = await this.api.get(`${this.path}/${id}`);
		return response.data;
	}

	/**
	 * Create a new item
	 */
	protected async create(data: Partial<T>): Promise<T> {
		const response: AxiosResponse<T> = await this.api.post(this.path, data);
		return response.data;
	}

	/**
	 * Update an existing item
	 */
	protected async update(id: string | number, data: Partial<T>): Promise<T> {
		const response: AxiosResponse<T> = await this.api.put(
			`${this.path}/${id}`,
			data,
		);
		return response.data;
	}

	/**
	 * Patch an existing item
	 */
	protected async patch(id: string | number, data: Partial<T>): Promise<T> {
		const response: AxiosResponse<T> = await this.api.patch(
			`${this.path}/${id}`,
			data,
		);
		return response.data;
	}

	/**
	 * Delete an item
	 */
	protected async delete(id: string | number): Promise<void> {
		await this.api.delete(`${this.path}/${id}`);
	}

	/**
	 * Bulk create items
	 */
	protected async bulkCreate(data: Partial<T>[]): Promise<T[]> {
		const response: AxiosResponse<T[]> = await this.api.post(
			`${this.path}/bulk`,
			data,
		);
		return response.data;
	}

	/**
	 * Bulk update items
	 */
	protected async bulkUpdate(
		data: Array<{ id: string | number } & Partial<T>>,
	): Promise<T[]> {
		const response: AxiosResponse<T[]> = await this.api.put(
			`${this.path}/bulk`,
			data,
		);
		return response.data;
	}

	/**
	 * Bulk delete items
	 */
	protected async bulkDelete(ids: Array<string | number>): Promise<void> {
		await this.api.delete(`${this.path}/bulk`, { data: { ids } });
	}

	/**
	 * Helper method to build query string
	 */
	protected buildQueryString(params: QueryParams): string {
		return Object.entries(params)
			.filter(([_, value]) => value !== undefined && value !== null)
			.map(
				([key, value]) =>
					`${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
			)
			.join("&");
	}
}
