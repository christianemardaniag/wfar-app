export interface User {
    id: string ;
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    password: string;
    contactNumber: string;
    status?: string;
}
