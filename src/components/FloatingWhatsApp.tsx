import React, { useReducer, useEffect, useCallback, useRef, useMemo } from 'react'
import { reducer } from '../reducer'
import { WhatsappSVG, CloseSVG, CheckSVG, SendSVG } from './Icons'
import css from '../styles.module.css'

import darkBG from './assets/bg-chat-tile-light.png'
import lightBG from './assets/bg-chat-tile-dark.png'
import dummyAvatar from './assets/uifaces-avatar.jpg'
import SoundBeep from './assets/whatsapp-notification.mp3'

export interface FloatingWhatsAppProps {
  /** Callback function fires on click */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void

  /** Allow default submit action  */
  allowDefaultSubmit?: boolean
  /** Callback function fires on submit with event and form input value passed */
  onSubmit?: (event: React.FormEvent<HTMLFormElement>, formValue: string) => void
  /** Callback function fires on close */
  onClose?: () => void
  /** Callback function fired when notification runs */
  onNotification?: () => void
  /** Callback function called when notification loop done */
  onLoopDone?: () => void

  /** Phone number in [intenational format](https://faq.whatsapp.com/general/contacts/how-to-add-an-international-phone-number) */
  phoneNumber: string
  /** Account Name */
  accountName: string
  /** Set chat box height */
  chatboxHeight?: number
  /** Inline style applied to chat box */
  chatboxStyle?: React.CSSProperties
  /** CSS className applied to chat box */
  chatboxClassName?: string
  /** Change user avatar using [static assets](https://create-react-app.dev/docs/adding-images-fonts-and-files/) */
  avatar?: string
  /** Text below the account username */
  statusMessage?: string
  /** Text inside the chat box */
  chatMessage?: string
  /** Input placeholder */
  placeholder?: string

  /** Time delay after which the chatMessage is displayed (in seconds) */
  messageDelay?: number

  /** Allow notifications (Disabled after user opens the chat box) */
  notification?: boolean
  /** Time delay between notifications in seconds */
  notificationDelay?: number
  /** Repeat notifications loop */
  notificationLoop?: number
  /** Enable notification sound */
  notificationSound?: boolean
  /** Notification sound custom src */
  notificationSoundSrc?: string
  /** Inline style applied to notification */
  notificationStyle?: React.CSSProperties
  /** CSS className applied to notification */
  notificationClassName?: string

  /** Closes the chat box if click outside the chat box */
  allowClickAway?: boolean
  /** Closes the chat box if `Escape` key is clicked */
  allowEsc?: boolean
  /** Enable / Disable dark mode */
  darkMode?: boolean
  /** Inline style  applied to the main wrapping `Div` */
  style?: React.CSSProperties
  /** CSS className applied to the main wrapping `Div` */
  className?: string

  /** Inline style applied to button */
  buttonStyle?: React.CSSProperties
  /** CSS className applied to button */
  buttonClassName?: string
}

export function FloatingWhatsApp({
  onClick,
  allowDefaultSubmit=true,
  onSubmit,
  onClose,
  onNotification,
  onLoopDone,

  phoneNumber = '1234567890',
  accountName = 'Account Name',
  avatar = dummyAvatar,
  statusMessage = 'Typically replies within 1 hour',
  chatMessage = 'Hello there! 🤝 \nHow can we help?',
  placeholder = 'Type a message..',

  messageDelay = 2,

  allowClickAway = false,
  allowEsc = false,

  notification = true,
  notificationDelay = 60,
  notificationLoop = 0,
  notificationSound = false,
  notificationSoundSrc = SoundBeep,
  notificationStyle,
  notificationClassName = 'floating-whatsapp-notification',

  buttonStyle,
  buttonClassName = 'floating-whatsapp-button',

  chatboxHeight = 320,
  chatboxStyle,
  chatboxClassName = 'floating-whatsapp-chatbox',

  darkMode = false,
  style,
  className = 'floating-whatsapp'
}: FloatingWhatsAppProps) {
  const [{ isOpen, isDelay, isNotification }, dispatch] = useReducer(reducer, {
    isOpen: false,
    isDelay: true,
    isNotification: false
  })

  const timeNow = useMemo(() => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), [])

  const inputRef = useRef<HTMLInputElement | null>(null)
  const soundRef = useRef<HTMLAudioElement | null>(null)
  const loops = useRef(0)
  const notificationInterval = useRef(0)

  const handleNotification = useCallback(() => {
    if (!notification) return

    dispatch({ type: 'notification' })
    if (onNotification) onNotification()
    if (notificationLoop > 0) {
      loops.current += 1

      if (notificationSound) {
        if (soundRef.current) {
          soundRef.current.currentTime = 0
          soundRef.current.play()
        }
      }
      if (loops.current === notificationLoop) {
        clearInterval(notificationInterval.current)
        if (onLoopDone) onLoopDone()
      }
    }
  }, [notification, notificationLoop, notificationSound, onNotification, onLoopDone])

  useEffect(() => {
    const delayInSecond = notificationDelay * 1000
    if (delayInSecond < 10) return console.error('notificationDelay prop value must be at least 10 seconds.')

    notificationInterval.current = window.setInterval(handleNotification, delayInSecond)

    return () => clearInterval(notificationInterval.current)
  }, [handleNotification, notificationDelay])

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()

      if (isOpen) return

      clearInterval(notificationInterval.current)
      dispatch({ type: 'open' })
      setTimeout(() => dispatch({ type: 'delay' }), messageDelay * 1000)
      if (onClick) onClick(event)
    },
    [isOpen, onClick, messageDelay]
  )

  const handleClose = useCallback(() => {
    dispatch({ type: 'close' })

    if (onClose) onClose()
  }, [onClose])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputRef.current?.value) return
if(allowDefaultSubmit){
  window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${inputRef.current.value}`)
}
  
    if (onSubmit) onSubmit(event, inputRef.current.value)
    inputRef.current.value = ''
  }

  useEffect(() => {
    const onClickOutside = () => {
      if (!allowClickAway || !isOpen) return

      handleClose()
    }
    document.addEventListener('click', onClickOutside, false)

    return () => document.removeEventListener('click', onClickOutside)
  }, [allowClickAway, isOpen, handleClose])

  useEffect(() => {
    const onEscKey = (event: KeyboardEvent) => {
      if (!allowEsc || !isOpen) return

      if (event.key === 'Escape') handleClose()
    }

    document.addEventListener('keydown', onEscKey, false)

    return () => document.removeEventListener('keydown', onEscKey)
  }, [allowEsc, isOpen, handleClose])

  return (
    <div className={`${css.floatingWhatsapp} ${darkMode ? `${css.dark} ` : ''} ${className}`} style={style}>
      <div
        className={`${css.whatsappButton} ${buttonClassName}`}
        onClick={handleOpen}
        style={buttonStyle}
        aria-hidden='true'
      >
        <WhatsappSVG />
        {isNotification && (
          <span className={`${css.notificationIndicator} ${notificationClassName}`} style={notificationStyle}>
            1
          </span>
        )}
      </div>

      <div
        className={`${css.whatsappChatBox} ${isOpen ? css.open : css.close} ${chatboxClassName}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden='true'
        style={{ height: isOpen ? chatboxHeight : 0, ...chatboxStyle }}
      >
        <header className={css.chatHeader}>
          <div className={css.avatar}>
            <img src={avatar} width='60' height='60' alt='whatsapp-avatar' />
          </div>
          <div className={css.status}>
            <span className={css.statusTitle}>{accountName}</span>
            <span className={css.statusSubtitle}>{statusMessage}</span>
          </div>
          <div className={css.close} onClick={handleClose} aria-hidden='true'>
            <CloseSVG />
          </div>
        </header>

        <div className={css.chatBody} style={{ backgroundImage: `url(${darkMode ? darkBG : lightBG})` }}>
          {isDelay ? (
            <div className={css.chatBubble}>
              <div className={css.typing}>
                <div className={css.dot} />
                <div className={css.dot} />
                <div className={css.dot} />
              </div>
            </div>
          ) : (
            <div className={css.message}>
              <span className={css.triangle} />
              <span className={css.accountName}>{accountName}</span>
              <p className={css.messageBody}>{chatMessage}</p>
              <span className={css.messageTime}>
                {timeNow}
                <span style={{ marginLeft: 5 }}>
                  <CheckSVG />
                </span>
              </span>
            </div>
          )}
        </div>

        <footer className={css.chatFooter}>
          <form onSubmit={handleSubmit}>
            <input className={css.input} placeholder={placeholder} ref={inputRef} dir='auto' />
            <button type='submit' className={css.buttonSend}>
              <SendSVG />
            </button>
          </form>
        </footer>
      </div>
      {notificationSound && <audio ref={soundRef} hidden src={notificationSoundSrc} />}
    </div>
  )
}
