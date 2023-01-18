import dotenv from "dotenv";
dotenv.config();
import twit from "twit";
import { tweet } from "./index.js";

//verifying credentials
const credentials = new twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

//Tweeter Function
export const tweeterFunction = () => {
  console.log("tweeterFunction called");
  //Checking errors
  const onExecution = (err, success) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log(
        `Success
         Tweet: ${success.text}
         Username: ${success.user.name}
         Created at: ${success.created_at}`
      );
      console.log("Woohoo, your tweet has been sent :)");
    }
  };

  //This tweets the msg
  credentials.post("statuses/update", { status: tweet }, onExecution);
};
