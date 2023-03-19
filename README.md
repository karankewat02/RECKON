# REKON 4.0

# KalaShakti

An exquisite online platform for buying and selling India's finest handicrafts,handlooms and artwork NFTs

Our product is a platform for people from all walks of life, having a wide range of artwork, serving and catering to the needs of all ranges of our society. With Kalashakti, we envision a more inclusive and egalitarian world for all the artisans who are preserving the beautiful and rich art and culture of Incredible India with their immense hard work and dedication. We put our people and planet first.


## Branches
KalaShaktis code is in three different branch namely frontend,backend and NFTMARKETPLACE
#### To Run Locally
Follow each branch installation commands given below and make sure your local machine have,Nodejs,yarn,phantom wallet(with devnet SOL),react-native-cli,Android Emulator and git(if you want to clone the repo )

#### To run Frontend
```bash
  npm i
  npm start
```
#### To run Backend
```bash
  npm i
  npm start
```
> **_NOTE:_**  env is required for backend functionality for that create .env file in backend folder and add below given data
```javascript

# MONGO_URL = mongodb://karan:12345@kalashakti-shard-00-00.d3syl.mongodb.net:27017,kalashakti-shard-00-01.d3syl.mongodb.net:27017,kalashakti-shard-00-02.d3syl.mongodb.net:27017/shop?ssl=true&replicaSet=atlas-gpmh74-shard-0&authSource=admin&retryWrites=true&w=majority
MONGO_URL = mongodb+srv://karan:12345@kalashakti.d3syl.mongodb.net/?retryWrites=true&w=majority
PORT = 5000
PASS_SEC = karan
JWT_SEC = karan
STRIPE_KEY = sk_test_51KksQISD4uoRjxVgA4uaDs5fAyxGEO9LFD3MYoMNUqdzYKMsOpJkl6HPsBW5bBfOOE4Idw5zXWXQh43wAWysRVHo00n8K4Cl95
DB_URL = ecommerce.mysql.polardb.ap-south-1.rds.aliyuncs.com
DB_USER = karankewat
DB_PASS = Karan@123
DB_PASS = 3306
DB_NAME = ecom
``` 
#### To run NFTMARKETPLACE
```bash
  yarn
  yarn dev
```
> **_NOTE:_**  To run NFTMARKETPLACE env is required for that create .env in NFTMARKETPLACE folder and add below given data
```javascript
## General Params
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_HOST=https://api.devnet.solana.com

# Sample mainnet-beta params below for reference:
# NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
# NEXT_PUBLIC_SOLANA_RPC_HOST=https://ssc-dao.genesysgo.net

## CANDY SHOP PARAMS
NEXT_PUBLIC_CANDY_SHOP_CREATOR_ADDRESS=3ASjJtuJnFkK1XGmqyztqyeC48yUWpbGzHFQGBmFL25C
NEXT_PUBLIC_CANDY_SHOP_TREASURY_MINT=So11111111111111111111111111111111111111112
NEXT_PUBLIC_CANDY_SHOP_PROGRAM_ID=csbMUULiQfGjT8ezT16EoEBaiarS6VWRevTw1JMydrS

# Additional params to be set if using SPL token as minting currency only:
# SPL Token symbol to display next the price
NEXT_PUBLIC_SPL_TOKEN_TO_MINT_NAME=

# SPL Token decimals place defined on creation (default is 9)
NEXT_PUBLIC_SPL_TOKEN_TO_MINT_DECIMALS=9

# To avoid harmless compilation warnings generating a build error, keep CI set to false
CI=false
```

#### To run app 
```bash
npm i 
npm run android
```
## Tech Stack

**Client:** Reactjs

**Server:** Node, Express

**Client:(Marketplace)** Nextjs,Liqnft SDk

**Wallet:(Marketplace)** Phantom

**Database:** Mongodb

**API Service** Shyft,Postman

**Bot Service** DialogFlow,Kommunicate

**App:** ReactNative

**Hosting Platforms :** Vercel,AWS EC2,Indus App Bazar

**Analytics Platforms :** Vercel

Hosted link [Kalashakti](https://www.kalashakti.store/)






