import React from 'react';
import * as Api from '../../utility/api'
import {sampleTextURL} from '../../config/config';

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unTypedText: "",
      typedText: "",
      inputValue: "",
      error: false,
      wpm: 0,
    };
    this.wordCount = 0;
    this.allText = "";
    this.timer = undefined;
  }

  async componentWillMount() {
    try {
      let result = await Api.get(sampleTextURL);
      let text = result.text_out ? result.text_out : "";
      text = text.replace(new RegExp(`</p>|<p>|\n`, 'g'), "");

      text = text.slice(text.indexOf('.') - 5);
      console.log('-', text);
      this.allText = text.toString();
      this.setState({unTypedText: text.toString()})
    } catch (err) {
      alert("Error occured in getting data.");
    }
  }

  onFocus = () => {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.setState({wpm: this.wordCount});
        this.wordCount = 0;
      }, 60 * 1000);
    }
  };

  onChange = (text) => {
    this.setState({inputValue: text});
    let {unTypedText, typedText} = this.state;
    let lastTypedChar = text[text.length - 1];
    let tempText = typedText + lastTypedChar;
    let matchingText = this.allText.slice(0, tempText.length);

    if (matchingText === tempText) {
      typedText = tempText;
      unTypedText = this.allText.slice(typedText.length);
      if (lastTypedChar === " ") {
        this.wordCount++;
        this.setState({inputValue: ""});
      }
      this.setState({unTypedText, typedText});
    }
    if (!typedText) {
      this.timer && clearInterval(this.timer);
    }
  };
}