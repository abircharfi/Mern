import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  return (
    <div>
      <form>
        <div>
          <label>First name</label>
          <input type="text" name="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
          {(firstName !== '' && firstName.length < 3) ? (
  <p>First name should be at least 3 characters</p>
) : null}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={lastName} onChange={(e) => { setLastName(e.target.value)}} />
          {(lastName !== '' && lastName.length < 3) ? (
  <p>Last name should be at least 3 characters</p>
) : null}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          {(email !== '' && email.length < 3) ? (
  <p>Email should be at least 3 characters</p>
) : null}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          {(password !== '' && password.length < 8) ? (
  <p>Password should be at least 8 characters</p>
) : null}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) =>{ setConfirmPassword(e.target.value) }} />
          {( confirmPassword !== '' && password !== confirmPassword )? (
          <p>Passwords must much !</p>) : null}
        </div>
      </form>
      
            

    </div>
  );
};

export default Form;