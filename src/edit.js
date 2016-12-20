/**
 * Created by Shady3cho on 12/5/2016.
 */
(function ($, me){



  me.createEditzone =  function (obj, target) {


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


      var $canvas = $(target.target);
      var image = target.source;
      obj.settings.imagefilename = obj.settings.imagefilename || (obj.settings.preloadimage && extractImageName(obj.settings.preloadimage));

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
      save(canvas);
      gcropper =   $canvas.cropper(
          {
              autoCrop: false,
              rotatable: true,
              cropend:function (e)
              {
                  cropCanvas = $canvas.cropper('getCroppedCanvas');
              },
              built: function ()
              {
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


      obj.on('rotatestart',function (e)
          {

          }
      );


      obj.on('rotateend',function (e)
          {
              gcropper[0].getContext('2d').rotate(45*Math.PI/180);
              save(gcropper[0]);
          }
      );


      obj.on('cropstart',function (evt)
      {
          gcanvas.cropper("enable");
      });


      obj.on('cropcancel',function (evt)
      {
          gcanvas.cropper("clear");
          gcanvas.cropper("disable");
      });


      obj.on('cropend', function (evt)
      {
          save(cropCanvas);
          gcanvas.cropper('replace',cropCanvas.toDataURL());
          gcanvas.cropper('setCropData',false);
      });


      obj.on('rotateccw', function (evt)
      {
          rotateAngle -= 45;
          gcanvas.cropper('enable');

          var smaller = Math.min(gparentwidth,gparentheight);
          var dis = Math.sqrt(gcanvaswidth*gcanvaswidth + gcanvasheight*gcanvasheight);
          var zoomFactor = 1 - smaller/dis;
          gcanvas.cropper('rotate','-45');
          if(rotateAngle % 90 == 0)
          {
              gcanvas.cropper('zoom',zoomFactor);
              gcanvas.cropper('moveTo',0,0);
          }
          else
          {
              gcanvas.cropper('zoom',-1*zoomFactor); 
              gcanvas.cropper('moveTo',0,0);
          }
          gcanvas.cropper("disable");
      });


      obj.on('rotatecw', function (evt)
      {
          rotateAngle += 45;
          gcanvas.cropper('enable');

          var smaller = Math.min(gparentwidth,gparentheight);
          var dis = Math.sqrt(gcanvaswidth*gcanvaswidth + gcanvasheight*gcanvasheight);
          var zoomFactor = 1 - smaller/dis;
          gcanvas.cropper('rotate','45');
          if(rotateAngle % 90 == 0)
          {
              gcanvas.cropper('zoom',zoomFactor);
              gcanvas.cropper('moveTo',0,0);
          }
          else
          {
              gcanvas.cropper('zoom',-1*zoomFactor);
              gcanvas.cropper('moveTo',0,0);
          }
          gcanvas.cropper("disable");
          console.log(gcanvas[0].toDataURL());
      });


      function save(d)
      {


          if(obj.settings.uploadurl != null)
          {
              var ctx = d.getContext('2d');

              var imageData = ctx.getImageData(0, 0, d.width, d.height);

              var toSend;

              if(imageData.data.length > 800000){

                  d.toBlob(
                      function (blob) {
                          toSend = blob;
                      });

              }
              else{
                    toSend = d.toDataURL();
              }

                      var xhr = new XMLHttpRequest();
                      xhr.open('POST', obj.settings.uploadurl, true);
                      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                      var t = {};
                      t[obj.settings.postvariablename] = toSend;
                      t["settings"] = obj.settings;
                      xhr.onload = function ()
                      {
                          if (xhr.readyState === xhr.DONE)
                          {
                              if (xhr.status === 200)
                              {
                                  var r =  JSON.parse(xhr.response).data;
                                  obj.settings.imagefilename = obj.settings.imagefilename || r.imagefilename;
                                  obj.raise('onimageuploaded', r);
                              }
                          }
                      };
                      xhr.send(JSON.stringify(t)

              );
          }
      }


      function extractImageName(d)
      {
          return d.substr(d.lastIndexOf('/') + 1);
      }
    };

   }(jQuery,Piccolo));
