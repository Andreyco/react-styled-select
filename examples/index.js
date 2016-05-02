import React from 'react';
import { render } from 'react-dom';
import { StyledSelect } from '../src/StyledSelect';
import { countries } from './data';

const options = [];
for(const country of countries) {
  options.push(<option key={country.name} value={country.name}>{country.name}</option>);
}

const style = {
  // width: 200,
  // maxWidth: 200,
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translateY(-50%) translateX(-50%)',
};

const App = React.createClass({
  render() {
    return (
      <div>
        <StyledSelect onBlur={() => {}} children={options}  style={style}/>
      </div>
    );
  }
})

render(<App />, document.getElementById('root'));
