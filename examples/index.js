import React from 'react';
import { render } from 'react-dom';
import { StyledSelect } from '../src/StyledSelect';
import { countries } from './data';

const options = [];
for(const country of countries) {
  options.push(<option key={country.name} value={country.name}>{country.name}</option>);
}

render(<StyledSelect children={options}/>, document.getElementById('root'));
