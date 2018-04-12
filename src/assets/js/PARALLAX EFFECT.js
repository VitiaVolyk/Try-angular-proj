switch(backgroundEffect){
  case 1:
    /*!
           * Mantis.js / jQuery / Zepto.js plugin for Constellation
           * @version 1.2.2
           * @author Acauã Montiel <contato@acauamontiel.com.br>
           * @license http://acaua.mit-license.org/
           */
    (function ($, window) {
      function Constellation (canvas, options) {
        var screenpointSplitt = 12000,
          movingSpeed = 0.1,
          viewportWidth = $(".bg-effect").width(),
          viewportHeight = $(".bg-effect").height(),
          nbCalculated = Math.round(viewportHeight*viewportWidth/screenpointSplitt),
          $canvas = $(canvas),
          context = canvas.getContext('2d'),
          defaults = {
            star: {color: 'rgba(255, 255, 255, .8)',width: 1},
            line: {color: 'rgba(255, 255, 255, .8)',width: 0.1},
            position: {x: 0,y: 0},
            width: viewportWidth,
            height: viewportHeight,
            velocity: movingSpeed,
            length: nbCalculated,
            distance: 120,
            radius: 180,
            stars: []
          },
          config = $.extend(true, {}, defaults, options);

        function Star () {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;

          this.vx = (config.velocity - (Math.random() * 0.5));
          this.vy = (config.velocity - (Math.random() * 0.5));

          this.radius = Math.random() * config.star.width;
        }

        Star.prototype = {
          create: function(){
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            context.fill();
          },

          animate: function(){
            var i;
            for (i = 0; i < config.length; i++) {

              var star = config.stars[i];

              if (star.y < 0 || star.y > canvas.height) {
                star.vx = star.vx;
                star.vy = - star.vy;
              } else if (star.x < 0 || star.x > canvas.width) {
                star.vx = - star.vx;
                star.vy = star.vy;
              }

              star.x += star.vx;
              star.y += star.vy;
            }
          },

          line: function(){
            var length = config.length,
              iStar,
              jStar,
              i,
              j;

            for (i = 0; i < length; i++) {
              for (j = 0; j < length; j++) {
                iStar = config.stars[i];
                jStar = config.stars[j];

                if (
                  (iStar.x - jStar.x) < config.distance &&
                  (iStar.y - jStar.y) < config.distance &&
                  (iStar.x - jStar.x) > - config.distance &&
                  (iStar.y - jStar.y) > - config.distance
                ) {
                  if (
                    (iStar.x - config.position.x) < config.radius &&
                    (iStar.y - config.position.y) < config.radius &&
                    (iStar.x - config.position.x) > - config.radius &&
                    (iStar.y - config.position.y) > - config.radius
                  ) {
                    context.beginPath();
                    context.moveTo(iStar.x, iStar.y);
                    context.lineTo(jStar.x, jStar.y);
                    context.stroke();
                    context.closePath();
                  }
                }
              }
            }
          }
        };

        this.createStars = function () {
          var length = config.length,
            star,
            i;

          context.clearRect(0, 0, canvas.width, canvas.height);

          for (i = 0; i < length; i++) {
            config.stars.push(new Star());
            star = config.stars[i];

            star.create();
          }

          star.line();
          star.animate();
        };

        this.setCanvas = function () {
          canvas.width = config.width;
          canvas.height = config.height;
        };

        this.setContext = function () {
          context.fillStyle = config.star.color;
          context.strokeStyle = config.line.color;
          context.lineWidth = config.line.width;
        };

        this.setInitialPosition = function () {
          if (!options || !options.hasOwnProperty('position')) {
            config.position = {
              x: canvas.width * 0.5,
              y: canvas.height * 0.5
            };
          }
        };

        this.loop = function (callback) {
          callback();

          window.requestAnimationFrame(function () {
            this.loop(callback);
          }.bind(this));
        };

        this.bind = function () {
          $(window).on('mousemove', function(e){
            config.position.x = e.pageX - $canvas.offset().left;
            config.position.y = e.pageY - $canvas.offset().top;
          });
        };

        this.init = function () {
          this.setCanvas();
          this.setContext();
          this.setInitialPosition();
          this.loop(this.createStars);
          this.bind();
        };
      }

      $.fn.constellation = function (options) {
        return this.each(function () {
          var c = new Constellation(this, options);
          c.init();
        });
      };
    })($, window);$('canvas').constellation({});

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      });
    }

    //Resize Canvas
    var waitForFinalEvent = (function () {
      var timers = {};
      return function (callback, ms, uniqueId) {
        if (!uniqueId) {
          uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
          clearTimeout (timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
      };
    })();

    $(window).resize(function () {
      waitForFinalEvent(function(){
        $('canvas').constellation({});

      }, 400, "some unique string");
    });

    $("#bg-effect-1").fadeIn();
    $("#bg-effect-2").fadeOut();
    $("#bg-effect-3").fadeOut();


    break;
  case 2:

    $("#bg-effect-1").fadeOut();
    $("#bg-effect-2").fadeIn();
    $("#bg-effect-3").fadeOut();

    break;
  case 3:

    $("#bg-effect-1").fadeOut();
    $("#bg-effect-2").fadeOut();
    $("#bg-effect-3").fadeIn();


    break;
  case 0:
    $("#bg-pattern").fadeIn();
    $("#bg-effect-1").fadeOut();
    $("#bg-effect-2").fadeOut();
    $("#bg-effect-3").fadeOut();
    $(".bg-effect-1").removeClass("layer");
    $(".bg-effect-2").removeClass("layer");
    $("#bg-effect-3").removeClass("layer");

    break;
  default:

    $("#bg-effect-1").fadeOut();
    $("#bg-effect-2").fadeOut();
    $("#bg-effect-3").fadeOut();
    $("#bg-effect-1").removeClass("layer");
    $("#bg-effect-2").removeClass("layer");
    $("#bg-effect-3").removeClass("layer");

    break;

}
