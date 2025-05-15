import React from 'react'

function Movie(props) {
    const { movie } = props
  return (
    <div>
        <h3>Movie</h3>
        <p>Movie Name: {movie.name}</p>
     </div>
  )
}

export default Movie
