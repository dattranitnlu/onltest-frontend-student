import {GeneralService} from "../GeneralService";
import {RootAPI} from "../../config/api.config";

export const ExamService = {
    listExams(studentId) {
        return GeneralService.get(`${RootAPI.STUDENT}/${studentId}/list`);
    },
    getExamDetail(studentId, examId) {
        return GeneralService.get(`${RootAPI.STUDENT}/${studentId}`, {examId: examId});
    },
    saveExamDetail(studentId, examId) {
        return GeneralService.post(`${RootAPI.STUDENT}/${studentId}`, {examId: examId})
    }
}