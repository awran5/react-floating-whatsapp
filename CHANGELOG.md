# 4.0.4 (patch)

- Removed: semantic-release
- Removed: github action
- Modified: using [@rollup/plugin-url](https://www.npmjs.com/package/@rollup/plugin-url) for handling the assets

# 4.0.0 (2021-09-25)

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
