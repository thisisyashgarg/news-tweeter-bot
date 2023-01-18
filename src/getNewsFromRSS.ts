import convert from "xml-js";

export default async function getNewsFromRSS() {
  console.log("getNewsFromRSS called");
  const dataxml = await fetch("https://blockchain.news/RSS?key=0HM0B8QFN3GEO");

  //converting data into xml
  const textxml = await dataxml.text();

  //converting textxml to json
  const jsonData = convert.xml2json(textxml, { compact: true, spaces: 4 });

  //parsing it for further destructuring
  const parse = JSON.parse(jsonData);

  //extracting targeted news
  const news = parse.rss.channel.description._text;
  return news;
}
