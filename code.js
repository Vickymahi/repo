function ADD_MENTEE()
{
  var rollno=prompt("ENTER THE ROLLNO","");
  var num=/^[0-9]+$/;
  
  if(rollno.match(num))
  {

  var p=document.createElement("DIV");
 p.name="mydiv";
 p.title=rollno;
 p.style="BORDER:2PX SOLID BLACK";
 p.style.textAlign="CENTER";
 p.id=rollno;
 p.style.backgroundColor="#696969";
 p.style.paddingTop="20px";
 p.style.paddingBottom="15px";
 p.style.paddingRight="15px";
 p.style.paddingLeft="15px";
 p.style.boxShadow="8px 15px #778899";
 p.style.width="85%";
 p.style.borderRadius="40px 20px";

 p.innerHTML="Rollno :";
 var t2=document.createTextNode( rollno);
 p.appendChild(t2);
 var br1=document.createElement("BR");
 p.appendChild(br1);
 var br2=document.createElement("BR");
 p.appendChild(br2);

 
 var t3=document.createTextNode("Name: ");
 p.appendChild(t3);
 var tf1=document.createElement("input");
 tf1.readOnly=true;
 tf1.type="text";
 p.appendChild(tf1);
 var br3=document.createElement("BR");
 p.appendChild(br3);
 var br4=document.createElement("BR");
 p.appendChild(br4);



 var t6=document.createTextNode("Comment ");
 p.appendChild(t6);
 var tf3=document.createElement("input");
 tf3.type="text";
 tf3.readOnly=true;
 p.appendChild(tf3);
 var br7=document.createElement("BR");
 p.appendChild(br7);
 var br13=document.createElement("BR");
 p.appendChild(br13);


 var t11=document.createTextNode("RATING ");
 p.appendChild(t11);

 var slider=document.createElement("input");
 slider.type="range";
 slider.class="slider";
 slider.value="5";
 slider.max="10";
 slider.min="1";
 slider.disabled=true;
 
 
 p.appendChild(slider);
 
 
 
 var span=document.createElement("span");
 span.innerHTML=slider.value;
 
 slider.oninput=function(){
 span.innerHTML=this.value;
 }
 
 p.appendChild(span);

var br7=document.createElement("BR");
 p.appendChild(br7);
var br8=document.createElement("BR");
 p.appendChild(br8);



 var edit=document.createElement("input");
 edit.type="button";
 edit.value="Edit";
 edit.id="button2";
 edit.addEventListener("click",function(){
   edit_profile(rollno);
  }
  );
 p.appendChild(edit);


 var save=document.createElement("input");
 save.type="button";
 save.value="Save";
 save.id="button3";
 save.addEventListener("click",function(){
   save_changes(rollno);
  }
  );
 p.appendChild(save);


 var rem=document.createElement("input");
 rem.type="button";
 rem.value="Remove this profile";
 rem.id="button4";
 rem.addEventListener("click",function(){
   remove(rollno);
  }
  );
 p.appendChild(rem);


var br9=document.createElement("BR");
var br10=document.createElement("BR");

 document.body.appendChild(br9);

 document.body.appendChild(br10);
 

 document.body.appendChild(p);
 
}

  else
 {
   alert("pls enter a valid rollno");
 }
}




function edit_profile(roll)
{
 
 var p=document.getElementById(roll);
 var text=p.querySelectorAll('input[type="text"]');
 var x;
 for(x=0;x<text.length;x++){
  text[x].readOnly=false; 
  }
 var slider=p.querySelector('input[type="range"]');
 slider.disabled=false;
}



function save_changes(roll)
{
 var p=document.getElementById(roll);
 var text=p.querySelectorAll('input[type="text"]');
 var x;
 for(x=0;x<text.length;x++){
  text[x].readOnly=true; 
 }
 var slider=p.querySelector('input[type="range"]');
 slider.disabled=true;
 
 
 alert("Changes are saved successfully");
}

function remove(rollno)
{
  if(confirm("Do you want to remove this profile")){
  var div=document.getElementById(rollno);
 
  div.parentNode.removeChild(div);
 
}
}





