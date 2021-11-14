import React from 'react';

export default function ResultsList(props) {
  const { results } = props;

  return (
    <div>
      <ul className="list-group">
        {results.map(result => (
          <li key={result.imdbID} className="list-group-item">
            <div>
              <a href={`https://www.imdb.com/title/${result.imdbID}/`} rel="noreferrer" target="_blank">
                <img
                  className="float-start img-fluid me-2"
                  src={result.Poster} 
                  alt={result.Title}
                  height="100" 
                  width="65" 
                />
              </a>
              <p className="fw-bold mb-1">{result.Title} ({result.Year})</p>
              <a href={`https://www.imdb.com/title/${result.imdbID}/`} rel="noreferrer" target="_blank">
                https://www.imdb.com/title/{result.imdbID}/
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}