import './App.scss';

import Timer from './components/Timer'

const App = () => {
  return (
    <div className="App">
      <Timer time={5000} step={1000} autostart={true}/>
      <Timer time={10000} step={200} />
    </div>
  );
}

export default App;
