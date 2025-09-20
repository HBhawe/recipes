import { useState } from 'react'
import './App.css'
import recipes from './data/recipes.json'

console.log(recipes)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Recipes</h1>
    </>
  )
}

export default App
