import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div>
   <form onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('http://localhost:3000/user', {
          method: 'POST',
          body: JSON.stringify({
            name: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data);
        } else {
          console.error(data.error);
        }
      }}>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

   </div>
    </>
  )
}

export default App
