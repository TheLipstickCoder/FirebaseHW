$(document).ready(function(){
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAtFML-hmDzKdbUixONZz64hYES1ISVILE",
    authDomain: "jan-16.firebaseapp.com",
    databaseURL: "https://jan-16.firebaseio.com",
    projectId: "jan-16",
    storageBucket: "jan-16.appspot.com",
    messagingSenderId: "448032812603"
  };
  firebase.initializeApp(config);
  
  var dataRef = firebase.database();

  var trainName = $('#trainName').val().trim();
  var destination = $('#destination').val().trim();
  var firstTime = $('#firstTime').val().trim();
  var frequency = $('#frequency').val().trim();

  $('#addTrain').on('click', function(){
    var 

  });

});