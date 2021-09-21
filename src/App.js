import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import UserInfo from './UserInfo';

function App() {
  const [goToPage, setGoToPage] = useState('start');

  const goToUserInfo = () =>{
    //setGoToPage('user-info');
    console.log(goToPage);
    
    const billId = document.getElementById('billId').value

    const  payId = document.getElementById('payId').value;
    const  amount = document.getElementById('amount').value;

    // const obj = {'billId':billId , 'payId':payId , 'amount':amount};

    window.androisApp.showReceiptData(billId, payId, amount);
    //console.log(obj);
    
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
        <input type='text' name='billId'  id='billId'></input>
        <p>شناسه پرداخت</p>
        <input type='text' id='payId'></input>
        <p>مبلغ قبض</p>
        <input type='text' id='amount'></input>
        
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
