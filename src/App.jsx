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
    <div className="container mt-4">
      <div className="row g-4">
        {actors.map((actor) => (
          <div key={actor.id} className="col-md-4">
            <div className="card h-100">
              <img src={actor.image} className="card-img-top" alt={actor.name} />
              <div className="card-body">
                <h5 className="card-title">{actor.name}</h5>
                <p className="card-text">
                  <strong>Anno di nascita:</strong> {actor.birth_year}<br />
                  <strong>Nazionalità:</strong> {actor.nationality}<br />
                  <strong>Biografia:</strong> {actor.biography}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
