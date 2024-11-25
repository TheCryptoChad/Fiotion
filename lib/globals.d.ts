export {}

declare global {
    type User = {
        email: string;
        firstName: string;
        fullName: string;
        image: string;
        lastName: string;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface CustomJwtSessionClaims extends User {}
}