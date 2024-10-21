export async function getFetchData(url) {
    const response = await fetch(`https://rickandmortyapi.com/api/${url}`);
    return response.json();
}
