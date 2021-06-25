export type Insert<T extends { id: number | string }> = Omit<T, "id">
