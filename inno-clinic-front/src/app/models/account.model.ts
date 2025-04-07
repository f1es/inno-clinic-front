export interface Account{
    id: string;
    firstName: string,
    lastName: string,
    middleName: string,
    email: string;
    phoneNumber: string;
    isEmailVerified: true;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
    role: "receptionist" | "doctor" | undefined;
    photoId: string;
}