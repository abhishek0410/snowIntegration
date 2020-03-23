/*We are going to talk here about getting the new data from the API in a table .
How do we do that :

Firts test it is working :

The external API which you called needs to be working :
See the "CallingExternalAPI" folder to see how to call an external API . After you see the API is working , click on the "Preview API" usage and copy the usage (already been done below)--> Next open a "BackGround Script"--> And paste the usage here :
*/
try {
  var r = new sn_ws.RESTMessageV2("test2", "Default GET");
  var response = r.execute();
  var responseBody = response.getBody();
  var httpStatus = response.getStatusCode();

  gs.print(responseBody);

  var parser = new JSONParser(); //This has been seperately added by me
  var parsedResponse = parser.parse(responseBody); //This has been seperately added by me

  //Add rows to ServiceNow table :
  var tb_1 = new GlideRecord("u_tickets_zendesk");

  tb_1.newRecord();

  for (i = 0; i < parsedResponse.tickets.length; i++) {
    var org_id = parsedResponse.tickets[i].organization_id;

    var channel = parsedResponse.tickets[i].via.channel;
    var created = parsedResponse.tickets[i].via.created_at;
    var requester = parsedResponse.tickets[i].via.source.from.address;
    var status = parsedResponse.tickets[i].status;
    var subject = parsedResponse.tickets[i].subject;

    tb_1.u_category = org_id;
    tb_1.u_channel = channel;
    tb_1.u_created = created;
    tb_1.u_requester = requester;
    tb_1.u_status = status;
    tb_1.u_subject = subject;

    tb_1.insert();
  }

  //gs.print(parsedResponse.tickets[0].url); //This has been seperately added by me
} catch (ex) {
  var message = ex.message;
}
