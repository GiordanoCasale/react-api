import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        console.log(response.data); // Stampa i dati in console
        setActors(response.data.result);
      })
      .catch((error) => console.error("Errore nel caricamento degli attori:", error));
  }

  return (
    <div>
      <ul className="list-group">
        {actors.map((actor) => (
          <li key={actor.id} className="list-group-item">{actor.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
