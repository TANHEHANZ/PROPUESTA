export interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
  errors?: any;
  metadata?: {
    timestamp: string;
    path: string;
    [key: string]: any;
  };
}

export interface PaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ResponseS {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}
