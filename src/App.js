import React from 'react';

function Food(props) {
  const { fav } = props;
  return <h3>I like {fav}</h3> 
}

function App() {
  return (
    <div>
      <h1>Hello React ?! </h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgiopsal"/>
      <Food fav="chukumi"/>
    </div>
  );
}

export default App;
