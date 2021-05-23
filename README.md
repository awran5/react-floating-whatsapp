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

## Usage

```jsx
import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import 'react-floating-whatsapp/dist/index.css'

export default function App() {

  return (
      <FloatingWhatsApp {/*  Props  */} />
  )
}
```

### Props

| Prop            |     Type      | Options  | Description                                                                                                               |               Default                |
| --------------- | :-----------: | -------- | ------------------------------------------------------------------------------------------------------------------------- | :----------------------------------: |
| `phoneNumber`   |    String     | Required | Phone number in [intenational format](https://faq.whatsapp.com/general/contacts/how-to-add-an-international-phone-number) |             `1234567890`             |
| `accountName`   |    String     | Required | Account username                                                                                                          |            `Account Name`            |
| `avatar`        |    String     | Optional | change user avatar using [static assets](https://create-react-app.dev/docs/adding-images-fonts-and-files/)                |                 `-`                  |
| `statusMessage` |    String     | Optional | Text below the account username                                                                                           |  `Typically replies within 1 hour`   |
| `chatMessage`   |    String     | Optional | Text inside the chat box.                                                                                                 | `Hello there! 🤝 \nHow can we help?` |
| `darkMode`      |    boolean    | Optional | Dark style. `true` if present                                                                                             |                false                 |
| `styles`        | CSSProperties | Optional | Inline style applied to the `Button` only                                                                                 |                 `-`                  |
| `className`     |   className   | Optional | CSS className applied to the main `Div`                                                                                   |                 `-`                  |

[![Edit react-floating-whatsapp](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-floating-whatsapp-183py?fontsize=14&hidenavigation=1&theme=dark)

### License

MIT © [awran5](https://github.com/awran5/)
