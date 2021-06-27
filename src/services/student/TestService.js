import {GeneralService} from "../GeneralService";
import {RootAPI} from "../../config/api.config";

export const TestService = {
    getListTest(studentId) {
        return GeneralService.get(`${RootAPI.STUDENT}/${studentId}/list/test`);
    }
}