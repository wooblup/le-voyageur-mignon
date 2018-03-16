$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyCsqi-0suq2kBSJXqVbdF6TO6FtlsR4DZ0",
    authDomain: "le-voyageur-mignon.firebaseapp.com",
    databaseURL: "https://le-voyageur-mignon.firebaseio.com",
    projectId: "le-voyageur-mignon",
    storageBucket: "",
    messagingSenderId: "360212086199"
  }
  firebase.initializeApp(config)

  /* Firebase */
  var database = firebase.database();

  $('#subscribe-form').submit(function() {

    // Get email from form
    var email = $('#email').val();

    // Confirm email is working
    console.log(email);

    // Fetch a key for the new record
    var id = database.ref().child('emails').push().key;

    // Confirm a key is retrieved
    console.log(id);

    // Add new comment record
    database.ref('emails/' + id).set({
      email: email
    });

    $('#email').val('');

    // Prevent the default form submission
    return false;

  });

});
