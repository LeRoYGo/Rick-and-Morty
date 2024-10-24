/* eslint-disable no-unused-vars */
export async function getFetchData(url) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/${url}`);
        if (!response.ok) {
            throw new Error("Сеть не сработала!");
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Response("Ошибка при загрузке данных", { status: 500 });
    }
}
