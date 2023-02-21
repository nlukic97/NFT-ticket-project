import './App.css';
import Test from './components/Test';

function App() {
  return (
    <div className="center">
      <h1>Hello world</h1> 
      <Test testProp={'hello'} />
    </div>
  );
}

export default App;
