/**
 * Created by AK Mhazo on 12/6/2016.
 */
(function($, me){

    me = me || {};
    var _this = {};

    me.createImagezone = function(parent){

        var $parent = $(parent);
        $parent.addClass('piccolo');

        //Remove all events on parent
        $parent.off();
        $parent.empty();

        //Card DIV
        var $card = $('<div/>', {
            "class": "mdl-card mdl-shadow--2dp"
        });

        //Card content
        var $card_content = $('<canvas/>', {
            "class": "mdl-card__title mdl-card--expand"
        });

        var $crop = $('<a/>',{
            "class": "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab material-icons piccolo-button"
        }).append($('<i/>', {
            "class": "material-icons"
        }).text('crop')).onclick(function(evt){
            me.raise('oncropstart', {});
        });

        var $rotate_right = $('<a/>',{
            "class": "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab material-icons piccolo-button"
        }).append($('<i/>', {
            "class": "material-icons"
        }).text('rotate_right')).onclick(function(evt){
            me.raise('onrotatestart', {});
        });

        var $clear = $('<a/>',{
            "class": "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab material-icons piccolo-button"
        }).append($('<i/>', {
            "class": "material-icons"
        }).text('clear')).onclick(function(evt){
            me.raise('onreset', {});
        });

        //Card Actions
        var $card_actions = $('<div/>',{
            "class": "mdl-card__actions mdl-card--border"
        }).append($crop)
            .append($rotate_right)
            .append($clear);


        //Add card title to card content
        //$card_content.append($card_title);

        //Add card content, summary text, and actions
        //to material card
        $card.append($card_content)
            .append($card_actions);

        //Add material card to parent
        //container
        $parent.append($card);

        return $card_content;

    }



}(jQuery, Piccolo));