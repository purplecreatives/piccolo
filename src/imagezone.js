/**
 * Created by AK Mhazo on 12/6/2016.
 */
(function($, me){

    me = me || {};
    var _this = {};

    me.createImagezone = function(obj, container){

        var $parent = $(container);
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
            "class": "mdl-card__title mdl-card--expand canv"
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
        }).text('rotate_90_degrees_ccw'));

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

        var $rotate_ccw = $('<a/>',{
            "class": "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab material-icons piccolo-button"
        }).append($('<i/>', {
            "class": "material-icons"
        }).text('rotate_left'));

        var $rotate_cw = $('<a/>',{
            "class": "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab material-icons piccolo-button"
        }).append($('<i/>', {
            "class": "material-icons"
        }).text('rotate_right'));

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

            var objid = $(evt.target).closest('.piccolo').data('id');
            var obj = me.elements[objid + ""];
            obj.raise('onreset', {});

        };

        
        var rotate_click_handler = function(evt){

            var objid = $(evt.target).closest('.piccolo').data('id');
            var obj = me.elements[objid + ""];
            obj.raise('onrotatestart', {});
            $done.off(); $cancel.off();

            $done.click(function(evt){

                var objid = $(evt.target).closest('.piccolo').data('id');
                var obj = me.elements[objid + ""];
                obj.raise('onrotateend', {});
                reset();

            });

            $rotate_ccw.click(function(evt){

                var objid = $(evt.target).closest('.piccolo').data('id');
                var obj = me.elements[objid + ""];
                obj.raise('onrotateccw', {});

            });

            $rotate_cw.click(function(evt){

                var objid = $(evt.target).closest('.piccolo').data('id');
                var obj = me.elements[objid + ""];
                obj.raise('onrotatecw', {});

            });

            $cancel.click(function(evt){

                var objid = $(evt.target).closest('.piccolo').data('id');
                var obj = me.elements[objid + ""];
                obj.raise('onrotatecancel', {});
                reset();

            });

            $card_actions.empty();
            $card_actions.append($('<span/>', { "class": "piccolo-button"}).text('Rotate'))
                .append($done)
                .append($rotate_ccw)
                .append($rotate_cw)
                .append($cancel);

        };

        
        var crop_click_handler = function(evt){

            var objid = $(evt.target).closest('.piccolo').data('id');
            var obj = me.elements[objid + ""];
            obj.raise('oncropstart', {});
            $done.off(); $cancel.off();

            $done.click(function(evt){

                var objid = $(evt.target).closest('.piccolo').data('id');
                var obj = me.elements[objid + ""];
                obj.raise('oncropend', {});
                reset();

            });

            $cancel.click(function(evt){

                var objid = $(evt.target).closest('.piccolo').data('id');
                var obj = me.elements[objid + ""];
                obj.raise('oncropcancel', {});
                reset();

            });

            $card_actions.empty();
            $card_actions.append($('<span/>', { "class": "piccolo-button"}).text('Crop'))
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