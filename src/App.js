import React from 'react';
import logo from './logo.png';
import './App.css';
import SimpleButton from './Components/SimpleButton';
import Avatar from './Components/Avatar';
import Selection from './Components/Selection';
import Timer from './Components/Timer';

// Hi all! Welcome to our main app code.

/*
These are comments. When running the code, these potions are all ignored.
Comments let us leave notes, help increase code readability, and temporarily block portions of code that aren't being used.

This comment is a multi-line comment, whereas the one above is a single-line comment.

As you go through these files, you'll notice that comments can look different in various languages.
Keep the various types of syntax in mind!

@Arek
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Here's how we start building <i>Covalent</i>.</p>
      </header>
      <div className="componentTests">
        <p>To start off, I'm going to build some buttons from our mockup.</p>
        {/* The inline CSS I use in the <p> tag below is a little different than normal CSS. Ignore it for now. */}
        <p style={{fontSize: '12px'}}><i>Side note</i>: we should probably use <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/docs/4.5/components/buttons/">Bootstrap's</a> buttons instead (more info on Bootstrap later),
         but for now it's fine. In any case, here are the buttons!</p>
        <div className="buttonTests">
          {/* 
            Below, notice how I use the name of the component as the opening and closing tags.
            The attributes (color, name, and alert) are properties passed to the React component.
            In the code, I reference them as this.props.color, this.props.name, and this.props.alert.
           */}
          <SimpleButton color="green" name="cool button" alert="Woah"></SimpleButton>
          <SimpleButton name="even cooler button" alert="How cool is this"></SimpleButton>
        </div>
        <p>I built these buttons with a component I wrote. The code for that component exists in <code>src/Components/SimpleButton.js</code>. Check out the CSS in <code>buttons.css</code>, too!</p>
        <p>To start building Covalent, we need to have components (think of them as building blocks).</p>
        <hr></hr>
        <div className="instructions">
        <h4>Instructions:</h4>
        <ul>
          <li><b>Read through the code for this website.</b> This includes: <code>src/App.js</code>, <code>src/App.css</code>, <code>src/Components/SimpleButton.js</code>, and <code>src/Components/buttons.css</code>.</li>
          <li><b>Understand what's going on!</b> I've put comments in the code to help you learn. If you're confused, however, don't hesitate to search bits of code on Google or message me.</li>
          <li>Once you've read the code, <b>build a component</b>! Looking at the mockup, we need the following components:</li>
          <ul>
            <li>Game selection options</li>
            <li>Game settings options (search about HTML forms: dropdowns and text boxes)</li>
            <li>Avatars (search the <code>img</code> tag for help with this)</li>
            <li>Selection options for each truth / lie (remember, they can be various colors)</li>
            <li>Timer for participants</li>
            <li>Previous bonds (other truths and lies in the sidebar)</li>
            <li>Tally counter</li>
            <li>End-of-game scoreboard</li>
          </ul>
          <li>Build the component by:</li>
          <ol>
            <li>Making a new JS file and CSS file for your component in the <code>src/Components</code> folder.</li>
            <li>Adding the proper <code>import</code> and <code>export</code> statements at the top and bottom, respectively, of your component's code. This includes importing React and your CSS file.</li>
            <li>When done, import your component on top of <code>src/App.js</code> following my SimpleButton component.</li>
          </ol>
        </ul>
        <h5>Tips:</h5>
        <ul>
          <li>About 75% of HTML coding is figuring out how to make things look nice. Here's where Figma comes in clutch: if you press on individual parts of the mockups, you can get its CSS attributes. Use that to your advantage.</li>
          <li>You can build components using other components. For example, a game selection screen (one component) might require a ton of buttons (another component).</li>
          <li>There is no shame in using websites like StackOverflow to solve problems. My advice:</li>
          <ul>
            <li>Check the date of the solution. If it's over a few years old, check the comments to see what others think about it now.</li>
            <li>Learn what you're writing. It's easy to copy-paste, but when it comes to debugging, having an idea about what you wrote will save you time and brain cells (not to mention help in the long run career-wise).</li>
          </ul>
        </ul>
        <p>Once again, please don't hesitate to reach out or search online for help while coding. Looking forward to building Covalent over the next few weeks!</p>
        <i>Arek</i>
        </div>
      </div>
    </div>
  );
}

export default App;
