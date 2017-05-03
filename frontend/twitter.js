const FollowToggle = require('./follow_toggle');

$(() => {
  const $buttons = $('button.follow-toggle').each((ind, el) => {
    new FollowToggle(el);
  });
});
