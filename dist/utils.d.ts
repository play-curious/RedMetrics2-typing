export declare type Insert<T extends {
    id: number | string;
}> = Omit<T, "id">;
export declare type Update<T> = Partial<T>;
