import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { completionCall } from "./openAI.js";
import { tweeterFunction } from "./twitterBot.js";
import getNewsFromRSS from "./getNewsFromRSS.js";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send(`News Tweeter Bot is running live on port ${port}`);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

async function getNewsAndTweet() {
  //getting news from rss
  const news = await getNewsFromRSS();

  // creating commentary for the news by passiing prompt into opanai
  const tweet = await completionCall(
    `Write a tweet commenting on the news given below under 280 characters of length
  News: ${news} `
  );
  console.log(tweet);

  // calling the tweeter bot to tweet the news
  tweeterFunction(tweet);
}

//Calls every hour
setInterval(getNewsAndTweet, 3600000);
