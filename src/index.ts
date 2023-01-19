import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { completionCall } from "./openAI.js";
import { tweeterFunction } from "./twitterBot.js";
import getNewsFromRSS from "./getNewsFromRSS.js";

const port = 5555;
const app = express();

//getting news from rss
const news = await getNewsFromRSS();

// creating commentary for the news by passiing prompt into opanai
export const tweet = await completionCall(
  `Write a  tweet  commenting  on the news give below in 280 characters 
  News: ${news} `
);

// calling the tweeter bot to tweet the news
tweeterFunction();

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
