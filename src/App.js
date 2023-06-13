import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{display: 'flex', width: '100%', height: '10vh'}}>
      <div style={{width: '60%',   alignItems: 'center',  alignItems: 'center'}}>
        <p style={{marginTop: '2.5%'}}>Insert Logo</p>
      </div>
      <div style={{width: '10%'}}>
        <p style={{textAlign: 'center', marginTop: '15%'}}>Home</p>
      </div>
      <div style={{width: '10%'}}>
        <p style={{textAlign: 'center', marginTop: '15%'}}>About</p>
      </div>
      <div style={{width: '10%'}}>
        <p style={{textAlign: 'center', marginTop: '15%'}}>Services</p>
      </div>
      <div style={{width: '10%',  alignItems: 'center'}}>
        <p style={{textAlign: 'center', marginTop: '15%'}}>Contact</p>
      </div>
    </div>
  );
}

export default App;
