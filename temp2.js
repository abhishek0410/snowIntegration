function onLoad() {
  var sdText = g_form.getValue("short_description");
  var someText = sdText
    .toString()
    .split("\n")
    .join("\\r");

  g_form.setValue("short_description", someText);
}
