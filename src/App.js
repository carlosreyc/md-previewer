import React, { Component } from "react";
import "./App.css";
import Preview from "./Preview";
import Input from "./Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <div className="App-Container">
          <Preview value={value} />
          <Input rows="5" value={value} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default App;

const defaultValue = `
# Welcome to Kappa Markdown Previewer

## This was kind of easy wtf
### Didnt expect that
Heres some code, \`console.log('Hellow World);\`, between 2 backticks.
[This is my github profile](https://github.com/carlosreyc)
\`\`\`
This is part of the code of this APP
<div className="App">
  <div className="App-Container">
    <Preview value={value} />
    <Input rows="5" value={value} onChange={this.handleChange} />
  </div>
</div>
	
\`\`\`
	
* Item

**Strong**
	
> Quoted text
![React Logo w/ Text](https://goo.gl/Umyytc)
`;
