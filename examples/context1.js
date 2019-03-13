import React from 'react';
import ReactDOM from 'react-dom';

function Parent({ name }) {
  return (
    <div>
      <h1>Parent</h1>
      <Child name={name} />
    </div>
  );
}

function Child({ name }) {
  return (
    <div>
      <h1>Child</h1>
      <Grandchild name={name} />
    </div>
  );
}

function Grandchild({ name }) {
  return (
    <div>
      <h1>Grandchild</h1>
      <h3>Name: {name}</h3>
    </div>
  );
}

class App extends React.Component {
  render() {
    const name = 'James';
    return <Parent name={name} />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
