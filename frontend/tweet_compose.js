const APIUtil = require('./api_util');

class TweetCompose {
  constructor(el) {
    this.$form = $(el);
    this.$submit = $('#submit-button');
    this.handleCount();
    this.handleSubmit();
  }

  handleSubmit() {
    this.$form.on('submit', e => {
      e.preventDefault();

      const formData = $(e.currentTarget).serializeJSON();

      APIUtil.createTweet(formData)
        .then(this.handleSuccess.bind(this));
    });
  }

  clearInput() {
    $('#tweet-content').val("");
    $('#tweet-mentions').children().each((idx, el) => {
      $(el).removeProp("selected");
    });
  }

  handleCount() {
    const $content = $('#tweet-content');
    $content.on('input', e => {
      e.preventDefault();

      $('strong.chars-left').each((idx, el) => {
        // $(el).empty();
        $(el).text(`${140 - $content.val().length}`);
      });
    });
  }

  handleSuccess(res) {
    this.clearInput();
  }
}

module.exports = TweetCompose;
