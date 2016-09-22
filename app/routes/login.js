import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn() {
      console.log("Bubbled action on external route");

      /*this.get('session').open('facebook-oauth2').then(function () {
        this.transitionTo('protected');
      }, function (error) {
        this.set('error', 'Could not sign you in: ' + error.message);
      });*/
    }
  }
});
