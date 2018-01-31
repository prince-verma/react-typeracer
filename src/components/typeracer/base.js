import React from 'react';
import * as Api from '../../utility/api'
import {sampleTextURL} from '../../config/config';

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unTypedText: "",
      typedText: "",
      inputValue : "",
    }
  }

  onChange = (text) => {
    let {unTypedText, typedText} = this.state;
    console.log(text)
  };

  async componentWillMount() {
    try {
      let result = await Api.get(sampleTextURL);
      let text = result.text_out ? result.text_out : "";
      text = text.replace(new RegExp('<p>|</p>|\n', 'g'), "");
      this.setState({unTypedText: text.toString()})
    } catch (err) {
      alert("Error occured in getting data.");
    }
  }
}