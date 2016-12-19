/**
 * Created by Zesa on 12/3/2016.
 */
var Piccolo = (function ($, me){

    me = me || {};
    me.elements = {};
    me.incrementId = 0;

    function Internal_Piccolo(element, options){

        var _internal = this;
        this.id = "";

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
                oncropcancel: [],
                onrotatestart: [],
                onrotateccw: [],
                onrotatecw: [],
                onrotateend: [],
                onrotatecancel: [],
                onreset: []
            },

            zone: element

        };

        /**
         * Default settings
         */
        this.settings = {
            imagesdirectory: null,
            uploadurl: '../../uploads/index.php',
            postvariablename: 'file',
            multiplefileupload: false,
            debug: false,
            preloadimage: null,
            imagefilename: null
        };


        /**
         * Registers event listener
         * @param event
         * @param callback
         */
        this.on = function(event, callback){

            _internal.settings.debug && console.log('Registering event: ' + event);

            if(_.isFunction(callback)){

                event = (event.indexOf('on') === 0) ? event : 'on' + event;

                var callback_index = _this.events[event].indexOf(callback);
                (callback_index >= 0) || _this.events[event].push(callback);

                this.settings.debug && console.log('Registered ' + _this.events[event].length + ' function(s) for event ' + event);

            }else{

                _internal.settings.debug && console.log('Event callback invalid: ' + event);

            }

        };


        /**
         * Unregisters event listeners
         * @param event
         * @param callback
         */
        this.un = function(event, callback){

            _internal.settings.debug && console.log('Unregistering event: ' + event);

            if(_.isFunction(callback)){

                event = (event.indexOf('on') == 0) ? event : 'on' + event;

                var callback_index = _this.events[event].indexOf(callback);
                (callback_index >= 0) && _this.events[event].splice(callback_index, 1);

            }

        };


        /**
         * Raise event
         * @param event
         * @param evt
         */
        this.raise = function(event, evt){

            var count = 0;

            //Raise event on seperate thread
            _.defer(function(){

                _internal.settings.debug && console.log('Raising event: ' + event);
                _internal.settings.debug && console.log(_this.events[event]);

                _this.events[event] && _this.events[event].forEach(function(fxn){

                    try{
                        _internal.settings.debug && console.log('Raising event: ' + ++count);

                        //Attach element raising event
                        evt.element = _this.zone;
                        evt.parentObject = _internal;
                        fxn(evt);

                    }catch(e){

                    }

                });

            })

        };


        /**
         * Listen for image ready event to add canvas and menue
         */

        this.on('imageready', function(evt){

            var imagezone = me.createImagezone(_internal, _this.zone);

            //Image and canvas ready, raise imageloaded event
            //imagezone is equivalent to $(<img/>); evt.source is Image object
            this.raise('onimageloaded', { target: imagezone, source: evt.source });

        });


        /**
         * Listen to reset event to reset DOM
         */
        this.on('reset', function(evt){

            _me.createDropzone(_internal, _this.zone);

        });

        _this.preloadImage = function(){

            var img = new Image();
            img.src = _internal.settings.preloadimage;

            img.onload = function(){

                //Raise image ready event
                _internal.raise('onimageready', { source: img });

            };

        };

        var $parent = $(_this.zone);

        this.settings.postvariablename = $parent.data("post") || this.settings.postvariablename;
        this.settings.uploadurl = $parent.data("url") || this.settings.uploadurl;
        this.settings.preloadimage = $parent.data("image") || this.settings.preloadimage;

        //Extend settings with options passed
        this.settings = $.extend(this.settings, options);

        this.settings.debug && console.log('Init Piccolo from jQuery');


        //Create dropzone
        me.createDropzone(this, _this.zone);

        //Try preloading image
        this.settings.preloadimage && _this.preloadImage();

        return this;

    }


    /**
     * Do preliminary setup here of dom and of script
     */
    $.fn.piccolo = function(options){

        return this.each(function(){

            var p = new Internal_Piccolo(this, options);
            p.id = me.incrementId + "";
            me.elements[p.id] = p;
            me.incrementId++;

        });

    };

    return me;

}(jQuery, {}));