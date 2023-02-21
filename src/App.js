import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

const URL = 'http://localhost/mywebservice/index.php'

function App() {
  const [message, setMessage] = useState('')
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setMessage(response.data.message)
      setOrigin(response.data.origin)
    }).catch(error => {
      alert(error)
    });
  }, [])

  return (
    <div>
      <h3>Message from web-server</h3>
      <p>{message}</p>
      <p>{origin}</p>
    </div>
  );
}

export default App;
