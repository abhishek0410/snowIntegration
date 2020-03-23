This folder contains the way to call an external API in serviceNow .

How it is achieved ?
STEP 1 : Create a new REST Message
So for illustration , one REST Message by the name "test1" has been created by me(after clicking submitting).
Now to make sure if the API call is been made successfully ,on the same page you should see a row with the columns :

Name -- HTTP method -- Endpoint
Default GET GET https://api.darksky.net/forecast/6d081...

Click on this row --> A new page will open , find the "Test" tab and click on it . And you will get the response .

STEP 2 :
To make use of the "response" we got above , we need to create a Client Script .
In this case a client script by the name "testing_REST_Message_1" has been created under the client Script . In this client script i was trying to create a table from the "response" obtained in STEP 1 . The contents of this client script is :
try {
var r = new sn_ws.RESTMessageV2('test1', 'Default GET');

//override authentication profile
//authentication type ='basic'/ 'oauth2'
//r.setAuthenticationProfile(authentication type, profile name);

//set a MID server name if one wants to run the message on MID
//r.setMIDServer('MY_MID_SERVER');

//if the message is configured to communicate through ECC queue, either
//by setting a MID server or calling executeAsync, one needs to set skip_sensor
//to true. Otherwise, one may get an intermittent error that the response body is null
//r.setEccParameter('skip_sensor', true);

var response = r.execute();
var responseBody = response.getBody();
var httpStatus = response.getStatusCode();
var gr = new GlideRecord('incident');

gr.get('3Da0e8dac32fbe00108eee877cf699b6b4')//your query or sys_id

gr.status = httpStatus;

gr.response = responseBody;

gr.update(); //Do an update or insert based on your need
console.log("How is it going");

}
catch(ex) {
var message = ex.message;
}

However i was not able to
