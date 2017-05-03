const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: `POST`,
      dataType: 'json'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: `DELETE`,
      dataType: 'json'
    });
  },

  searchUsers(queryVal, s) {
    return $.ajax({
      url: '/users/search',
      dataType: 'json',
      data: {
        query: `${queryVal}`
      },
      success: s,
      error: () => {console.log("Error");}
    });
  }
};

module.exports = APIUtil;
