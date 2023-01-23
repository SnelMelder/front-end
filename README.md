<!-- Banner Image -->

<p align="center">
  <a href="https://expo.dev/">
    <img alt="expo sdk" height="128" src="https://github.com/expo/expo/raw/main/.github/resources/banner.png">
    <h1 align="center">Expo</h1>
  </a>
</p>

<p align="center">
   <a aria-label="SDK version" href="https://www.npmjs.com/package/expo" target="_blank">
    <img alt="Expo SDK version" src="https://img.shields.io/npm/v/expo.svg?style=flat-square&label=SDK&labelColor=000000&color=4630EB" />
  </a>
  <a aria-label="Join our forums" href="https://forums.expo.dev" target="_blank">
    <img alt="Forums" src="https://img.shields.io/badge/Ask%20Questions%20-blue.svg?style=flat-square&logo=discourse&logoWidth=15&labelColor=000000&color=4630EB" />
  </a>
  <a aria-label="Join our Discord" href="https://discord.gg/4gtbPAdpaE" target="_blank">
    <img alt="Discord" src="https://img.shields.io/discord/695411232856997968.svg?style=flat-square&labelColor=000000&color=4630EB&logo=discord&logoColor=FFFFFF&label=" />
  </a>
  <a aria-label="Expo is free to use" href="https://github.com/expo/expo/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12" target="_blank" />
  </a>
  <a aria-label="expo downloads" href="http://www.npmtrends.com/expo" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/expo.svg?style=flat-square&labelColor=gray&color=33CC12&label=Downloads" />
  </a>
</p>

<p align="center">
  <a aria-label="try expo with snack" href="https://snack.expo.dev"><b>Try Expo in the Browser</b></a>
 |
  <a aria-label="expo documentation" href="https://docs.expo.dev">Read the Documentation 📚</a>
</p>

<p>
  <a aria-label="Follow @expo on Twitter" href="https://twitter.com/intent/follow?screen_name=expo" target="_blank">
    <img  alt="Twitter: expo" src="https://img.shields.io/twitter/follow/expo.svg?style=flat-square&label=Follow%20%40expo&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=15&color=lightgray" target="_blank" />
  </a>
  <a aria-label="Follow Expo on Medium" href="https://blog.expo.dev">
    <img align="right" alt="Medium: exposition" src="https://img.shields.io/badge/Learn%20more%20on%20our%20blog-lightgray.svg?style=flat-square" target="_blank" />
  </a>
</p>
  
<br />

This app is built in React Native using the Expo CLI.

## Getting started

### Running the project

```bash
git clone https://github.com/SnelMelder/front-end.git
sudo npm install -g expo-cli
npm install
npm start
```

### Configuring authentication with Azure AD

A Microsoft developer tenant has been set up for this project. You can use this if you want to. Please refer to Jard for the details.

If you want to set this up yourselves:

1. Create a file named authConfig.ts in the auth folder.
2. Copy the contents of the authConfig.example.ts file over to this file.
3. Add this application to your Microsoft developer tenant, following Microsoft instructions
4. Fill in the details in your authConfig.ts file

## Live preview on iPhone

1. [Create an Expo account](https://expo.dev/) on your desktop.
2. Add a project, make sure the slug is: `SnelMelder`.
3. [Download the Expo app](https://apps.apple.com/nl/app/expo-go/id982107779) and log in.
4. Run the `expo login` command in project terminal to sync up your account.
5. Start the project with `npm start`.
6. Select connection mode `Tunnel` (see screenshot down below).
7. Look up the URL that is generated on your iPhone device and `open with Expo app` (see example URL in the screenshot below).
8. Your project is now accessable via the Expo app while it's running. :partying_face:

<br />

![image](https://user-images.githubusercontent.com/57891326/157050507-d76bfc9d-76ae-4128-bce0-da1277b326d1.png)
