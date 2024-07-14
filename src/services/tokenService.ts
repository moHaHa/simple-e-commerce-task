export interface ITokenPayload {
	exp: number;
	iat: number;
	id: string;
}

class TokenService {
	getLocalRefreshToken() {
		const refreshToken = localStorage.getItem('refreshToken');
		return refreshToken;
	}
	getLocalAccessToken() {
		const accessToken = localStorage.getItem('accessToken');
		return accessToken;
	}
	getLocalFakeAccessToken() {
		const username = localStorage.getItem('username');
		const password = localStorage.getItem('password');
		return username && password ? { username, password } : undefined;
	}

	setLocalAccessToken(value: string) {
		localStorage.setItem('accessToken', value);
	}
	setLocalRefreshToken(value: string) {
		localStorage.setItem('refreshToken', value);
	}
	setAuthToken(accessToken: string, refreshToken: string) {
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('refreshToken', refreshToken);
	}
	setFakeAuthToken(username: string, password: string) {
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
	}
	logout() {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
	}
	fakeLogout() {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
}
export default new TokenService();
