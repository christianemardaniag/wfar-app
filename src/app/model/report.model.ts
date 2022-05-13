export class Report {
    id: string = '';
    academicID: string = '';
    userID: string = '';
    week: string = '';
    date: string = '';
    subject: string = '';
    cys: string = '';
    attendeesNo: number = 0;
    link: string = '';
    activities: string = '';
    status: string = '';
    comments?: string = '';
    teamImg = [{ fileName: '', path: '' }]
    actImg = [{ fileName: '', path: '' }]
}
