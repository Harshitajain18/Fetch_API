// import logo from './logo.svg';
import './App.css';
import './style.scss';
import {useState } from 'react';


function App() {
  const [userName, setUserName] = useState(null);
  const [data,setUserData] = useState([]);

  const onSubmit = () => {
    const fetching = fetch(`https://api.github.com/users/${userName}`).then((response)=>{
      response.json().then((result)=>{
        setUserName(result);
      })
    }) 
  }

  console.log("userName: ", userName);
  
  return (
    <div className="App">
      <div className='github-project'>
        <button className='github-project__homebtn'>Home</button>
        <h1 className='github-project__heading'>
          GitHub followers project
        </h1>
        
        <div className='github-project__users'>
          <h1 className='github-project__users__title'>GitHub Details</h1>
           <label>Enter GitHub Username : </label>
           <input type='text' onChange={(e)=>setUserName(e.target.value)}></input> 
           <button className='github-project__users__submitbtn' onClick={onSubmit}>Submit</button>
           <p className='github-project__users__loc'>Location :</p>

          <div className='github-project__users__box'>
            {data.map((item)=>{
             <> 
               <p>{item.name}</p>
               <p>{item.followers}</p>
             </>
            })}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
