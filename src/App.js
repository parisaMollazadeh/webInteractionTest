import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import UserInfo from './UserInfo';

function App() {
  const [goToPage, setGoToPage] = useState('start');

  const goToUserInfo = () =>{
    setGoToPage('user-info');
    console.log(goToPage);
  }

  return (
    
    <div className="App">
      {goToPage === 'start' &&
      <form>
        <h1>صفحه پرداخت سداد</h1>
        <br/>
        <br/>
        <br/>
        <p>شناسه قبض</p>
        <input ></input>
        <p>شناسه پرداخت</p>
        <input ></input>
        <p>مبلغ قبض</p>
        <input ></input>
        
        <br/>
        <br/>
        <br/>
        <br/>
        
        <button onClick={goToUserInfo}>مرحله بعد</button>

      </form>
      }

      {goToPage === 'user-info' && <UserInfo/>}
    </div>
    
  );
}

export default App;
