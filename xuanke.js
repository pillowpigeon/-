while (1){
function a(){
  var allInputs=window.frames["frameElement"].contentDocument.getElementsByTagName(
"input")
  for (var i=0;i<allInputs.length;i++){
    if (allInputs[i].type==='checkbox')
      allInputs[i].checked=true;
    if (allInputs[i].value==="  提交  ")
      var tmp=i;
  }
  allInputs[tmp].click();
}
var i=0;
a();
console.log(i++);
wait(1000);

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
}
