import GeneralService from "../GeneralService";
import {RootAPI} from "../../config/api.config";

export const listExamsOfStudent = ({page, size, query}) => {
    let params = {};
    if(page) params = {...params, page: page || 0};
    if(size) params = {...params, size: size || 25};
    if(query) params = {...params, query: query.trim()};

    return GeneralService.get(`${RootAPI.STUDENT}/tests`, {params: params});
}

export const listContentTestByTestId = ({testId, page, size}) => {
    let params = {};
    if(page) params = {...params, page: page || 0};
    if(size) params = {...params, size: size || 2};

    return GeneralService.get(`${RootAPI.STUDENT}/tests/${testId}`, {params: params});
}
