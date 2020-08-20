import React from 'react';
import logo from './logo.png';
import './App.css';
import SimpleButton from './Components/SimpleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here's where we start building <i>Covalent</i>.
        </p>
      </header>
      <div className="componentTests">
        <p>Let's test some components.</p>
        <p>To start off, I'm going to build some buttons from our mockup.</p>
        <p>We should <em>probably</em> use <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/docs/4.5/components/buttons/">Bootstrap's</a> buttons as our base,
         but for now it's fine.</p>
        <div className="buttonTests">
          <SimpleButton color="blue" name="TESTING"></SimpleButton>
          <SimpleButton name="TESTING"></SimpleButton>
        </div>
        <p>These buttons are built using <em>components</em> and exist in <code>src/Components/SimpleButton.js</code>. Check out the CSS, too!</p>
        <p>To start building Covalent, we need to build components (think of these as small bits of the larger app).</p>
      </div>
    </div>
  );
}

export default App;
