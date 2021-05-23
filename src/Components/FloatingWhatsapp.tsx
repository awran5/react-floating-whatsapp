import React, { useState } from 'react'
import { WhatsappSVG, ChatSVG, CloseSVG, SendSVG } from './Icons'

interface FloatingWhatsAppProps {
  phoneNumber: string
  accountName: string
  avatar?: string
  statusMessage?: string
  chatMessage?: string
  darkMode?: boolean
  styles?: React.CSSProperties
  className?: string
}

const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`)
// Just to change the ugly arabic font
const isArabic = (string: string) => /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(string)

function FloatingWhatsApp({
  phoneNumber = '1234567890',
  accountName = 'Account Name',
  avatar = '',
  statusMessage = 'Typically replies within 1 hours',
  chatMessage = 'Hello there! 🤝 \nHow can we help?',
  darkMode = false,
  styles,
  className = ''
}: FloatingWhatsAppProps): JSX.Element {
  const [isOpen, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleClick = () => setOpen((prev) => !prev)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!message) return

    window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`)
    setMessage('')
  }

  return (
    <div className={`floatingWhatsapp ${darkMode ? 'dark ' : ''}` + className}>
      <div className='whatsappButton' onClick={handleClick} style={styles}>
        <WhatsappSVG />
      </div>
      <div className={`whatsappChatBox ${isOpen ? 'open' : 'close'}`}>
        <header className='chatHeader'>
          <div className='avatar'>
            {avatar ? <img src={avatar} width='45' height='45' alt='whatsapp-avatar' /> : <ChatSVG />}
          </div>
          <div className='status'>
            <span className='statusTitle'>{accountName}</span>
            <span className='statusSubtitle'>{statusMessage}</span>
          </div>
          <div className='close' onClick={handleClick}>
            <CloseSVG />
          </div>
        </header>
        <div className='chatBody'>
          <div className='message'>
            <span className='triangle' />
            <span className='accountName'>{accountName}</span>
            <p className='messageBody'>{chatMessage}</p>
            <span className='messageTime'>{time}</span>
          </div>
        </div>
        <footer className='chatFooter'>
          <form onSubmit={handleSubmit}>
            <input
              className={`input ${isArabic(message) ? 'arabic' : ''}`}
              placeholder='Type a message..'
              onChange={handleChange}
              value={message}
              dir='auto'
            />
            <button type='submit' className='buttonSend' disabled={message === ''}>
              <SendSVG />
            </button>
          </form>
        </footer>
      </div>
    </div>
  )
}

export default FloatingWhatsApp
