import React from 'react';
import * as Api from '../../utility/api'
import {sampleTextURL} from '../../config/config';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:""
    }
  }

  async componentWillMount(){
    try{
      let result  = await Api.get(sampleTextURL);
      let text = result.text_out;
      text = text.replace(new RegExp('<p>|</p>|\n','g'), "");
      this.setState({text:text.toString()})
    }catch (err){
      alert("Error occured in getting data.");
    }
  }
}