import React from 'react';
import Base from './base';
import "../css/base.css"
import {TextField} from 'material-ui';

export default class TypeRacer extends Base {
  render() {
    let {unTypedText, typedText, inputValue} = this.state;

    return (
      <div className="container">
        <div className={"textDiv"}>
          <span className={"typedText"}>{typedText}</span>
          <span className={"untypedText"}>{unTypedText}</span>
        </div>
        {
          unTypedText &&
          <TextField
            hintText={"Type the above text here..."}
            underlineStyle={{borderColor: "#000"}}
            underlineFocusStyle={{borderColor: "#000"}}
            onChange={(e) => this.onChange(e.target.value)}
            // value={inputValue}
          />
        }
      </div>
    )
  }
}