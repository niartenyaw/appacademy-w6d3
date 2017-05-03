const APIUtil = require('./api_util');
const FollowToggle = require('./follow_toggle');

class UsersSearch {
  constructor() {
    this.$el = $('nav.users-search');
    this.$input = $('#search-bar');
    this.$ul = $('ul.users');
    this.handleInput();
  }

  handleInput() {
    this.$input.on('input', e => {
      e.preventDefault();

      APIUtil.searchUsers(this.$input.val(), this.updateList.bind(this));
    });
  }

  updateList(res) {
    console.log(res);
    this.$ul.empty();
    for (var i = 0; i < res.length; i++) {
      const $li = $('<li></li>');

      $li.html(`<a href="/users/${res[i].id}">${res[i].username}</a>`);

      $li.append(`<button type="button" data-user-id="${res[i].id}"
        data-initial-follow-state="${res[i].followed ? "followed" : "unfollowed"}"
        name="button" class="follow-toggle"></button>`);

      this.$ul.append($li);
    }

    const $buttons = $('button.follow-toggle').each((ind, el) => {
      new FollowToggle(el);
    });
  }

 }

module.exports = UsersSearch;
