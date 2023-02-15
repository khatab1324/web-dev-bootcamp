//================================================= json =================================================
const data = `{"ticker":{"base":"BTC","target":"USD","price":"22120.18882419","volume":"8072.63252147","change":"-225.36604851"},"timestamp":1676389206,"success":true,"error":""}`;

// we have mothode in json to call
// --------------------------------JSON.parse()-----------------------
// The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

const parsedData = JSON.parse(data);
// data is saved, now you can call what you want

// ok if you want call value you should dave it in value or call it in console

parsedData.ticker;

// if you want price print this console
parsedData.ticker.price;

// ===================================== xmlhttpRequest ==============================
// our first requeste from code with old way and not important

// save XMLHttp
const req = new XMLHttpRequest();
const reqs = new XMLHttpRequest();
// and here tow method for error or no error
// there is no error
req.onload = function () {
  console.log("it loaded");
  console.log(this);
};
// rememmber events come with function

// if there error

req.onerror = function () {
  console.log("ERROR !!!");
  console.log(this);
};

// and open it
req.open("GET", "https://swapi.dev/api/people/5/"); // open(method ,url)

// and now we should send it
req.send();

// and if you want call somthing
reqs.onload = function () {
  console.log("it loaded");
  console.log();
  const data = JSON.parse(this.responseText);
  console.log(data);
};
reqs.onerror = function () {
  console.log("ERROR !!!");
  console.log(this);
};
reqs.open("GET", "https://swapi.dev/api/people/4/"); // open(method ,url)
reqs.send();

// because that huge syntax , fetch is come
// ==============================================================fetch=======================================
fetch("https://swapi.dev/api/people/3/")
  .then((res) => {
    console.log("==================================fetch===================");
    console.log("resolve!!", res);
    console.log("uncomplet body");
    // ok fetch is return uncomplet body because of that we should return json and then save it in data and print it
    return res.json();
  })
  .then((data) => {
    console.log(data);

    // i want make second request
    return fetch("https://swapi.dev/api/people/2/");
  })
  .then((res) => {
    console.log("second request with fetch");
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((e) => {
    console.log("ERROR", e);
  });

//   =============================================Axios==========================================

axios
  .get("https://swapi.dev/api/people/6/")
  .then((rest) => {
    console.log("--------------------------here Axios------------------");
    console.log("RESPONE", rest);
  })
  .catch((e) => {
    console.log("ERROR", e);
  });

// more parectice tv show
