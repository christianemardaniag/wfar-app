export class Report {
    id?: string = '';
    academicID: string = '';
    userID: string = '';
    userName: string = '';
    week: number = 0;
    weekDays: string = '';
    submitDate: string = '';
    subject: string = '';
    cys: string = '';
    noOfAttendees: number = 0;
    link: string = '';
    activities: string = '';
    status: string = '';
    comments?: string = '';
    handledBy: string = '';
    teamMeetScreenshot: string[] = [];
    providedActivities: string[] = [];
}
