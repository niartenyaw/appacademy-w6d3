const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.attr('data-user-id');
    this.followState = this.$el.attr('data-initial-follow-state');
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text('Follow!');
    } else if (this.followState === "followed") {
      this.$el.text('Unfollow!');
    }
  }

  handleClick() {
    this.$el.on('click', e => {
      e.preventDefault();

      if (this.followState === 'followed') {
        return APIUtil.unfollowUser(this.userId)
          .then(this.toggleFollowingState.bind(this))
          .then(this.toggleFollowState.bind(this), this.error);
      }
      else if (this.followState === 'unfollowed') {
        return APIUtil.followUser(this.userId)
          .then(this.toggleFollowingState.bind(this))
          .then(this.toggleFollowState.bind(this), this.error);
      }
    });
  }

  error(res) {
    console.log(res);
  }

  toggleFollowState() {
    if (this.followState === "unfollowed") {
      this.followState = "followed";
    } else if (this.followState === "followed") {
      this.followState = "unfollowed";
    }
    this.$el.removeProp('disabled');
    this.render();
  }

  toggleFollowingState() {
    console.log(this);
    console.log(this.$el);
    if (this.followState === "unfollowed") {
      this.$el.text('Following!');
    } else if (this.followState === "followed") {
      this.$el.text('Unfollowing!');
    }
    this.$el.prop('disabled', 'true');
  }
}

module.exports = FollowToggle;
