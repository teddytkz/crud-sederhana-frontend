import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PelangganList from './components/PelangganList'
import PelangganAdd from './components/PelangganAdd'
import PelangganEdit from './components/PelangganEdit'
function App() {
  return (
    <Router>
      <div className='container'>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Switch>
              <Route exact path='/'>
                <PelangganList />
              </Route>
              <Route path='/add'>
                <PelangganAdd />
              </Route>
              <Route path='/edit/:id'>
                <PelangganEdit />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
