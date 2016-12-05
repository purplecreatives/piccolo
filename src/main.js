/**
 * Created by Zesa on 12/3/2016.
 */
var Piccolo = (function ($, me){

    me = me || {};

    //Private properts
    var _this = {

        /**
         * List of events in library
         */
        events: {
            onready: [],
            onimageready: [],
            onimageloaded: [],
            onimageuploaded: [],
            oncropstart: [],
            oncropend: [],
            onrotatestart: [],
            onrotateend: []
        }

    };


    /**
     * Default settings
     */
    me.settings = {
        imagesdirectory: '',
        uploadurl: '',
        postvariablename: '',
        multiplefileupload: false
    };


    /**
     * Registers event listener
     * @param event
     * @param callback
     */
    me.on = function(event, callback){

        if(_.isFunction(callback)){

            event = (event.indexOf('on') == 0) ? event : 'on' + event;

            var callback_index = _this.events[event].indexOf(callback);
            callback_index || _this.events[event].push(callback);

        }

    };


    /**
     * Unregisters event listeners
     * @param event
     * @param callback
     */
    me.un = function(event, callback){

        if(_.isFunction(callback)){

            event = (event.indexOf('on') == 0) ? event : 'on' + event;
            
            var callback_index = _this.events[event].indexOf(callback);
            callback_index && _this.events[event].splice(callback_index, 1);

        }

    };


    /**
     * Raise event
     * @param event
     * @param evt
     */
    me.raise = function(event, evt){

        //Raise event on seperate thread
        _.defer(function(){

            _this.events[event] && _this.events[event].forEach(function(fxn){
                fxn(evt);
            });

        })

    };


    /**
     * Do preliminary setup here of dom and of script
     */
    $.fn.piccolo = function(options){

        //Extend settings with options passed
        me.settings = $.extend(me.settings, options);

        //Create dropzone
        _this.createDropzone(this);

        return this;        //Return object for chain

    };


    return me;

}(jQuery, {}));