# Core Tutorial

## Requirements
This tutorial requires the following:

* Node.js 0.12.7 
* A text editor

## Setup

Do the following to setup for this tutorial:

```
git clone https://github.com/KualiCo/core-tutorial.git
cd core-tutorial
npm install
```

## Modify Hosts File 

### Windows

Edit C:\Windows\System32\Drivers\etc\hosts

### OSX

Edit /private/etc/hosts

### Both

Add the following line at the end of the file and save:

```
127.0.0.1  core-tutorial.kuali.core
```

## Run the App 

```
npm start
```

Open browser to https://core-tutorial.kuali.co:3000

Bypass certificate error

Should see **Core Tutorial** on the screen.
