/*
Replacing New Line with Carriage Return . 
This is not as simple as it sounds . In vanilla javascript , it would have been very easy infact we have succeefully tried and
tested various ways . But in SNOW it works differently and i dont know why . Here is the code that will achive the following : 

string subj1 = "Hello\nWorld";
After the code is run , we will have something like : 
subj1 = "Hello
             World"
*/

var tb_1 = new GlideRecord("u_tickets_zendesk");
tb_1.addQuery("u_requester", "test");
tb_1.query();

while (tb_1.next()) {
  var temp3 = tb_1.getValue("u_subject").toString();
  temp3 = temp3.split("\\n");
  var str1 = "";
  for (i = 0; i < temp3.length; i++) {
    if (i == 0) {
      str1 = temp3[i];
    } else {
      str1 = str1 + "\n" + temp3[i];
    }
  }
  tb_1.u_subject = str1;
  tb_1.update();

  gs.print(str1);
}
