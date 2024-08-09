
import './App.css'
import Card from './components/Card'
import { fetchMovieChanges } from './utils/api'; // Adjust the import path based on your project structure

function App() {

  fetchMovieChanges();
  
  return (
    <>
      <Card />
    </>
  )
}

export default App
