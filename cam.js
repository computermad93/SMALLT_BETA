var app = {
    // SETTING UP THE CAM
    initialize: function() {
        this.bindEvents();
    },
    //  Event Listeners
    //
    // Bind any events that are required on startup.
    // INZELISING THE DEVICE READY FUNCTION.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    //  THIS = THE EVEN THAT IS NEEDED AND IS BEING CALLED
    //
    // 
    // CALLING APP.RECIVED FOR MAKINF THE DEVICE READY;'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // CHECKING AND ADDING THE DOM FOR THE EVENT RESEAVED
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
//TAKING THE APP AND DVICE TO THE CAM FUNCATION 
    takePicture: function() {
      navigator.camera.getPicture( function( imageURI ) {
        alert( imageURI );
      },
      function( message ) {
        alert( message );
      },
      {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
      });
    }
};
