//================================================= json =================================================
const data = `{"ticker":{"base":"BTC","target":"USD","price":"22120.18882419","volume":"8072.63252147","change":"-225.36604851"},"timestamp":1676389206,"success":true,"error":""}`;

// we have mothode in json to call
// --------------------------------JSON.parse()-----------------------
// The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

const parsedData = JSON.parse(data);
// data is saved, now you can call what you want

// ok if you want call value you should dave it in value or call it in console

parsedData.ticker;
