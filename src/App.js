import React, { useState } from "react";
import style from "./app.module.css";
import List from "./List";

function App()
{ 
  const[text,setText] =useState("");
  const[amt,setAmt] =useState(0);
  const[transactions,setTransactions] = useState([]);


  function handleAdd()
  {
      if(text == "" || amt == 0)
       {return};
    
       const transaction ={
        id : Math.floor(Math.random()* 1000000),
        text: text,
        amt:+amt
       }

       setTransactions([...transactions,transaction]);
       setAmt(0);
       setText(""); 
  }

  function handleDelete(id)
  {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }
  
  const total = transactions.reduce((acc, transaction) => acc + transaction.amt, 0);
  return(
  <>
  <h1><center>Expense Tracker</center></h1>
  <div className={style.container}>
   
  <div className={style.title}><h2>Add new transaction</h2></div>

  <div className={style.input}>
    <h3>Text</h3>
    <input onChange={(e) => setText(e.target.value)} value={text}   placeholder="Enter text...."></input>
  </div>
 
  <div className={style.input}>
    <h3>Amount</h3>
    <input type="number" onChange={(e) => setAmt(e.target.value)} value={amt} ></input>
  </div>

  <div className="btn-div">
    <button id={style.btn}  onClick={handleAdd} >Add Transaction</button>
    </div>

  </div>

 

  <List total={total} transactions={transactions} handleDelete={handleDelete}/>

  </>
  );
}
export default App;