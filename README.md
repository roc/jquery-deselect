jquery-deselect
===============

A quick plugin to disable text (&amp; etc) selection in a cross-browser way. Use sparingly.

## Example Usage

```js

// Contrived pseudo example

var $body = $('body');
$('.myDraggablePopUpWindowOrSimilarUIElement').on('dragging',function(){
    $body.disableSelection();
}).on('finishedDragging',function(){
    $body.enableSelection();
});
```
