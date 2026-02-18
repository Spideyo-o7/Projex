export interface User {
    id: string;
    username: string;
    password?: string;
    createdAt: Date;
}

export interface InsertUser {
    username: string;
    password?: string;
}
