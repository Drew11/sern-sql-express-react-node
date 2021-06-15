import './app.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Tracker from '../tracker/tracker';
import Add from '../add/add';

function App() {

  const trackers = useSelector(state=>state);
  const trackersView = trackers.map((tracker, index)=>
      <Tracker
        key={index}
        tracker={tracker}
      />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>tracker</h1>
      </header>


      <main>
          <div className="content">
              <Add/>

              <div className="tracker-list">
                  {trackersView}
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;
