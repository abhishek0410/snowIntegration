var tb_1 = new GlideRecord("u_tickets_zendesk");
tb_1.addQuery("u_requester", "test");
tb_1.query();

while (tb_1.next()) {
  var temp2 = "hello \n agaho \n ";
  \\\temp2
    .toString()
    .split("\n")
    .join("\\r");

  \\\tb_1.u_subject
    .toString()
    .split("\n")
    .join("\r");

  \\\tb_1.u_subject = "hahaha";

  \\\tb_1.update();

  gs.print(temp2);
}
