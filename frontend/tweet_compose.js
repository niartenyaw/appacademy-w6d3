const APIUtil = require('./api_util');

class TweetCompose {
  constructor(el) {
    this.$form = $(el);
    this.$submit = $('#submit-button');
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

  handleSuccess(res) {
    this.clearInput();
  }
}

module.exports = TweetCompose;
