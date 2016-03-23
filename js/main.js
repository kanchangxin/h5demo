require.config({
    baseUrl: "lib/",
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        "underscore": "underscore",
        "backbone": "backbone.min"
    }
});

require(['jquery', 'underscore'], function ($, _) {
    // some code here
    _.each([1, 2], alert);

});