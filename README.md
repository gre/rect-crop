rect-crop
===

Crop a dimension in a viewport: Compute a rectangle from a zoom ratio and a center point while preserving the dimension ratio.

The API
---

```javascript
var rect = rectCrop(zoom, center)(viewport, dimension)
```

`rectCrop` computes an absolute Rectangle from relative parameters:
- **`zoom`**: a value in range ]0,1] which describe the crop zoom ratio. 1 is the full dimension size.
- **`center`** *(default to [0.5, 0.5])*: a [w,h] array where w and h are value in range [0,1] describing the desired center of the crop bound.

second parameters:
- **`viewport`**: a object with width and height which is the viewport rectangle (e.g: you can give a Canvas).
- **`dimension`**: an object with width and height which is the rectangle dimension to be cropped on the viewport (e.g: you can give an Image).

The crop will ensure that dimension ratio is preserved.

Returns
---
a `[x, y, width, height]` rectangle describing the area to crop in pixels.

Example
---

The following creates cropping functions:

```javascript
rectCrop.largest == rectCrop(1) == rectCrop(1, [0.5, 0.5]) // The largest possible crop.
rectCrop(0.5) // A 2x zoomed crop
rectCrop(0.5, [0, 0.5]) // A 2x zoomed crop showing the left-middle part of a rectangle.
```

**Typical usage:**

```javascript
var cropHalfCenter = rectCrop(0.5);
var rect = cropHalfCenter(canvas, image);
ctx.drawImage.apply(ctx, [ image ].concat(rect).concat([ 0, 0, canvas.width, canvas.height ]));
```

**Other usage:**

```javascript
var rect = rectCrop(0.3, [0.2, 0.8])({width:800,height:600}, {width:4000,height:3000});
// rect == [ 200, 1950, 1200, 900 ]

var rect2 = rectCrop(0.1, [0, 0])({width:800,height:600}, {width:4000,height:3000});
// rect2 == [ -200, -150, 400, 300 ]
```

Note that this enable out of bounds crop.
If you want to do not crop out of bounds parts, use `rect-clamp`:

```javascript
rectClamped = rectClamp(rect2);
// rectClamped == [ 0, 0, 400, 300 ]
```


