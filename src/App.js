import logo from './logo.svg';
import {Component} from 'react';
import './App.css';

// Cách 1 kiểu bình thường
function One(){
  return (
    <div> 
       <h2>cách dùng thứ 1 kiểu bình thường</h2>
    </div>
  )
}

// Cách 2 dùng kiểu ân danh
var Two = function (){
	return(
		<div>
			<h2> cách dùng thứ 2 kiểu ẩn danh</h2>
		</div>
	);
}

// kiểu này thường sử dụng
var Three = () =>(
  <div> 
        <h3>cách dùng thứ 3 arrow function</h3>
  </div>
);


// kiểu class
class Four extends Component {
  render() {
    return (
      <div>
        <h1>texxt</h1>
      </div>
    );
  }
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <One/>
        <Two/>
        <Three/>
        <Four/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
