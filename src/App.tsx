import { useState } from 'react'
import './App.css'

import Button from './components/Button/Button'
import TextField from './components/TextField/Textfield'

import { send } from "../scripts/deploy";

function App() {
  const [sender, setSender] = useState("")
  const [reciever, setReciever] = useState("")
  const [amount, setAmount] = useState("")

  const handleChangeSender = (value: string) => {
    setSender(value);
  }

  const handleChangeReciever = (value: string) => {
    setReciever(value);
  }

  const handleChangeAmount = (value: string) => {
    setAmount(value);
  }

  const sendHander = () => {
    send(sender, reciever, amount);
  }

  return (
    <>
      <div>
        <TextField value={sender} onChange={handleChangeSender} placeholder='Sender' />
        <TextField value={reciever} onChange={handleChangeReciever} placeholder='Reciever' />
        <TextField value={amount} onChange={handleChangeAmount} placeholder='Amount' />
      </div>
      <div className="card">
        <Button label="Send Token" onClick={sendHander} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
