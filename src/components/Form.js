import React from 'react'

function Form() {
  return (
    <div>
        <form>
          <input type="text" name="player1" placeholder="Player1..."/>
          <input type="text"  name="player2" placeholder="Player2..."/>
          <button onclick="location.reload();">랜덤 생성</button>
        </form>
    </div>
  )
}

export default Form
