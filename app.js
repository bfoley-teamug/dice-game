  
$("#higher").hide();
$("#lower").hide();
$("#reload").hide();

$("#dice_rolledAone").hide();
$("#dice_rolledAtwo").hide();
$("#dice_rolledAthree").hide();
$("#dice_rolledAfour").hide();
$("#dice_rolledAfive").hide();
$("#dice_rolledAsix").hide();

$("#dice_rolledBone").hide();
$("#dice_rolledBtwo").hide();
$("#dice_rolledBthree").hide();
$("#dice_rolledBfour").hide();
$("#dice_rolledBfive").hide();
$("#dice_rolledBsix").hide();

$("#dice_rolledCone").hide();
$("#dice_rolledCtwo").hide();
$("#dice_rolledCthree").hide();
$("#dice_rolledCfour").hide();
$("#dice_rolledCfive").hide();
$("#dice_rolledCsix").hide();

$("#dice_rolledDone").hide();
$("#dice_rolledDtwo").hide();
$("#dice_rolledDthree").hide();
$("#dice_rolledDfour").hide();
$("#dice_rolledDfive").hide(); 
$("#dice_rolledDsix").hide();


$(document).ready(function() {


$("#firstRoll").click(function() {
    const rollA = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    const rollB = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    const totalRoll = rollA + rollB; 
    
    console.log(rollA + rollB);  
  
    if (rollA === 1) {
    $("#dice_rolledAone").fadeIn(); 
  } else if (rollA === 2) {
     $("#dice_rolledAtwo").fadeIn(); 
  } else if (rollA === 3) {
     $("#dice_rolledAthree").fadeIn(); 
  } else if (rollA === 4) {
     $("#dice_rolledAfour").fadeIn(); 
  } else if (rollA === 5) {
     $("#dice_rolledAfive").fadeIn(); 
  } else if (rollA === 6) {
     $("#dice_rolledAsix").fadeIn(); 
  }
  
     if (rollB === 1) {
    $("#dice_rolledBone").fadeIn(); 
  } else if (rollB === 2) {
     $("#dice_rolledBtwo").fadeIn(); 
  } else if (rollB === 3) {
     $("#dice_rolledBthree").fadeIn(); 
  } else if (rollB === 4) {
     $("#dice_rolledBfour").fadeIn(); 
  } else if (rollB === 5) {
     $("#dice_rolledBfive").fadeIn(); 
  } else if (rollB === 6) {
     $("#dice_rolledBsix").fadeIn();  
  }
  
    
    const p = document.getElementById('firstText');
   
    p.innerHTML = "<h3>The computer rolled a <span class='dice'>" + rollA + "</span> and a <span class='dice'>" + rollB + "</span>. Do you think the next roll will be higher or lower than a <span class='dice'>" + totalRoll + "</span>?</h3>" 
   
    $("#higher").fadeIn();
    $("#lower").fadeIn();
  
 
 
 
$("#higher").click(function() {
    const rollC = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    const rollD = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    const totalRollB = rollC + rollD; 
    
    console.log(rollC + rollD);
  
   if (rollC === 1) {
    $("#dice_rolledCone").fadeIn(); 
  } else if (rollC === 2) {
     $("#dice_rolledCtwo").fadeIn(); 
  } else if (rollC === 3) {
     $("#dice_rolledCthree").fadeIn(); 
  } else if (rollC === 4) {
     $("#dice_rolledCfour").fadeIn(); 
  } else if (rollC === 5) {
     $("#dice_rolledCfive").fadeIn(); 
  } else if (rollC === 6) {
     $("#dice_rolledCsix").fadeIn();  
  }
  
   if (rollD === 1) {
    $("#dice_rolledDone").fadeIn(); 
  } else if (rollD === 2) {
     $("#dice_rolledDtwo").fadeIn(); 
  } else if (rollD === 3) {
     $("#dice_rolledDthree").fadeIn(); 
  } else if (rollD === 4) {
     $("#dice_rolledDfour").fadeIn(); 
  } else if (rollD === 5) {
     $("#dice_rolledDfive").fadeIn(); 
  } else if (rollD === 6) {
     $("#dice_rolledDsix").fadeIn();  
  }
 
    const p2 = document.getElementById('secondText');
    p2.innerHTML = "<h3>The computer rolled a <span class='dice'>" + rollC + "</span> and a <span class='dice'>" + rollD + "</span> for a <span class='dice'>" + totalRollB +"</span>.</h3>" 
    
     if (totalRoll > totalRollB) {
       console.log("Ya lost!");
       p2.innerHTML += "<h3>You <span class='lose'>lose</span>!</h3>"    
      } else if (totalRoll === totalRollB) { 
       p2.innerHTML += "<h3>Push!</h3>"
      } else {
       console.log("Ya won!");   
       p2.innerHTML += "<h3>You <span class='win'>win</span>!</h3>" 
      }  
  
  $("#reload").fadeIn("slow"); 
  $('#reload').click(function() {
    location.reload();
});
});

                   
$("#lower").click(function() {
  const rollC = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    const rollD = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    const totalRollB = rollC + rollD; 
    
    console.log(rollC + rollD);
  
  if (rollC === 1) {
    $("#dice_rolledCone").fadeIn(); 
  } else if (rollC === 2) {
     $("#dice_rolledCtwo").fadeIn(); 
  } else if (rollC === 3) {
     $("#dice_rolledCthree").fadeIn(); 
  } else if (rollC === 4) {
     $("#dice_rolledCfour").fadeIn(); 
  } else if (rollC === 5) {
     $("#dice_rolledCfive").fadeIn(); 
  } else if (rollC === 6) {
     $("#dice_rolledCsix").fadeIn();  
  }
  
   if (rollD === 1) {
    $("#dice_rolledDone").fadeIn(); 
  } else if (rollD === 2) {
     $("#dice_rolledDtwo").fadeIn(); 
  } else if (rollD === 3) {
     $("#dice_rolledDthree").fadeIn(); 
  } else if (rollD === 4) {
     $("#dice_rolledDfour").fadeIn(); 
  } else if (rollD === 5) {
     $("#dice_rolledDfive").fadeIn(); 
  } else if (rollD === 6) {
     $("#dice_rolledDsix").fadeIn();  
  } 
  
    const p2 = document.getElementById('secondText');
    p2.innerHTML = "<h3>The computer rolled a <span class='dice'>" + rollC + "</span> and a <span class='dice'>" + rollD + "</span> for a total of <span class='dice'>" + totalRollB +"</span>.</h3>"  
    
    if (totalRoll > totalRollB) {
       console.log("Ya won!");
       p2.innerHTML += "<h3>You <span class='win'>win</span>!</h3>"
    } else if (totalRoll === totalRollB) { 
       p2.innerHTML += "<h3>Push!</h3>"
      } else { 
       console.log("Ya lost!"); 
       p2.innerHTML += "<h3>You <span class='lose'>lose</span>!</h3>"
    }
  
   $("#reload").fadeIn(2000);  
   $('#reload').click(function() {
    location.reload();
   });
  });      
 }); 
}); 
