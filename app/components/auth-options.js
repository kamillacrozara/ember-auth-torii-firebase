import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    signInViaFacebook() {
      console.log("Sending action up");
      this.sendAction();
    },
    buttonClicked(param) {
      this.sendAction('action', param);
    }
  }
});
