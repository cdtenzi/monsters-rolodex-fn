export const getData = async (utl: string) => {
    const response = await fetch(utl);
    return await response.json();
}