import {IUser} from "../IUser";

export interface AuthResponse {
    accessToken: String;
    refreshToken: string;
    user: IUser;
}