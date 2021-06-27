import {GeneralService} from "../GeneralService";
import {RootAPI} from "../../config/api.config";

export const AuthenticatedService = {
    async login({username, password}) {
        return await GeneralService.post(`${RootAPI.STUDENT}/login`, {username, password});
    }
}