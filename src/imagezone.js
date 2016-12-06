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
        var $card = $('<canvas/>', {
            "class": "mdl-card mdl-shadow--2dp"
        });

        //Card Menu
        var $card_menu = $('<div/>',{
            "class": "mdl-card__menu"
        });

        $card_menu.append($('<button/>', {
            "class": "mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
        }).append($('<i/>',{
            "class": "material-icons"
        }).html('crop')));

        //Add card content, summary text, and actions
        //to material card
        $card.append($card_menu);

        //Add material card to parent
        //container
        $parent.append($card);

    }



}(jQuery, Piccolo));