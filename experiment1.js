//Boilerplate for regular javascript :
someText =
  "Call from: +61 3 8199 1972\nTime of call: January 9, 2020 at 10:06:30 PM\nAnswered by: Benjamin Davies";
someText = someText.split("\n").join("\\r");
//someText = someText.replace(/\n/g, "\r");

console.log(someText);

//Doing it on Service Now :

//Step1 of 2  . Create client side script :

// function onLoad() {
//   var comments = gel("short_description").value;
//   var ga = new GlideAjax("ServiceNow201GlideAjax");
//   ga.addParam("sysparam_name", "replaceNewline");
//   ga.addParam("sysparam_value", comments);
//   ga.getXML(ajaxProcessor);
// }

// function ajaxProcessor(response) {
//   var answer = response.responseXML.documentElement.getAttribut("answer");
//   g.formsetValue("short_description", answer);
// }

// //Step 2 of 2 :  // Write the server side script
// var ServiceNow201GlideAjax = Class.create();
// ServiceNow201GlideAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {
//   replaceNewline: function(someText) {
//     someText = someText.split("\n").join("\\r");
//     return someText;
//   }
// });
