import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    signInViaFacebook() {
      console.log("Received click");
      this.sendAction("click");
    },
    buttonClicked() {
      this.sendAction('action');
    }
  }
});
