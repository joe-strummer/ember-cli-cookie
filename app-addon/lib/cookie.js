import Em from 'ember';

export default Em.Object.extend({
  setCookie: function(key, value) {
    return new Em.RSVP.Promise(function(resolve, reject) {
      try {
        Em.$.cookie(key, value);
        Em.run(null, resolve);
      } catch(e) {
        Em.run(null, reject, e);
      }
    });
  },

  getCookie: function(key) {
    return Em.$.cookie(key);
  }
});
