# chatwallet

A self custodial mutichain hot wallet to chat and crypto with friends!

demo https://chatwallet-x.web.app/

# hacked at eth global
https://ethglobal.com/showcase/chatwallet-5rp2j


# Install

```
nvm install 20
yarn
```

# Run

```
yarn parcel src/index.html   --port 7777 --https

```
<!-- 
yarn parcel src/index.html  src/peerEncrypt.html   --port 7777 --https
 -->

# deploy to firebase

```
nvm install 20
yarn parcel src/index.html --dist-dir public  --public-url ./
firebase deploy --only hosting:chatwallet-x
```
# test firebase 
```
firebase emulators:start
```
# log
v1.15 fullscreen
v1.13 Fix did loading, css mobile.Addedcontent-type-transaction-reference
v1.12 Fix did avatars and contacts.
v1.11 Fix duplicate msgs and anonym icon.