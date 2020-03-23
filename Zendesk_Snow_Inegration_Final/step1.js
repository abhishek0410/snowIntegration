try {
  //Calling an External API

  for (page = 1; page < 67; page++) {
    var request = new sn_ws.RESTMessageV2();
    var url = "https://delvhelp.zendesk.com/api/v2/tickets.json?" + page;
    request.setEndpoint(url);
    request.setHttpMethod("get");
    request.setBasicAuth("delv", "delv");
    request.setRequestHeader(
      "authorization",
      "Basic cHJvbXB0by54cmF5QGRlbHYuY29tOkRlbHZpbmcxMjMhMjAxOQ=="
    );

    var response = request.execute();
    var responseBody = response.getBody();

    //gs.log(response.getBody());

    var parser = new JSONParser(); //This has been seperately added by me
    var parsedResponse = parser.parse(responseBody); //This has been seperately added by me

    gs.log(parsedResponse);

    //Add rows to ServiceNow table :
    var tb_1 = new GlideRecord("u_tickets_zendesk_1");

    tb_1.newRecord();
    gs.log("We are here");

    for (i = 0; i < parsedResponse.tickets.length; i++) {
      var org_id = parsedResponse.tickets[i].organization_id;

      var ticketID = parsedResponse.tickets[i].id;
      var channel = parsedResponse.tickets[i].via.channel;
      var created = parsedResponse.tickets[i].created_at;
      var requester = parsedResponse.tickets[i].via.source.from.address;
      var status = parsedResponse.tickets[i].status;
      var subject = parsedResponse.tickets[i].subject;

      var organization_id = parsedResponse.tickets[i].organization_id;
      var priority = parsedResponse.tickets[i].priority;
      var assigned_to = parsedResponse.tickets[i].via.source.to.name;
      var updated = parsedResponse.tickets[i].updated_at;

      var gdt_created = new GlideDateTime(created);
      var gdt_updated = new GlideDateTime(updated);

      tb_1.case = ticketID;
      tb_1.short_description = subject;
      //tb_1.action_status = No idea what action stauts is
      tb_1.contact = requester;
      tb_1.account = organization_id;
      tb_1.channel = channel;
      tb_1.state = status;
      tb_1.priority = priority;
      tb_1.assigned_to = assigned_to;
      tb_1.updated = gdt_updated;

      tb_1.insert();
    }
  }

  //gs.print(parsedResponse.tickets[0].url); //This has been seperately added by me
} catch (ex) {
  var message = ex.message;
}
