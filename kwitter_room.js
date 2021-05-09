
var firebaseConfig = {
      apiKey: "AIzaSyAY_VlCD_HMjT4Iv0rht4Xdqstaa-Ugj7g",
      authDomain: "class-93-fa5c5.firebaseapp.com",
      databaseURL: "https://class-93-fa5c5-default-rtdb.firebaseio.com",
      projectId: "class-93-fa5c5",
      storageBucket: "class-93-fa5c5.appspot.com",
      messagingSenderId: "740152072735",
      appId: "1:740152072735:web:7f28967e7f954c269b132a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " +user_name + "!";
    

function addRoom(){
      room_name = document.getElementById("room_name").nodeValue;
       firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
      }
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this .id)' >#"+ Room_names +"</div>hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }
