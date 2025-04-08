export const searchMeals = async (searchTerm) => {
    try {
        const responce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await responce.json();
        return data.meals || [];

    } catch (error) {
        console.error("Error fetching meals", error);
        throw error;
    }
}

export default searchMeals;