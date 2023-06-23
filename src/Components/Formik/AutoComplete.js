import React, { useState } from 'react';
import { useFormik } from 'formik';

const AutoComplete = () => {
  const [suggestions, setSuggestions] = useState([]);
  
  const formik = useFormik({
    initialValues: {
      searchQuery: '',
    },
    onSubmit: values => {
      console.log(values.searchQuery);
    },
  });

  const handleAutocomplete = (e) => {
    const searchQuery = e.target.value;
    console.log(e.target.value)
    const matchingSuggestions = [
      'Apple',
      'Banana',
      'Cherry',
      'Grapes',
      'Orange',
      'Pineapple',
      'Strawberry',
    ].filter(suggestion =>
      suggestion.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(matchingSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    formik.setFieldValue('searchQuery', suggestion);
    setSuggestions([]);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="searchQuery">Search</label>
      <input
        type="text"
        id="searchQuery"
        autoComplete="off" 
        {...formik.getFieldProps('searchQuery')}
        onChange={(e) => {
          formik.handleChange(e); 
          handleAutocomplete(e); 
        }}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AutoComplete;