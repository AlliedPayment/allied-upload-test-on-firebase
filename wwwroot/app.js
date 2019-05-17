var App = (function($) {
  var btn;

  function sendPostRequest() {
    $.ajax({
      type: 'POST',
      url: 'https://us-central1-allied-upload-test.cloudfunctions.net/upload',
      success: function(response) {
        console.log({ response });
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log({ xhr, ajaxOptions, thrownError });
      }
    });
  }

  function init() {
    btn = document.getElementById('postBtn');
    btn.addEventListener('click', sendPostRequest);
  }

  return {
    init: init
  };
})(jQuery);

App.init();
