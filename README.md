# GDPR.js

GDPR.js is a lightweight JavaScript library for handling those pesky GDPR rules. It is written in pure-JavaScript with no dependencies.

We understand that many US companies are scared S*#$!@-less of GDPR and so we figured we would make it simple for you. Just download the JavaScript, put together some CSS and BOOM, you are all set.

Our inspiration came from some of our favorite Colorado craft brewery websites. You know those websites that you aren't allowed to visit unless you are 21. Here's one of our favorites:

[https://www.averybrewing.com](https://www.averybrewing.com)

These guys make it simple. Just ask a simple question and then let them enter. We figured, why not do the same for GDPR. And so we did. 

Enjoy!


## Download and Installation

Follow these steps to get started:

1. Download the library from https://raw.githubusercontent.com/inversoft/gdpr.js/master/gdpr.js
2. Install it into your project
3. Download our example CSS from https://raw.githubusercontent.com/inversoft/gdpr.js/master/gdpr.css
4. Install it into your project and tweak it however you want

Next, you'll need to add some HTML that defines your popup. Here's an example:

```html
<div class="gdpr-modal" id="gdpr-popup">
  <p>
    Are you an EU citizen or currently inside the EU?
  </p>
  <a href="#" class="yes-button">Yes</a>
  <a href="#" class="no-button">No</a>
</div>
```

Finally, hook up the HTML element to our handy-dandy GDPR JavaScript object like this (this code is in pure-JavaScript so you'll need to translate if you are using a library such as JQuery):

```JavaScript
document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('gdpr-popup');
  new GDPR(element, 'eu.html');
}, false);
```

That's it!

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/inversoft/gdpr.js/issues) here on GitHub.

## About

This library was written by [Brian Pontarelli](https://www.linkedin.com/in/voidmain/) and the [Inversoft team](https://www.inversoft.com). Our [Passport product](https://www.inversoft.com/products/identity-user-management) is a GDPR compliant Customer Identity and Access Management platform (CIAM). If you are looking for a company that can help you with GDPR or provides awesome software, check us out.

## Copyright and License

Copyright 2018 Inversoft Inc. Code released under the [Apache 2](https://github.com/inversoft/gdpr.js/blob/master/LICENSE) license.
