import { Weeks } from "../report/report-upload/week";

export class Academic {
    id?: string = '';
    academicYear: string = '';
    semester: string = '';
    startDate: Date = new Date();
    endDate: Date = new Date();
    noOfWeeks: number = 0;
    weeks: Weeks[] = [];
}
