export interface LoginResponse {
    token_type: string;
    iat:        number;
    expires_in: number;
    jwt_token:  string;
}
