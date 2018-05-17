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
 p.style.backgroundColor="#FFDEAD";


 var t1=document.createTextNode("ROLL NO :");
 p.appendChild(t1);
 var t2=document.createTextNode(rollno);
 p.appendChild(t2);
 var br1=document.createElement("BR");
 p.appendChild(br1);
 var br2=document.createElement("BR");
 p.appendChild(br2);

 var t3=document.createTextNode("NAME  :");
 p.appendChild(t3);
 var tf1=document.createElement("input");
 tf1.readOnly=true;
 tf1.type="text";
 p.appendChild(tf1);
 var br3=document.createElement("BR");
 p.appendChild(br3);
 var br4=document.createElement("BR");
 p.appendChild(br4);

 var t4=document.createTextNode("RATING ");
 p.appendChild(t4);
 var tf2=document.createElement("input");
 tf2.type="text";
 tf2.readOnly=true;
 p.appendChild(tf2);
 var br5=document.createElement("BR");
 p.appendChild(br5);
 var br6=document.createElement("BR");
 p.appendChild(br6);


 var t6=document.createTextNode("COMMENT ");
 p.appendChild(t6);
 var tf3=document.createElement("input");
 tf3.type="text";
 tf3.readOnly=true;
 p.appendChild(tf3);
 var br7=document.createElement("BR");
 p.appendChild(br7);

 

 document.body.appendChild(p);
 
}

  else
 {
   alert("pls enter a valid rollno");
 }
}




function EDIT_PROFILE()
{
 var roll=prompt("Enter the RollNumer of the profile you want to edit :","");
 
 var p=document.getElementById(roll);
 var arr=p.childNodes;
 ar1=arr[5];
 ar1.readOnly=false;
 ar2=arr[9];
 ar2.readOnly=false;
 ar3=arr[13];
 ar3.readOnly=false;
}



function SAVE_CHANGES()
{
 var tf=document.getElementsByTagName("input");
 
 for(var x=0;x<tf.length;x++)
 { 
  var ar1=tf[x];
  ar1.readOnly=true;

 }
 alert("Changes are saved successfully");
}

function REMOVE_PROFILE()
{
  var rollno=prompt("ENTER THE ROLLNO OF PROFILE YOU WANT TO REMOVE","");
  var div=document.getElementById(rollno);
 
  div.parentNode.removeChild(div);
  alert("Profile is removed successfully")

}





