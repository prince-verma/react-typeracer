import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider, getMuiTheme, lightBaseTheme} from 'material-ui/styles';
import {BrowserRouter} from 'react-router-dom'

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </MuiThemeProvider>
);

ReactDOM.render(<Main/>, document.getElementById('root'));