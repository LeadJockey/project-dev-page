import React, { useState } from 'react'

function ProfileDatas({ username, userage }) {
  const [taggedName, setName] = useState(username)
  const [taggedAge, setAge] = useState(userage)
  return (
    <>
      <div>
        <label>Name</label>
        <b>{taggedName}</b>
      </div>
      <div>
        <label>Age</label>
        <b>{taggedAge}</b>
      </div>
      <button disabled={!taggedName || !taggedAge}>로그인</button>
    </>
  )
}

export default ProfileDatas
