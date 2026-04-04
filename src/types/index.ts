/** Generic API response wrapper */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}

/** Feature card data */
export interface Feature {
  title: string;
  description: string;
  icon: string;
}
