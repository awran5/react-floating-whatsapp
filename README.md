# React Floating Whatsapp

> Simple react component for adding a floating WhatsApp button to your project.

[![NPM](https://img.shields.io/npm/v/react-floating-whatsapp.svg)](https://www.npmjs.com/package/react-floating-whatsapp)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-floating-whatsapp)
![GitHub](https://img.shields.io/github/license/awran5/react-floating-whatsapp)

<p align="center">
  <img src="./screenshot.gif" alt="screenshot" width="100%" />
</p>

## Install

#### npm

```bash
npm i react-floating-whatsapp
```

#### Yarn

```bash
yarn add react-floating-whatsapp
```

## [v5.0.0](https://github.com/awran5/react-floating-whatsapp/compare/v4.0.5...v5.0.0) - 2022-10-07

- **BREAKING CHANGES:** change **default** import to **name** import
- **BREAKING CHANGES:** rename `height` prop to `chatboxHeight`
- **BREAKING CHANGES:** rename `styles` prop to `style`
- **BREAKING CHANGES:** `notificationDelay` now in seconds instead of millisecond

## Usage

```jsx
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function App() {

  return (
      <FloatingWhatsApp {/*  Props  */} />
  )
}
```

### Props

| Prop                    |     Type      | Options  | Description                                                                                                               |               Default                |
| ----------------------- | :-----------: | -------- | ------------------------------------------------------------------------------------------------------------------------- | :----------------------------------: |
| `phoneNumber`           |    String     | Required | Phone number in [intenational format](https://faq.whatsapp.com/general/contacts/how-to-add-an-international-phone-number) |             `1234567890`             |
| `accountName`           |    String     | Required | Account username                                                                                                          |            `Account Name`            |
| `onClick`               |   Function    | Optional | Callback function fires on click                                                                                          |                 `-`                  |
| `onSubmit`              |   Function    | Optional | Callback function fires on submit with event and form input value passed                                                  |                 `-`                  |
| `onClose`               |   Function    | Optional | Callback function fires on close                                                                                          |                 `-`                  |
| `onLoopDone`            |   Function    | Optional | Callback function called when notification loop done                                                                      |                 `-`                  |
| `onNotification`        |   Function    | Optional | Callback function fired when notification runs                                                                            |                 `-`                  |
| `avatar`                |    String     | Optional | Change user avatar using [static assets](https://create-react-app.dev/docs/adding-images-fonts-and-files/)                |              `UI Face`               |
| `statusMessage`         |    String     | Optional | Text below the account username                                                                                           |  `Typically replies within 1 hour`   |
| `chatMessage`           |    String     | Optional | Text inside the chat box.                                                                                                 | `Hello there! 🤝 \nHow can we help?` |
| `placeholder`           |    String     | Optional | Input placeholder.                                                                                                        |          `Type a message..`          |
| `darkMode`              |    Boolean    | Optional | Dark style.                                                                                                               |               `false`                |
| `allowClickAway`        |    Boolean    | Optional | Closes the chat box when user clicks outside                                                                              |               `false`                |
| `allowEsc`              |    Boolean    | Optional | Closes the chat box when `Escape` key is pressed                                                                          |               `false`                |
| `className`             |    String     | Optional | CSS className applied to the main wrapping `Div`                                                                          |         `floating-whatsapp`          |
| `buttonClassName`       |    String     | Optional | CSS className applied to button                                                                                           |      `floating-whatsapp-button`      |
| `style`                 | CSSProperties | Optional | Inline style applied to the main wrapping `Div`                                                                           |                 `{}`                 |
| `buttonStyle`           | CSSProperties | Optional | Inline style applied to button                                                                                            |                 `{}`                 |
| `chatboxHeight`         |    Number     | Optional | Control chat box height                                                                                                   |                `320`                 |
| `chatboxClassName`      |    String     | Optional | CSS className applied to chat box                                                                                         |     `floating-whatsapp-chatbox`      |
| `chatboxStyle`          | CSSProperties | Optional | Inline style applied to chat box                                                                                          |                 `{}`                 |
| `notification`          |    Boolean    | Optional | Allow notifications (Disabled after user open the chat box)                                                               |               `false`                |
| `notificationDelay`     |    Number     | Optional | Time delay between notifications in seconds                                                                               |                 `60`                 |
| `notificationSound`     |    Boolean    | Optional | Allow notification sound                                                                                                  |               `false`                |
| `notificationSoundSrc`  |    String     | Optional | Notification sound custom src                                                                                             |                 `-`                  |
| `notificationLoop`      |    Number     | Optional | Repeat notifications loop                                                                                                 |                 `0`                  |
| `notificationStyle`     | CSSProperties | Optional | Inline style applied to notification                                                                                      |                 `-`                  |
| `notificationClassName` |    String     | Optional | CSS className applied to notification indicator                                                                           |   `floating-whatsapp-notification`   |

<br />

[![Edit react-floating-whatsapp](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-floating-whatsapp-183py)

### License

MIT © [awran5](https://github.com/awran5/)
