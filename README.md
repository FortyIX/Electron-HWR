# Electron-HWR
![Node.js CI](https://github.com/FortyIX/Electron-HWR/workflows/Node.js%20CI/badge.svg?branch=master)
</br>
A electron app that recognize your handwriting with a CNN built with Tensorflow<
![GitHub Logo](/assets/screenshot.png)



## Setup 
you will need to install some npm package before you can run it as github does not allow file larger than 100 mb to be uploaded (node_modules)

## Dependency
```
npm install @tensorflow/tfjs
npm install --save-dev electron
npm install jquery http-server

```

## Create a server to host the model 
you will have to host the model on localhost before you can start the app 
```
hs model --cors
```

## Start the app 
```
 npm start

```
