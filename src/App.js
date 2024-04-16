import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'
function App() {
  const [form,setform]=useState({email:'',password:''})
  const changeHandler=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{display:'flex',height:'100vh'}}>
        <form onSubmit={async (e)=>{
          e.preventDefault()
           console.log(e)
           console.log(form);
           let data={
            email:form.email,
            password:form.password,
           
           }
           const res=await axios.post('http://localhost:5300/login',data, {withCredentials:true})
           console.log(res);

        }}>
          <input type='text' value={form.email} name='email' onChange={changeHandler}></input>
          <input type='text' value={form.password} name='password'onChange={changeHandler}></input>
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
