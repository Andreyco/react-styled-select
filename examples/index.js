import React from 'react';
import { render } from 'react-dom';
import { countries } from './data';
import StyledSelect from '../src/select';
import '../src/css/react-styled-select.css';

const options = countries.map((name) => <option key={name} value={name}>{name}</option>);

render(<StyledSelect className="centered" children={options}/>, document.getElementById('root'));
