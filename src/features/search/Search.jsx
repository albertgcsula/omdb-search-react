import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchCleared, searchTypeSet, titleSet } from '../../actions/index';
import { fetchResults } from '../../actions/getResults';
import { selectResults } from '../../selectors';
import ResultsList from './ResultsList';

export default function Search () {
  const dispatch = useDispatch();

  const [titleInput, setTitleInput] = useState('');
  const [searchType, setSearchType] = useState('');

  const errorMessage = useSelector(state => state.errorMessage);
  const results = useSelector(state => selectResults(state));

  const clearSearch = () => {
    setTitleInput('');
    setSearchType('');
    dispatch(searchCleared());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(titleSet(titleInput));
    dispatch(searchTypeSet(searchType));
    dispatch(fetchResults(titleInput, searchType));
  };
 
  return (
    <div className="container my-3">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="row">
          <div className="col-md-6">
            <Label for="movieTitle">Search by title</Label>
            <Input 
              name="movieTitle"
              placeholder="title"
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <Label for="type">Type</Label>
            <select 
              id="searchType"
              name="searchType"
              className="form-select"
              value={searchType}
              onChange={e => setSearchType(e.target.value)}
            >
              <option value="">Type...</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </select>
          </div>
        </FormGroup>

        <FormGroup className="mt-2">
          <Button
            className="me-2"
            color="secondary" 
            size="sm" 
            onClick={clearSearch}>
              Clear
          </Button>
          <Button color="primary" size="sm" type="submit">Search</Button>
        </FormGroup>
      </Form>
      <div className="row mt-3">
        <div className="col-md-8">
          <p>Results for {titleInput}: </p>
          {errorMessage && (
            <div className="text-warning">{errorMessage}</div>
          )}
          {results.length > 0 && (
            <ResultsList 
              results={results}
            />
          )}
        </div>
      </div>
    </div>
  );
}