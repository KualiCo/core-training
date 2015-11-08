# Core Training

## Requirements

* Node.js 0.12.7 
* A text editor

## Setup

```
git clone https://github.com/KualiCo/core-training.git
cd core-training
npm install
```

## Modify Hosts File 

### Windows

```
C:\Windows\System32\Drivers\etc\hosts
```

### OSX

```
/private/etc/hosts
```

### Both

Add the following line at the end of the file and save:

```
127.0.0.1  core-training.kuali.core
```

## Run the App 

```
npm start
```

Open browser to 

```
https://core-training.kuali.co:3000
```

Bypass certificate error

Should see **Core Training** on the screen.
