import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FloatingWhatsApp } from '../components/FloatingWhatsApp'

export default {
  title: 'Example',
  component: FloatingWhatsApp,
  argTypes: {},

  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    }
  }
} as ComponentMeta<typeof FloatingWhatsApp>

// eslint-disable-next-line react/function-component-definition, react/jsx-props-no-spreading
const Template: ComponentStory<typeof FloatingWhatsApp> = (args) => <FloatingWhatsApp {...args} />

export const Default = Template.bind({})
Default.args = {
  accountName: 'John Doe',
  phoneNumber: '1234567890'
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  accountName: 'John Doe',
  phoneNumber: '1234567890',
  darkMode: true
}

export const Notification = Template.bind({})
Notification.args = {
  accountName: 'John Doe',
  phoneNumber: '1234567890',
  notification: true,
  notificationLoop: 1,
  notificationDelay: 20
}

export const NotificationWithSound = Template.bind({})
NotificationWithSound.args = {
  accountName: 'John Doe',
  phoneNumber: '1234567890',
  notification: true,
  notificationSound: true,
  notificationLoop: 1,
  notificationDelay: 20
}

export const NotificationLoop = Template.bind({})
NotificationLoop.args = {
  accountName: 'John Doe',
  phoneNumber: '1234567890',
  notification: true,
  notificationSound: true,
  notificationLoop: 5,
  notificationDelay: 20
}

export const EnableClickAway = Template.bind({})
EnableClickAway.args = {
  accountName: 'John Doe',
  phoneNumber: '1234567890',
  allowClickAway: true
}
export const EnableEscKey = Template.bind({})
EnableEscKey.args = {
  accountName: 'John Doe',
  phoneNumber: '1234567890',
  allowEsc: true
}
