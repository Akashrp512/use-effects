import {useState, useEffect} from 'react';
import './App.css';

function App() {

const [resourceType, setResourceType] = useState('posts')



  return (
    <div className="App">
       <div>
        <button onClick={()=> setResourceType('posts')} >Post</button>
        <button onClick={()=> setResourceType('comments')} >Comment</button>
        <button onClick={()=> setResourceType('users')} >User</button>
       </div>
       <h1>{resourceType}</h1>
    </div>
  );
}

export default App;
