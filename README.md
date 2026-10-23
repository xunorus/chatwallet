# chatwallet (2024 · ETHGlobal LFGHO)

> **ChatWallet lives on at [chatwallet.org](https://chatwallet.org).**
> This repository is the original prototype, built for the [ETHGlobal LFGHO hackathon](https://ethglobal.com/showcase/chatwallet-5rp2j) (January 2024).
> The project kept growing as open source at **[energiasonora/chatWallet](https://github.com/energiasonora/chatWallet)**. It now has a self-custodial multichain wallet, end-to-end encrypted chat over XMTP, payments inside the chat, Monero, and a signed Android app.
> This code is kept here unchanged as a historical record.

---


A self custodial mutichain hot wallet to chat and crypto with friends!

demo (2024, now redirects to the current app): https://chatwallet.org

polybaseDB: https://explorer.testnet.polybase.xyz/studio/pk%2F0xee1b340c80295bb60ada66e0396a44b70c479a857c357b37883d27efe030aaf8baf25fde75eaf8881bb6c0f34fac20dbf6896fc373d5835e43ffe01f216feab9%2FIURISNATURALIS/collections/CHATWALLETDID
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
v2.03 Update avatar. 
2.02 Fixed setting using alias
2.01 Fixed sending erc20s
2.00 Ethers js v6 update
v1.15 fullscreen
v1.13 Fix did loading, css mobile.Addedcontent-type-transaction-reference
v1.12 Fix did avatars and contacts.
v1.11 Fix duplicate msgs and anonym icon.