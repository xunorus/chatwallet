# chatwallet

A self custodial gho based mutichain hot wallet to chat, metatransact and more!

demo https://chatwallet-gho.web.app/

# Install

```
nvm install 19
yarn
```

# Run

```
yarn parcel src/index.html   --port 7777 --https
```

# gho info

- docs https://docs.gho.xyz/developer-docs/overview
- gho token sepolia https://sepolia.etherscan.io/address/0xc4bF5CbDaBE595361438F8c6a187bDc330539c60

# deploy to firebase

```
nvm install 19
yarn parcel src/index.html --dist-dir public  --public-url ./
firebase deploy --only hosting:chatwallet-gho

```
