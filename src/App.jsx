import { use, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import { searchMeals } from './mealService'

function App() {
  const [meals, setMeals] = useState([])
  const [error, setError] =useState('')
  const [loading, setLoading] = useState(false)
  
  
  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError('')
    try {
      const result = await searchMeals(searchTerm);
      setMeals(result);
    } catch (error) {
      setError('Error fetching Meals.')
    }
    setLoading(false);
  }

  return (
    <>
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Meal Search</h1>
      <SearchBar onSearch={handleSearch}/>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginTop: '20px' }}>
        {meals.map((meal) => (
          <div key={meal.idMeal} style={{ marginBottom: '20px' }}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '200px' }} />
          </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default App
