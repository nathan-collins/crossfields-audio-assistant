Polymer({
  is: 'crossfields-audio-assistant',

  properties: {
    assistant: {
      type: String
    },

    text: {
      type: String,
      value: '',
      notify: true,
      observer: 'textChanged'
    },

    assistantText: {
      type: String,
      value: 'CAN I HELP?'
    },

    isActive: {
      type: Boolean,
      value: false
    },

    activeClass: {
      type: String,
      value: 'inactive',
      notify: true
    },

    isMobile: {
      type: Boolean,
      value: false
    }
  },

  ready: function() {
    this.computeCheckMobile();
  },

  textChanged: function(text) {
    if(this.isActive) {
      this.set('isActive', true);
    }
  },

  activateAssistant: function() {
    this.set('isActive', true);
    this.set('text', this.text);
    this.set('activeClass', 'active');
  },

  computeCheckMobile: function() {
    if(window.innerWidth <= 480) {
      this.set('isMobile', true);
    } else {
      this.set('isMobile', false);
    }
  },

  handleAssistantActivate: function() {
    if(this.isMobile) {
      this.$.assistantDialog.open();
    } else {
      this.activateAssistant();
    }
  }
});
