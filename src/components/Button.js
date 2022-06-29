import React, {Component} from 'react';
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  translateText(lang) {
    return lang === 'english' ? 'Submit' : 'Potwierdź'
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {this.translateText}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
