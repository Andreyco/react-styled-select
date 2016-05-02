import React from 'react';
import { render } from 'react-dom';
import { StyledSelect } from '../src/StyledSelect';

const options = [];
for(let i=0; i<200; i++) {
  options.push(<option key={i} value={i}>{i}</option>);
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
