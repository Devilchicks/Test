import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import Intro from './Intro';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Acc from './Acc';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Switch>
    <Route path="/" exact component={Intro}/>
    <Route path="/Form"  component={Form}/>
    <Route path="/Form2"  component={Form2}/>
    <Route path="/Form3"  component={Form3}/>
    <Route path="/Form4"  component={Form4}/>
    <Route path="/Acc"  component={Acc}/>
    </Switch>

  </div>
  </BrowserRouter>
  );
}

export default App;
