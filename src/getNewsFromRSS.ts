import convert from "xml-js";

export default async function getNewsFromRSS() {
  console.log("getNewsFromRSS called");
  const dataxml = await fetch("https://blockchain.news/RSS?key=0HM0B8QFN3GEO");
  const textxml = await dataxml.text();
  const jsonData = convert.xml2json(textxml, { compact: true, spaces: 4 });
  const parse = JSON.parse(jsonData);
  const news = parse.rss.channel.description._text;
  return news;
}
