//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDCYSL0q7LPnB-zisLlL_yapMP4lCfapG8",
      authDomain: "kwitter-7f420.firebaseapp.com",
      databaseURL: "https://kwitter-7f420-default-rtdb.firebaseio.com",
      projectId: "kwitter-7f420",
      storageBucket: "kwitter-7f420.appspot.com",
      messagingSenderId: "519497745596",
      appId: "1:519497745596:web:d1dd298d66b6c7a8b5fcb9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room_name : " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +  "</div><hr>";
      document.getElementById("output").innerHTML += row;
     });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}