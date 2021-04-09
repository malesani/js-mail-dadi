/* chiedere mail */
var search = prompt ("inserire la tua mail")

console.log (search)

/* controlo mail */
var mails = [
  "alejandroMalesani@hotmail.com",
  "alejandro_malesani@hotmail.com", 
  "pablo@hotmail.com",
  "javier@hotmail.com",
  "ronald@hotmail.com",
]

var ok = false;

for (var i = 0; i < mails.length; i++){
  var mail = mails[i]
  console.log(i)
  if(mail === search){
    ok = true
  }
}

/* stampa */
if (ok == true){
  document.getElementById("mail-si-no").innerHTML=" La mail è registrata";
}else{
  document.getElementById("mail-si-no").innerHTML="la mail non è stata registrata";
}
