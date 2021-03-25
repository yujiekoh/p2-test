import logo from './logo.svg';
import './App.css';

function App() {
  const url = "https://openapi.etsy.com/v2/listings/active?api_key=r0ue7c82kc86u1pzrvu38tya";

  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));

  return (
    <div className="App">
      <h1>Test api</h1>
    </div>
  );
}

export default App;
