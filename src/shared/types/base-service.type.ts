/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PaginatedResponse<T> {
	data: T[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

export interface QueryParams {
	page?: number;
	limit?: number;
	sort?: string;
	order?: "asc" | "desc";
	[key: string]: any;
}
