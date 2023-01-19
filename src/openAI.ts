import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";

// passing api key into configuration
const configuration = new Configuration({
  organization: "org-uzqmwt05wbaGv7p65g22JNKV",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

//declaring type explicitly
class OpenAIChoice {
  text: string;
}
//declaring type explicitly
class OpenAIResponse {
  choices: OpenAIChoice[];
}

export async function completionCall(prompt: string): Promise<string> {
  try {
    console.log("openai called");

    //fetching data from openai
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 2048,
        temperature: 0.75,
      }),
    });

    //destructuring data
    const { choices } = (await response.json()) as OpenAIResponse;
    const mainData = choices[0].text.trim();
    return mainData;
  } catch (err) {
    if (err) {
      console.log(err.message);
    }
  }
}
