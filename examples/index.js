import React from 'react';
import { render } from 'react-dom';
import { StyledSelect } from '../src/StyledSelect';

const options = [];
for(let i=0; i<200; i++) {
  options.push(<option key={i} value={i}>{i}</option>);
}

const App = () => (
  <div>
    <input style={{height: 32}}/>

    <StyledSelect>
      { options }
    </StyledSelect>

    <select/>
  </div>
)
render(<App />, document.getElementById('root'));
