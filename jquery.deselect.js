/** To Ensure body is not selected during boxy dragging, for example.
    * Culled from various sources:
        * https://github.com/mathiasbynens/jquery-noselect/blob/master/jquery.noselect.js
        * https://developer.mozilla.org/en-US/docs/CSS/user-select
**/
$.fn.disableSelection = function() {
    'use strict';
    var none = 'none';

    return this.css({
        'MozUserSelect': none,
        'msUserSelect': none,
        'webkitUserSelect': none,
        'userSelect': none
    });
};

$.fn.enableSelection = function() {
    'use strict';
    var all = 'all';

    return this.css({
        'MozUserSelect': all,
        'msUserSelect': all,
        'webkitUserSelect': all,
        'userSelect': all
    });
};

