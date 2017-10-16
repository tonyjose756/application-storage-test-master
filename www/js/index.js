var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var key = "bottle"; var value = "clear"; window.localStorage.setItem(key, value);
var key = "phone"; var value = "black"; window.localStorage.setItem(key, value);
var key = "skin"; var value = "brown"; window.localStorage.setItem(key, value);
var key = "shirt"; var value = "blue"; window.localStorage.setItem(key, value);
var key = "paper"; var value = "white"; window.localStorage.setItem(key, value);

var chocbar= {"chocname":"bounty",
              "energy kj": "2036",      //declaring variable
              "energykcal": "487",
              "fat":"25.7",
              "carbohydrates":"58.9",
              "sugar":"48.2",
              "protein":"3.7",
              "salt":"0.25"            
             }

var chocbarstring = JSON.stringify(chocbar);       //turnign json into string

window.localStorage.setItem("chocname",chocbarstring); 

var getchocbar = window.localStorage.getItem("chocname");

var chocbarJSON = JSON.parse(getchocbar);   //convert text to javas object

alert(chocbarJSON.chocname);


document.addEventListener("deviceready", onDeviceReady, false);
	

//function load(){
 //  $("#launched").text("chocbar");
//}

var key = "bottle";
var value = window.localStorage.getItem(key);
alert (window.localStorage.length);

//alert (chocbar);
//$("#launched").text("protein");

//alert (key + ", " + value);
//$("#launched").text(key + ", " + value);
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
    $("#launched").text(key + ", " + value);
}


// device APIs are available
//
function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
}


function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
}
	

function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
}
