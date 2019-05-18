var App = (function($) {
  function sendPostRequestWithCors() {
    $.ajax({
      type: 'POST',
      url:
        'https://us-central1-allied-upload-test.cloudfunctions.net/testWithCors',
      crossDomain: true,
      success: function(response) {
        console.log({ response });
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log({ xhr, ajaxOptions, thrownError });
      }
    });
  }

  function sendPostRequestWithoutCors() {
    $.ajax({
      type: 'POST',
      url:
        'https://us-central1-allied-upload-test.cloudfunctions.net/testWithoutCors',
      crossDomain: true,
      success: function(response) {
        console.log({ response });
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log({ xhr, ajaxOptions, thrownError });
      }
    });
  }

  function init() {
    document
      .getElementById('postBtnCors')
      .addEventListener('click', sendPostRequestWithCors);

    document
      .getElementById('postBtnNoCors')
      .addEventListener('click', sendPostRequestWithoutCors);
  }

  return {
    init: init
  };
})(jQuery);

App.init();
