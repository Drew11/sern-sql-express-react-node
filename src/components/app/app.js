import React from 'react';
import './app.scss';
import Statistic from '../statistic/statistic';
import MainPage from '../main-page/main-page';
import CsvParser from '../csv-parser/csv-parser';
import Registration from '../registration/registration';

import {
    Route,
    Switch,
    HashRouter as Router
} from "react-router-dom";

const App = ()=> {

  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/stats" component={Statistic}/>
                <Route path="/csv-parser" component={CsvParser}/>
                <Route path="/register" component={Registration}/>
            </Switch>
        </div>
      </Router>
  );
};

export default App;
