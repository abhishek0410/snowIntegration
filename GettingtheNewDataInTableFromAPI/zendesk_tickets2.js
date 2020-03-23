//The zendesk_tickets1.js was the first attempt  to get Zendesk tickets on ServiceNow . Here is anohter attempt , to do
//the same , this time with improvement in columns and  values .
try {
  var r = new sn_ws.RESTMessageV2("test2", "Default GET");
  var response = r.execute();
  var responseBody = response.getBody();
  var httpStatus = response.getStatusCode();

  gs.print(responseBody);

  var parser = new JSONParser(); //This has been seperately added by me
  var parsedResponse = parser.parse(responseBody); //This has been seperately added by me

  //Add rows to ServiceNow table :
  var tb_1 = new GlideRecord("u_tickets_zendesks_2");

  tb_1.newRecord();

  for (i = 0; i < parsedResponse.tickets.length; i++) {
    var org_id = parsedResponse.tickets[i].organization_id;

    var channel = parsedResponse.tickets[i].via.channel;
    var created = parsedResponse.tickets[i].created_at;
    var requester = parsedResponse.tickets[i].via.source.from.address;
    var status = parsedResponse.tickets[i].status;
    var subject = parsedResponse.tickets[i].subject;
    var ticketID = parsedResponse.tickets[i].id;

    var gdt = new GlideDateTime(created);

    tb_1.u_channel = channel;
    tb_1.u_created = gdt;
    tb_1.u_requester = requester;
    tb_1.u_status = status;
    tb_1.u_subject = subject;
    tb_1.u_ticket_id = ticketID;

    tb_1.insert();
  }

  //gs.print(parsedResponse.tickets[0].url); //This has been seperately added by me
} catch (ex) {
  var message = ex.message;
}
