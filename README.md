lem_counter
-------

### Demo

[https://lemehovskiy.github.io/lem-counter/](https://lemehovskiy.github.io/lem-counter/)

### Package Managers

```sh
# NPM
npm install lem_counter
```

### Installation

#### Include js

```html
<script src="TweenLite.min.js"></script>
<script src="jquery.min.js"></script>
<script src="lem_counter.js"></script>
```

#### Set HTML

```html
<div class="counter">
    0
</div>
```

#### Call the plugin

```html
<script type="text/javascript">
    $('.counter').lemCounter({
        value_to: 200
    });
</script>
```

#### In result

```html
<html>
  <head>
  <title>My website</title>
  </head>
  <body>

  <div class="counter">
      0
  </div>

  <script src="TweenLite.min.js"></script>
  <script src="jquery.min.js"></script>
  <script src="lem_counter.js"></script>

  <script type="text/javascript">
      $('.counter').lemCounter({
          value_to: 200
      });
  </script>

  </body>
</html>
```

### Data Attribute Settings

In lemCounter you can add settings using the data-lem-counter attribute. You still need to call
$(element).lemCounter()
to initialize lemCounter on the element.

Example:

```html
<div class="counter"
     data-lem-counter='{"value_from": 100, "value_to": 500}'>
</div>
```


### Settings

Option | Type | Default
--- | --- | ---
value_from | int | 0
value_to | int | 0
locale | bool/string | false
value_to_from_content | bool | false
animate_duration | int | 2

### Browser support

* Chrome
* Firefox
* Opera
* IE10/11


### Dependencies

* jQuery 1.7
* Gsap