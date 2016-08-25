# Images-preview

Component for preview image(s) on touch device.

Consider use [imagebox](https://github.com/chemzqm/imagebox) for browser images
on desktop browsers.

Visit [demo](https://chemzqm.github.io/images-preview/) with your phone

![](http://www.jiangwoo.com/qrcode?url=https%3A%2F%2Fchemzqm.github.io%2Fimages-preview%2F)

## Installation

    npm install images-preview -S

Or use standalone file [preview.js](https://github.com/chemzqm/images-preview/blob/master/preview.js)

## Usage

Include [style.css](https://raw.githubusercontent.com/chemzqm/images-preview/master/src/style.css) to your page.

For webpack user:

``` js
var ImagePreview = require("image-preview")
var imgs = document.querySelectorAll('img')
new ImagePreview(imgs)
```

For standalone file user

use `window.ImagePreview` instead.

## Events

* `show` emitted on container shown.
* `hide` emitted on container hide.
* `active` emitted with `index` on active item change.

## API

### ImagePreview(imgs, [option])

Constructor for ImagePreview

* `imgs` is original images collection.
* `option.convert` used to return orignal image url from compressed image url
* `option.bind` not bind tap event when `false`

### show()
### hide()

Show/hide container.

### .active(img, [idx], [animate])

Active a specfic image

* `img` compressed image element.
* `idx` index of `img` in image list (allows active image from img outside initialized images).
* `animate` use animation if true.

### .unbind()

Unbind tap event.

## LICENSE

Copyright 2016 chemzqm@gmail.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
