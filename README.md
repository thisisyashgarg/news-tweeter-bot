# News Commentary Tweeter Bot

This is a tweeter bot that automatically gets the news from RSS feed and then generates commentary tweet about them and tweets them.

## Requirements

- Node 
- npm
- express
- dotenv
- twit
- openAI
- xml-js
- fetch

## Installation

Clone the repository

```bash
git clone https://github.com/thisisyashgarg/news-tweeter-bot.git
```

Install the dependencies

```bash
npm i
```

Set up the environment

```bash
touch .env
```

Add your credentials and API key in the .env file  

```
consumer_key = your-consumer-key
consumer_secret = your-consumer-secret
access_token = your-access-token
access_token_secret = your-access-token-secret
OPENAI_API_KEY = your-openai-api-key
```

Install the required libraries

```bash
npm install twit
npm install openai
npm install xml-js
npm install node-fetch
```

## Usage

Run the program

```bash
node index.js
```
