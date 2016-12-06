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
        }).text('crop'));

        var $rotate_right = $('<a/>',{
            "class": "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab material-icons piccolo-button"
        }).append($('<i/>', {
            "class": "material-icons"
        }).text('rotate_right'));

        var $clear = $('<a/>',{
            "class": "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab material-icons piccolo-button"
        }).append($('<i/>', {
            "class": "material-icons"
        }).text('clear'));

        var $done = $('<a/>',{
            "class": "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab material-icons piccolo-button"
        }).append($('<i/>', {
            "class": "material-icons"
        }).text('done'));

        var $cancel = $('<a/>',{
            "class": "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab material-icons piccolo-button"
        }).append($('<i/>', {
            "class": "material-icons"
        }).text('cancel'));

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


        var clear_click_handler = function(evt){

            me.raise('onreset', {});

        };

        
        var rotate_click_handler = function(evt){

            me.raise('onrotatestart', {});
            $done.off(); $cancel.off();

            $done.click(function(evt){

                me.raise('onrotateend', {});
                reset();

            });

            $cancel.click(function(evt){

                me.raise('onrotatecancel', {});
                reset();

            });

            $card_actions.empty();
            $card_actions.append($('<span/>', { "class": "piccolo-button"}).text('Rotate image'))
                .append($done)
                .append($cancel);

        };

        
        var crop_click_handler = function(evt){

            me.raise('oncropstart', {});
            $done.off(); $cancel.off();

            $done.click(function(evt){

                me.raise('oncropend', {});
                reset();

            });

            $cancel.click(function(evt){

                me.raise('oncropcancel', {});
                reset();

            });

            $card_actions.empty();
            $card_actions.append($('<span/>', { "class": "piccolo-button"}).text('Crop image'))
                .append($done)
                .append($cancel);

        };


        //Clear click handler
        $clear.click(clear_click_handler);
        //Rotate click handler
        $rotate_right.click(rotate_click_handler);
        //Crop click handler
        $crop.click(crop_click_handler);


        //Reset actions
        function reset(){

            $card_actions.empty();

            //Clear click handler
            $clear.click(clear_click_handler);
            //Rotate click handler
            $rotate_right.click(rotate_click_handler);
            //Crop click handler
            $crop.click(crop_click_handler);

            $card_actions.append($crop)
                .append($rotate_right)
                .append($clear);

        }


        return $card_content;

    }



}(jQuery, Piccolo));