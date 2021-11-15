import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreRequested, searchCleared, searchTypeSet, searchYearSet, titleSet } from '../../actions/index';
import { fetchResults } from '../../actions/getResults';
import { selectResults } from '../../selectors';
import ResultsList from './ResultsList';

export default function Search () {
  const dispatch = useDispatch();

  const [searchTitle, setSearchTitle] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchYear, setSearchYear] = useState('');

  const errorMessage = useSelector(state => state.errorMessage);
  const page = useSelector(state => state.page);
  const results = useSelector(state => selectResults(state));

  const clearSearch = () => {
    setSearchTitle('');
    setSearchType('');
    setSearchYear('');
    dispatch(searchCleared());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(titleSet(searchTitle));
    dispatch(searchYearSet(searchYear));
    dispatch(searchTypeSet(searchType));
    dispatch(fetchResults(searchTitle, searchYear, searchType, 1));
  };

  const loadMore = () => {
    dispatch(loadMoreRequested(page + 1));
    dispatch(fetchResults(searchTitle, searchYear, searchType, page + 1));
  };
 
  return (
    <div className="container my-3">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="row">
          <div className="col-md-6">
            <Label for="title_input">Search by title</Label>
            <Input 
              name="title_input"
              placeholder="title"
              type="text"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
          </div>
          <div className="col-auto">
          <Label for="year_input">Year</Label>
            <Input 
              name="year_input"
              placeholder="year"
              type="text"
              value={searchYear}
              onChange={(e) => setSearchYear(e.target.value)}
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
          <Button 
            color="primary"
            disabled={!searchTitle && true }
            size="sm"
            type="submit">
              Search
          </Button>
        </FormGroup>
      </Form>
      <div className="row mt-3">
        <div className="col-md-10">
          <p>Results for {searchTitle}: </p>
          {errorMessage && (
            <div className="text-warning">{errorMessage}</div>
          )}
          {results.length > 0 && (
            <>
              <ResultsList 
                results={results}
              />
              <div className="load-more mt-2">
                <Button
                  className="me-2"
                  color="secondary" 
                  size="sm" 
                  onClick={clearSearch}>
                  Clear
                </Button>
                <Button color="primary" size="sm" onClick={loadMore}>
                  Load More
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}