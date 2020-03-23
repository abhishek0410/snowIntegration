function onLoad() {
  //Type appropriate comment here, and begin script below
  var sdText = g_form.getValue("short_description");
  jslog("Hello world , how is it going");
  var ga = new GlideAjax("test3_Abhi_server");
  ga.addParam("sysparm_name", "replaceNewLinewithCarriage");
  ga.addParam("sysparm_sdText", sdText);
  jslog("This message is from jslog().");
  ga.getXML(callback);
}

function callback(response) {
  var answer = response.responseXML.documentElement.getAttribute("answer");
  jslog("answer is : ", answer);
  g_form.setValue("short_description", answer);
}
