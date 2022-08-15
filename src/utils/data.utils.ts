export const getData = async <T>(utl: string): Promise<T> => {
    const response = await fetch(utl);
    return await response.json();
}