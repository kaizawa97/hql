import { useState, useEffect } from 'react';
import axios from 'axios';

export const AuthSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      }, [])
    return (
      <div>
        <h1>Auth Signin</h1>
      </div>
    )
    //   <div>
    //     <ul>
    //       {
    //         posts.map(post => <li key={post.id}> {post.title} </li>)
    //       }
    //     </ul>
    //   </div>
    // )
  });
}