var request = require("request");
var express = require("express");
const app = express();

const PORT = 4001;

app.listen(PORT, () => {
  console.log("Listening on port : ", PORT);
});

app.get("/", (req, res) => {
  res.send("Listening throguh ngork");
});

app.post("/", (req, res) => {
  console.log("Someone here");
  res.send("Someone posted on  base url");
});

//Post to SNOW
// var options = {
//   url: "https://dev76825.service-now.com/api/now/table/incident",

//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     Authorization:
//       "Basic " + new Buffer("admin:c9SgDUc7KFgg").toString("base64")
//   },
//   json: true,

//   body: {
//     short_description: "Creating incident through Request",
//     assignment_group: "287ebd7da9fe198100f92cc8d1d2154e",
//     urgency: "3",
//     impact: "3"
//   }
// };

// function callback(error, response, body) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(body);
//   }
// }

// request(options, callback);
