# handlebars-helper-strict-equal

A [Handlebars](http://handlebarsjs.com/) helper for strict equality comparison.

## Installation

Install using npm:

    $ npm install handlebars-helper-strict-equal

## Usage

**helpers.js**

Example helpers file that requires in Handlebars and registers the strict-equal
helper under the name "equal".

```js
var Handlebars = require('handlebars');

Handlebars.registerHelper('equal', require('handlebars-helper-strict-equal'));
```

**templates/example.handlebars**

Example template file that makes use of the strict-equal helper.

```
<nav>
  {{#equal pagerStyle "pager"}}
    <ul class="pager">
      <li><a href="#">Previous</a></li>
      <li><a href="#">Next</a></li>
    </ul>
  {{else}}
    <ul class="pagination">
      {{#each linkablePages}}
        <li {{#equal ../currentPage this}}class="active"{{/isEqual}}>
          <a href="#">{{this}}</a>
        </li>
      {{/each}}
    </ul>
  {{/equal}}
</nav>
```

## License

MIT
