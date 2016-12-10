/**
 * Created by Shady3cho on 12/5/2016.
 */
(function ($, me){

    var gcanvas;
    var gimage;
    var gwidth;
    var gheight;
    var gcropper;
    var cropCanvas;
    var rotateAngle = 0;
    me.on('cropstart',function (evt) {
        gcanvas.cropper("enable");
    });
    me.on('cropcancel',function (evt) {
        gcanvas.cropper("clear");
        gcanvas.cropper("disable");
    });
    me.on('cropend', function (evt) {
        gcanvas.cropper('replace',cropCanvas.toDataURL());
        gcanvas.cropper('setCropData',false);
    });
    me.on('rotateccw', function (evt) {
        rotateAngle -= 45;
        gcanvas.cropper('enable');
        gcanvas.cropper('rotate','-45');
    });
    me.on('rotatecw', function (evt) {
        rotateAngle += 45;
        gcanvas.cropper('enable');
        gcanvas.cropper('rotate','45');
    });
    me.on('imageloaded',function (target) {
            var $canvas = $(target.target);
            var image = target.source;
        gcanvas = $canvas;
        gimage = image;
                var width = $canvas.width();
                var height = $canvas.height();
                gwidth = width;
                gheight = height;
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
                    aspectRatio : 1,
                    autoCrop: false,
                    rotatable: true,
                    cropend:function (e) {
                        cropCanvas = $canvas.cropper('getCroppedCanvas');
                    },
                    built: function () {
                        $canvas.cropper("disable");
                    }
                        });
    });
    me.on('rotatestart',function (e) {

        }
    );
   }(jQuery,Piccolo));
