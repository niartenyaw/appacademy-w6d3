const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(() => {
  const $search = $('nav.users-search').each((ind, el) => {
    new UsersSearch(el);
  });

  const $buttons = $('button.follow-toggle').each((ind, el) => {
    new FollowToggle(el);
  });
});
