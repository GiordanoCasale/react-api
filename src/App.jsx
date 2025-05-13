import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [actresses, setActresses] = useState([])
  const endpoint = 'https://lanciweb.github.io/demo/api/actresses'

  useEffect(() => {
    fetchActresses()
  }, [])

  const fetchActresses = () => {
    axios.get(endpoint)
      .then((response) => {
        const actressesData = response.data?.results || response.data || [];
        setActresses(actressesData);
      })
      .catch((error) => console.log(`Error Fetching Actresses: ${error}`))
  }

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h1>Actresses</h1>
          </div>
        </div>
        <div className="row g-3">
          {actresses.map((act) => (
            <div
              key={act.id}
              className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <div className="act-image">
                  <img
                    src={act.image}
                    className='card-img-top'
                    alt={act.name}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{act.name}</h5>
                  <div className="card-text">
                    <p><strong>Birth Year: </strong>{act.birth_year}</p>
                    <p><strong>Nationality: </strong>{act.nationality}</p>
                    <p className="biography"><strong>Biography: </strong>{act.biography}</p>
                    <p><strong>Awards: </strong>{act.awards}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

