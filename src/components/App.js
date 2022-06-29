import React, {Component} from 'react';

class App extends Component {
  state = {language: 'english'};

  onLanguageChange = (language) => {
    this.setState({language});
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a lanugage:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag pl" onClick={() => this.onLanguageChange('polish')} />
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App;