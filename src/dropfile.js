/**
 * Created by Zesa on 12/3/2016.
 */
(function ($, me){

    /**
     * Do preliminary setup here of dom and of script
     * Create dropzone
     */
    var _this = {};
    me = me || {};

    /**
     * DOM
     */
    me.createDropzone = function(obj, container){

        var $parent = $(container);
        $parent.addClass('piccolo');

        //Remove all events on parent
        $parent.off();
        $parent.empty();

        //Test drag and drop support
        var canDragAndDrop = _this.supportsFileAPI();


        //Card DIV
        var $card = $('<div/>', {
            "class": "mdl-card"
        });

        //Card content
        var $card_content = $('<div/>', {
            "class": "mdl-card__title mdl-card--expand"
        });

        //Card title
        var $card_title = $('<h2/>', {
            "class": "mdl-card__title-text"
        }).text("Upload photo");

        //Card supporting text
        var $card_stext = $('<div/>', {
            "class": "mdl-card__supporting-text"
        }).text('Drag and drop photos, or pick photo to upload.');

        var $pick = $('<a/>',{
            "class": "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
        }).text('Pick Photo');

        var $file_picker = $('<input/>', { "type": "file" })
            .css('display', 'none');

        //Card Actions
        var $card_actions = $('<div/>',{
            "class": "mdl-card__actions mdl-card--border"
        }).append($pick);

        $card_actions.append($file_picker);

        $pick.click(function(evt){
            $file_picker.click();
        });
        $file_picker.on('change', _this.handleFileSelect);


        //Add card title to card content
        $card_content.append($card_title);

        //Add card content, summary text, and actions
        //to material card
        $card.append($card_content)
            .append($card_stext)
            .append($card_actions);

        //Add material card to parent
        //container
        $parent.append($card);


        if(canDragAndDrop){

            //Register drag and drop events on dropzone
            $parent.on('dragover', _this.handleDragOver);
            $parent.on('drop', _this.handleDropzoneFileSelect);

            $parent.on('dragover', function(evt){

                $card.addClass("mdl-shadow--2dp");

            });

            $parent.on('dragleave', function(evt){

                $card.removeClass("mdl-shadow--2dp");
                
            });

        }



        /**
         * Loads image file at index
         * @param index
         */
        _this.loadFileAt = function(index){

            var url = window.URL || window.webkitURL;
            var file = _this.files[index];
            var img = new Image();
            var src = url.createObjectURL(file);
            img.src = src;

            img.onload = function(){

                //Raise image ready event
                obj.raise('onimageready', { source: img });

                url.revokeObjectURL(src);

            };

        };


    };


    /**
     * Test File API support
     * @returns {boolean}
     */
    _this.supportsFileAPI = function(){

        return (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;

    };


    /**
     * Handles dragover event
     * @param evt
     */
    _this.handleDragOver = function(evt){

        evt.stopPropagation();
        evt.preventDefault();
        evt.originalEvent.dataTransfer.dropEffect = 'copy';

    };


    /**
     * Handles dropzone file selection
     * @param evt
     */
    _this.handleDropzoneFileSelect = function(evt){

        evt.stopPropagation();
        evt.preventDefault();

        //Get valid files dropped
        _this.files = _this.getValidFiles(evt.originalEvent.dataTransfer.files);

        _this.currentfileindex = 0;
        _this.files.length && _this.loadFileAt(_this.currentfileindex);


    };


    /**
     * Handles select file selection
     * @param evt
     */
    _this.handleFileSelect = function(evt){

        evt.stopPropagation();
        evt.preventDefault();

        //Get valid files dropped
        _this.files = _this.getValidFiles(evt.originalEvent.target.files);

        _this.currentfileindex = 0;
        _this.files.length && _this.loadFileAt(_this.currentfileindex);
        
    };


    /**
     * Validates files and gets only those that match images
     * @param files
     * @returns {Array}
     */
    _this.getValidFiles = function(files){

        var images = [];
        _.each(files, function(file){

            file.type.match('image.*') && images.push(file);

        });

        return images;

    };

    return me;

}(jQuery, Piccolo));