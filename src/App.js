import './App.css';
import './style.scss';
import {useState } from 'react';


function App() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState([]);

  const onSubmit = () => {
     fetch(`https://api.github.com/users/${userName}`).then((response)=>{
      response.json().then((result)=>{
        setUserData(result);
        console.log(result);
        
      })
    }) 
  } 

  const follow = () =>{
    window.open(`https://github.com/${userName}`,'_blank');
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
            <h2> {userData.name} </h2>
            <p>{userData.location}</p>
            <img className='image' src={ userData.avatar_url } alt="user avatar" />
       
            <p className='public'>Public_repos</p>
            <p className='data'> {userData.public_repos}</p>
            <p className='public'>Followers</p>
            <p className='data'>{userData.followers}</p>
            <p className='public'>Following</p>
            <p className='data' >{userData.following}</p>
           
            <button className='follow-btn' onClick={follow}>Follow</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
