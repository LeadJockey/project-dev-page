import React, { useState } from 'react'

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <lebel>
          이메일
          <input
            type="email"
            placeholder="user@test.com"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </lebel>
        <label>
          비밀번호
          <input type="password" value={password} onChange={({ target: { value } }) => setPassword(value)} />
          <button type="submit" disabled={!email || !password}>
            로그인
          </button>
        </label>
      </form>
    </>
  )
}

export default LoginForm
