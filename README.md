# Electron-HWR
![Node.js CI](https://github.com/FortyIX/Electron-HWR/workflows/Node.js%20CI/badge.svg?branch=master)
</br>
A electron app that recognize your handwriting with a CNN built with Tensorflow</br>
![GitHub Logo](/assets/screenshot.png)



## Setup 
you will need to install some npm package before you can run it as github does not allow file larger than 100 mb to be uploaded (node_modules)

## Dependency
- @tensorflow/tfjs
- electron
- jquery http-server
```
npm install

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
