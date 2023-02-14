import axios from "axios";
import TokenModel from "../../models/tokens/TokenModel";
import { Config } from "../Config";

interface ISignUpTokenService {
    getToken(userName: any, password: any): Promise<TokenModel>;
}

const TOKEN_API = "auth/register";

const SignUpTokenService: ISignUpTokenService = {
    getToken: async (userName, password) => {
        const instance = axios.create({
            baseURL: Config?.API_ENDPOINT_URL,
            timeout: 1000
        });
        const url = `${Config?.API_ENDPOINT_URL}${TOKEN_API}`;
        const response = await instance.post(url, { userName, password });
        return response.data;
    },
};

export default SignUpTokenService;