// ================session stored in server not in browser==============
// cookies not secure //saved on browser//have limit of storing in browser
// the browser send cookies have id for session in every req
// .....The server can then take that ID and then go to the session data store and retrieve all relevant information
const express = require("express");
const app = express();
const session = require("express-session");
// Note Since version 1.5.0, the cookie-parser middleware no longer needs to be used for this module to work
const sessionOptions = {
  secret: "thisisnotagoodsecret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions)); //if you open the terminal without resave and saveUninitialized you will see this warring
// express-session deprecated undefined resave option; provide resave option app.js:9:9
// express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:9:9

// resave:
// Forces the session to be saved back to the session store, even if the session was never modified during the request. Depending on your store this may be necessary, but it can also create race conditions where a client makes two parallel requests to your server and changes made to the session in one request may get overwritten when the other request ends, even if it made no changes (this behavior also depends on what store you're using).
// .......The default value is true, but using the default has been deprecated, as the default will change in the future. Please research into this setting and choose what is appropriate to your use-case. Typically, you'll want false.
// .......How do I know if this is necessary for my store? The best way to know is to check with your store if it implements the touch method. If it does, then you can safely set resave: false. If it does not implement the touch method and your store sets an expiration date on stored sessions, then you likely need resave: true.

// saveUninitialized
// Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie. Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.
// ..........The default value is true, but using the default has been deprecated, as the default will change in the future. Please research into this setting and choose what is appropriate to your use-case.
// ..........Note if you are using Session in conjunction with PassportJS, Passport will add an empty Passport object to the session for use after a user is authenticated, which will be treated as a modification to the session, causing it to be saved. This has been fixed in PassportJS 0.3.0

app.get("/", (req, res) => {
  //if you open the cookies in browser you will find connect.sid that maked by express-session
  //..this sid (sessionId) send for us on every req tell the server about the session
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`you refresh the page number${req.session.count}`);
});
// Warning:
//  The default server-side session storage, MemoryStore, is purposely not designed for a production environment. It will leak memory under most conditions, does not scale past a single process, and is meant for debugging and developing.
const port = 2777;
app.listen(port, () => {
  console.log(`HI I am listen port ${port}`);
});
