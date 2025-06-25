const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAll = async <T,>(endpoint: string):Promise<T> => {
    const newVar = await fetch(`${baseUrl}${endpoint}`)
    .then(value => value.json())
    return newVar;
}
