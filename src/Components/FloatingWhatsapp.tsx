import React, { useState } from 'react'
import { WhatsappSVG, ChatSVG, CloseSVG, SendSVG } from './Icons'
import css from '../styles.module.css'

interface FloatingWhatsAppProps {
  phoneNumber: string
  accountName: string
  avatar?: string
  statusMessage?: string
  chatMessage?: string
  darkMode?: boolean
  styles?: React.CSSProperties
  className?: string
  placeholder?: string
}

const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`)
// Just to change the ugly arabic font
const isArabic = (string: string) => /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(string)

function FloatingWhatsApp({
  phoneNumber = '1234567890',
  accountName = 'Account Name',
  avatar = '',
  statusMessage = 'Typically replies within 1 hour',
  chatMessage = 'Hello there! 🤝 \nHow can we help?',
  darkMode = false,
  styles = {},
  className = '',
  placeholder = 'Type a message..'
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
    <div className={`${css.floatingWhatsapp} ${darkMode ? css.dark : ''}` + className}>
      <div className={css.whatsappButton} onClick={handleClick} style={styles}>
        <WhatsappSVG />
      </div>
      <div className={`${css.whatsappChatBox} ${isOpen ? css.open : css.close}`}>
        <header className={css.chatHeader}>
          <div className={css.avatar}>
            {avatar ? <img src={avatar} width='45' height='45' alt='whatsapp-avatar' /> : <ChatSVG />}
          </div>
          <div className={css.status}>
            <span className={css.statusTitle}>{accountName}</span>
            <span className={css.statusSubtitle}>{statusMessage}</span>
          </div>
          <div className={css.close} onClick={handleClick}>
            <CloseSVG />
          </div>
        </header>
        <div className={css.chatBody}>
          <div className={css.message}>
            <span className={css.triangle} />
            <span className={css.accountName}>{accountName}</span>
            <p className={css.messageBody}>{chatMessage}</p>
            <span className={css.messageTime}>{time}</span>
          </div>
        </div>
        <footer className={css.chatFooter}>
          <form onSubmit={handleSubmit}>
            <input
              className={`${css.input} ${isArabic(message) ? css.arabic : ''}`}
              placeholder={placeholder}
              onChange={handleChange}
              value={message}
              dir='auto'
            />
            <button type='submit' className={css.buttonSend} disabled={message === ''}>
              <SendSVG />
            </button>
          </form>
        </footer>
      </div>
    </div>
  )
}

export default FloatingWhatsApp
