# Images-preview

Images preview component for web pages on touch device.

Consider use [imagebox](https://github.com/chemzqm/imagebox) for browser images
on desktop browsers.

Visit [demo](https://chemzqm.github.io/images-preview/) with your phone

![](http://7xrnd0.com1.z0.glb.clouddn.com/vora58fa3i)

It's already used in production at [jiangwoo](http://www.jiangwoo.com/products/304)

The standalone file could be ~12kb, if you use webpack and reuse components like
[tween](https://github.com/component/tween), the increased file size could be
much smaller.

## Features

* Swipe, pinchzoom and scroll (when necessary) event support.
* Tap to show and hide.
* Scale in and out current image with animation.
* Min & max zoom limitation.
* Src convert and loading effect for display original image.

## Installation

    npm install images-preview -S

Or use standalone file [preview.js](https://github.com/chemzqm/images-preview/blob/master/preview.js)

## Usage

Include [style.css](https://raw.githubusercontent.com/chemzqm/images-preview/master/src/style.css) to your page.

For webpack user:

``` js
import ImagePreview from 'image-preview'
let imgs = document.querySelectorAll('img')
new ImagePreview(imgs)
```

For standalone file user:

use `window.ImagePreview` instead.

## Events

* `show` emitted on container shown.
* `hide` emitted on container hide.
* `active` emitted with `index` on active item change.

## API

### ImagePreview(imgs, [option])

Constructor for ImagePreview, when tap event is fired on one of `imgs`, a
preview container is shown for user to swipe and/or pinchzoom.

* `imgs` is original images collection.
* `option` optional options.
* `option.convert` a function used to return orignal image url from `currentSrc` of current image.
* `option.bind` not bind tap event when === `false`

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
