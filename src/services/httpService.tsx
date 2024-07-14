import { message } from 'antd';
import axios, { AxiosError } from 'axios';
import tokenService from './tokenService';

export const baseURL = ((import.meta.env.VITE_API_BASE_URL as string) ?? '').trim()
	? (import.meta.env.VITE_API_BASE_URL as string)
	: // : 'https://reqres.in/api';
		'https://fakestoreapi.com/';
const http = axios.create({
	baseURL,
});

http.interceptors.request.use(
	(config) => {
		const token = tokenService.getLocalAccessToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
			config.headers['post'] = { 'Content-Type': 'application/json' };
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

http.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err: HttpError) => {
		// Access Token was expired
		/**
		 * Set up Auth
		 */
		if (err.response?.status === 401 && err.response?.data?.msg !== 'Invalid authentication email or password.') {
			const refreshToken = tokenService.getLocalRefreshToken();
			const rs = await axios
				.post<IAuthResponse>(`${baseURL}/auth/refresh-token`, {
					token: refreshToken,
				})
				.catch((err) => {
					if (err.response?.data?.msg == 'invalid refresh token') {
						tokenService.logout();
						window.open('/login', '_self');
					}
					return Promise.reject(err);
				});
			tokenService.setLocalAccessToken(rs?.data?.data?.accessToken);
			tokenService.setLocalRefreshToken(rs?.data?.data?.refreshToken);
			return http(err.response.config);
		}

		message.error('Error');
		return Promise.reject(err);
	}
);

export type HttpError = AxiosError<{
	msg: string;
	args?: string[];
}>;

export interface IAuthResponse {
	data: {
		accessToken: string;
		refreshToken: string;
	};
}

export default http;
