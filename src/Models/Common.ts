export interface Common <T> {
    limit: number;
    skip: number;
    total: number;
    products: T[];
}