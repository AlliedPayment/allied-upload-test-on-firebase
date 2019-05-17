var App = function() {
  var btn;

  function sendPostRequest() {
    fetch('https://us-central1-allied-upload-test.cloudfunctions.net/upload', {
      method: 'POST'
    }).then(function(response) {
      console.log('response', response);
    });
  }

  function init() {
    btn = document.getElementById('postBtn');
    btn.addEventListener('click', sendPostRequest);
  }

  return {
    init: init
  };
};

App.init();
