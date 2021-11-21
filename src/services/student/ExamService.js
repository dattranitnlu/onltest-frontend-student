import GeneralService from "../GeneralService";
import {RootAPI} from "../../config/api.config";

export const listExamsOfStudent = ({page = 0, size = 25, query = 'on-going'}) => {
    let params = {};
    if(page) params = {...params, page: page};
    if(size) params = {...params, size: size };
    if(query) params = {...params, query: query.trim()};

    console.log('there...')

    return GeneralService.get(`${RootAPI.STUDENT}/tests`, {params: params});
}
