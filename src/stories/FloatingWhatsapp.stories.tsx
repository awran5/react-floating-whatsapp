import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FloatingWhatsApp } from '../components/FloatingWhatsApp'

export default {
  title: 'Example',
  component: FloatingWhatsApp,
  argTypes: {}
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
  notificationLoop: 5,
  notificationDelay: 30
}
