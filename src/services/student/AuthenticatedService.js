import GeneralService from "../GeneralService";
import baseURL from "../../config/api.config";

export const login = ({username, password}) => {
    return GeneralService.post(`${baseURL}/login/student`, {username, password});
}
