/**
 * Created by Shady3cho on 12/5/2016.
 */
(function ($, me){

    var gcanvas;
    var gimage;
    var gwidth;
    var gheight;
    var gcanvasheight;
    var gcanvaswidth;
    var gparentheight;
    var gparentwidth;
    var gcanvasleft;
    var gcanvasright;
    var gcropper;
    var cropCanvas;
    var rotateAngle = 0;
    function save(d) {
        if(me.settings.uploadurl != null){
            var xhr = new XMLHttpRequest();
            xhr.open('POST', me.settings.uploadurl, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var t = {};
            t[me.settings.postvariablename] = d;
            xhr.send(JSON.stringify(t));
        }
    }
    me.on('cropstart',function (evt) {
        gcanvas.cropper("enable");
    });
    me.on('cropcancel',function (evt) {
        gcanvas.cropper("clear");
        gcanvas.cropper("disable");
    });
    me.on('cropend', function (evt) {
        gcanvas.cropper('replace',cropCanvas.toDataURL());
        save(cropCanvas.toDataURL());
        gcanvas.cropper('setCropData',false);
    });
    me.on('rotateccw', function (evt) {
        rotateAngle -= 45;
        gcanvas.cropper('enable');

        var smaller = Math.min(gparentwidth,gparentheight);
        var dis = Math.sqrt(gcanvaswidth*gcanvaswidth + gcanvasheight*gcanvasheight);
        var zoomFactor = 1 - smaller/dis;
        gcanvas.cropper('rotate','-45');
        if(rotateAngle % 90 == 0){
            gcanvas.cropper('zoom',zoomFactor);
            gcanvas.cropper('moveTo',0,0);
        }else {
            gcanvas.cropper('zoom',-1*zoomFactor);
            gcanvas.cropper('moveTo',0,0);
        }
        gcanvas.cropper("disable");
    });
    me.on('rotatecw', function (evt) {
        rotateAngle += 45;
        gcanvas.cropper('enable');

        var smaller = Math.min(gparentwidth,gparentheight);
        var dis = Math.sqrt(gcanvaswidth*gcanvaswidth + gcanvasheight*gcanvasheight);
        var zoomFactor = 1 - smaller/dis;
        gcanvas.cropper('rotate','45');
        if(rotateAngle % 90 == 0){
            gcanvas.cropper('zoom',zoomFactor);
            gcanvas.cropper('moveTo',0,0);
        }else {
            gcanvas.cropper('zoom',-1*zoomFactor);
            gcanvas.cropper('moveTo',0,0);
        }
        gcanvas.cropper("disable");
        console.log(gcanvas[0].toDataURL());
    });
    me.on('imageloaded',function (target) {
            var $canvas = $(target.target);
            var image = target.source;
        gcanvas = $canvas;
        gimage = image;
                var width = $canvas.width();
                var height = $canvas.height();
                gwidth = image.naturalWidth;
                gheight = image.naturalHeight;
                var canvas = $canvas[0];
                var cropper;

                canvas.width =  image.naturalWidth;
                canvas.height = image.naturalHeight;
                //console.log(canvas);
                var factor = canvas.height/image.naturalHeight;
                canvas.getContext('2d').drawImage(
                    image,
                    0, 0, image.naturalWidth , image.naturalHeight,
                    0, 0, image.naturalWidth , image.naturalHeight
                );

            gcropper =   $canvas.cropper({
                    autoCrop: false,
                    rotatable: true,
                    cropend:function (e) {
                        cropCanvas = $canvas.cropper('getCroppedCanvas');
                    },
                    built: function () {
                        save($canvas[0].toDataURL());
                        gcanvasheight = $canvas.next().height();
                        gcanvaswidth = $canvas.next().width();
                        var h = $canvas.parent().height();
                        var w = $canvas.parent().width();
                        gparentheight = h;
                        gparentwidth = w;

                        var zoomratio = gcanvasheight/h;
                        $canvas.cropper("zoom",-1*(1 - zoomratio));
                        var l = $canvas.cropper('getCanvasData');
                        $canvas.cropper('moveTo',0,0);
                        l = $canvas.cropper('getCanvasData');
                        gcanvasleft = l.left;
                        gcanvasright = l.right;
                        gcanvasheight = $canvas.next().height();
                        gcanvaswidth = $canvas.next().width();
                        $canvas.cropper("disable");
                    }
                        });
    });
    me.on('rotatestart',function (e) {

        }
    );
    me.on('rotateend',function (e) {

        }
    );
   }(jQuery,Piccolo));
