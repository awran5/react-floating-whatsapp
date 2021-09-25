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

## Changes

- Added: Default Avatar using generated [random avatars](https://uifaces.co/)
- Added: New Prop `height` that allow to control the chat box height.
- Added: New Prop `notification` that enable/disable repeated notifications sound and indicators.
- Added: New Prop `notificationDelay` to set the time delay between notifications in millisecond.
- Added: New Prop `notificationSound` to allow notifications sound.
- Added: Message typing effect before `chatMessage` appears.
- Fixed: Chat box css `position` Thanks to @jpmedeirosmorais and @jorgemndoza
- Modified: Refactor state using useReducer Hook.
- Modified: Prevent toggle open/close the chat box.
- Modified: CSS stylesheet import, now its applied inline.
- Updated: App dependencies

## Usage

```jsx
import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

export default function App() {

  return (
      <FloatingWhatsApp {/*  Props  */} />
  )
}
```

### Props

| Prop                |     Type      | Options  | Description                                                                                                               |               Default                |
| ------------------- | :-----------: | -------- | ------------------------------------------------------------------------------------------------------------------------- | :----------------------------------: |
| `phoneNumber`       |    String     | Required | Phone number in [intenational format](https://faq.whatsapp.com/general/contacts/how-to-add-an-international-phone-number) |             `1234567890`             |
| `accountName`       |    String     | Required | Account username                                                                                                          |            `Account Name`            |
| `avatar`            |    String     | Optional | Change user avatar using [static assets](https://create-react-app.dev/docs/adding-images-fonts-and-files/)                |              `UI Faces`              |
| `statusMessage`     |    String     | Optional | Text below the account username                                                                                           |  `Typically replies within 1 hour`   |
| `chatMessage`       |    String     | Optional | Text inside the chat box.                                                                                                 | `Hello there! 🤝 \nHow can we help?` |
| `placeholder`       |    String     | Optional | Input placeholder.                                                                                                        |          `Type a message..`          |
| `darkMode`          |    Boolean    | Optional | Dark style.                                                                                                               |               `false`                |
| `allowClickAway`    |    Boolean    | Optional | Closes the chat box when user clicks outside                                                                              |               `false`                |
| `allowEsc`          |    Boolean    | Optional | Closes the chat box when `Escape` key is pressed                                                                          |               `false`                |
| `className`         |    String     | Optional | CSS className applied to the main wrapping `Div`                                                                          |            `custom-class`            |
| `styles`            | CSSProperties | Optional | Inline style applied to the `Button` only                                                                                 |                 `{}`                 |
| `height`            |    Number     | Optional | Control chat box height                                                                                                   |                `300`                 |
| `notification`      |    Boolean    | Optional | Allow repeated notifications (Disabled after user opens the chat box)                                                     |               `false`                |
| `notificationDelay` |    Number     | Optional | Time delay between notifications in millisecond                                                                           |               `18000`                |
| `notificationSound` |    Boolean    | Optional | Allow notification sound                                                                                                  |               `false`                |

<br />

[![Edit react-floating-whatsapp](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-floating-whatsapp-183py?fontsize=14&hidenavigation=1&theme=dark)

### License

MIT © [awran5](https://github.com/awran5/)
