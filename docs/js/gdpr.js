/**
 * GDPR JavaScript to help with those pesky rules. To use this object, simply pass in the element that is your modal
 * dialog for the GDPR question and it will handle the rest.
 *
 * @param {HTMLElement} element The modal dialog element.
 */
var GDPR = function(element, euURL) {
  this.element = element;
  this.euURL = euURL;

  // Check for existing answers
  var existingAnswer = this._loadAnswer();
  if (existingAnswer === null) {
    this._openModal();
  } else if (existingAnswer === 'yes') {
    this._redirect();
  }
};

GDPR.prototype = {
  _handleNoClick: function() {
    this._storeAnswer('no');
    this.element.style.display = 'none';
  },

  _handleYesClick: function() {
    this._storeAnswer('yes');
    this._redirect();
  },

  _loadAnswer: function() {
    return localStorage.getItem('gdpr-check');
  },

  _openModal: function() {
    console.debug('No answer');
    var yesButton = this.element.querySelector('.yes-button');
    if (yesButton === null) {
      throw 'GDPR modal dialog is missing an element with a class="yes-button"';
    }
    var noButton = this.element.querySelector('.no-button');
    if (noButton === null) {
      throw 'GDPR modal dialog is missing an element with a class="no-button"';
    }

    yesButton.addEventListener('click', this._handleYesClick.bind(this), false);
    noButton.addEventListener('click', this._handleNoClick.bind(this), false);
    this.element.style.display = 'block';
  },

  _redirect: function() {
    console.debug('They answered yes');
    window.location = this.euURL;
  },

  _storeAnswer: function(answer) {
    localStorage.setItem('gdpr-check', answer);
  }
};