import dotenv from "dotenv";
dotenv.config();

export default async function getNewsFromRSS() {
  console.log("getNewsFromRSS called");

  //fetching data from api
  const dataxml = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&q=crypto`
  );

  // converting into xml
  const textxml = await dataxml.text();

  //converting into json object
  const parse = JSON.parse(textxml);

  // random number to get new news every time
  const randomNumber = Math.floor(Math.random() * parse.results.length);

  //extracting news from parse object
  const randomNews = parse.results[randomNumber].content;

  return randomNews;
}
