const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose');

$(() => {
  const $search = $('nav.users-search').each((ind, el) => {
    new UsersSearch(el);
  });

  const $buttons = $('button.follow-toggle').each((ind, el) => {
    new FollowToggle(el);
  });

  const $newTweet = $('form.tweet-compose').each((ind, el) => {
    new TweetCompose(el);
  });
});
