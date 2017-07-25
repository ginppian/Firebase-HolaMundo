(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjE9Cr6iuDbG8x57_CcJ-9WDcheYmV62Q",
    authDomain: "mapas-50514.firebaseapp.com",
    databaseURL: "https://mapas-50514.firebaseio.com",
    projectId: "mapas-50514",
    storageBucket: "mapas-50514.appspot.com",
    messagingSenderId: "65462666897"
  };
  firebase.initializeApp(config);



  const preObject = document.getElementById('object');

  // Create references

  const dbRefObject = firebase.database().ref().child('object');

  dbRefObject.on('value', snap =>{

    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });


}());