/*****************************************************
	
	
   	@Author			Avanzare
	@Website		www.avanzare.co
	@Last Update	10:13 PM Friday, December 18, 2015

	TABLE CONTENTS
	---------------------------
	 1. Loading
	 2. Background
	 3. Cycle
	 4. Overlay
	 5. Effects
	 6. AJAX - Subscribe
	 7. AJAX - Contact


*****************************************************/



/**	1. LOADING
*****************************************************/
$(document).ready(function(){
	
	doBeforeTransition();
	
	$( window ).load(function() {

		setTimeout(function() {		
			$("#page-load").addClass("remove");
			$("#intro").addClass("show");
			doAfterTransition();
			
		}, 1250);
						
		
	});
	
	//THIS WILL BE DONE BEFORE TRANSITION
	function doBeforeTransition() {
		
		$("#intro .container-mid").fadeOut(0);
	
	}
	

	//THIS WILL BE DONE AFTER TRANSITION
	function doAfterTransition() {
		
		$(".social-icons li a").tooltip({
			
			container: 'body',
			delay: { "show": 150, "hide": 0 }
			
		});
		
		setTimeout(function() {	
			blockEvents = false
			
		}, 550);
		
		$("#intro .container-mid").fadeIn("slow");
		$('#intro.intro-1 img.logo').addClass('animated fadeInDown');
		
		setTimeout(function() {
			$('#intro.intro-1 h1').addClass('animated fadeInUp');	
			
			setTimeout(function() {
				$('#intro.intro-1 p').addClass('animated fadeInUp');
				
				setTimeout(function() {
					$('#intro.intro-1 .arrow-wrap').addClass('animated fadeInUp');
				
					setTimeout(function() {
						$('#bg-effect-1 canvas').addClass('animated fadeInUp');  
	
						setTimeout(function() {
							activeOverlays = 1;
							$('#bg-effect-1 canvas').css('opacity','1');  
							$('#intro.intro-1 .arrow-wrap').css('opacity','1');
							$('#intro.intro-1 p').css('opacity','1');
							$('#home-screen .content-block h1').css('opacity','1');
							$('#intro.intro-1 img.logo').css('opacity','1');
							
						}, 1000); 
						
					}, 500);
					
				}, 500);
				 
			}, 500);
			
		}, 500);

	}
	
});


/**	2. BACKGROUND
*****************************************************/
$(document).ready(function(){ 	
	
	// BACKGROUND CHANGER ( Controlled via Config.js )
	var backgroundOption = CONFIG.background;
	switch(backgroundOption){
		case 'color':
		
		    // BACKGROUND COLOR
			$("#bg-pattern").fadeOut();
			$("#bg-overlay").css("opacity","1");
			$("#bg-overlay").css("background-color",solidBG);
			
		break;
		case 'image':
		
		    // BACKGROUND IMAGE
			$("#bg-image").backstretch(imageBG);
							
		break;
		case 'slider':
		
		    // BACKGROUND SLIDER
			$("#bg-image").vegas({slides:sliderBG,transition:sliderTransition,delay:screenTime,transitionDuration:fadeDuration,timer:false,walk: function (index, slideSettings) {$('.slider').cycle('next');}});
			
			
		break;
		case 'kenburns':
		
		    // BACKGROUND KEN BURNS
			$("#bg-image").vegas({slides:sliderBG,transition:sliderTransition,delay:screenTime,transitionDuration:fadeDuration,timer:false,animation:kenburnsEffect,walk: function (index, slideSettings) {$('.slider').cycle('next');}});
			
			
		break;
		case 'youtube':
		
		    // BACKGROUND YOUTUBE
			if(jQuery.browser.mobile)
			{
				// Mobile fallback
				$("#bg-image").backstretch(imageBG);
			}
			
			else
			{
				
				//Show video player items
				$('.showOn-video-bg').css('display','block');
				
				// WILL PUT FOCUS ON MAIN CONTENT
				$("#bg-overlay").css("opacity",".7");
				
				// Init YTplayer
				$('.player').mb_YTPlayer();
				
				// YOUTUBE PLAYER BUTTONS CONTROLL
				function th1 () {
					
					$('#bg-youtube').YTPUnmute();
					$( ".volume-button" ).removeClass('fa-volume-off').addClass('fa-volume-up');
					
				}
				
				function th2 () {
					
					$('#bg-youtube').YTPMute();
					$( ".volume-button" ).removeClass('fa-volume-up').addClass('fa-volume-off');
					
				}
				
				var fixpreparex2 = 0;
				if(fixpreparex2 === 0) {
					
				  $( ".volume-button" ).click(function() {
					  
					fixpreparex2 = 1;
					th2();
					
				  });
				  
				}else {}
			
				$('#bg-youtube').on("YTPMuted",function(){
					
					if(fixpreparex2 === 1) {
						
					  $( ".volume-button" ).click(function() {
						  
						fixpreparex2 = 2;
						th1();
						
					  });
					}else {}
					
				});
				
				$('#bg-youtube').on("YTPUnmuted",function(){
					
					if(fixpreparex2 === 2) {
						
					  $( ".volume-button" ).click(function() {
						  
						fixpreparex2 = 1;
						th2();
						
					  });
					  
					}else {}
			
				});
				
						
				function sh1 () {
					
					$('#bg-youtube').YTPPlay();
					$( ".stop-button" ).removeClass('ti-control-play').addClass('ti-control-pause');
					
				}
				
				function sh2 () {
					
					$('#bg-youtube').YTPPause();
					$( ".stop-button" ).removeClass('ti-control-pause').addClass('ti-control-play');
					
				}
				
				var fixpreparex = 0;
				if(fixpreparex === 0) {
					
				  $( ".stop-button" ).click(function() {
					  
					fixpreparex = 1;
					sh2();
					
				  });
				  
				}else {}
			
				$('#bg-youtube').on("YTPPause",function(){
					
					if(fixpreparex === 1) {
						
					  $( ".stop-button" ).click(function() {
						  
						fixpreparex = 2;
						sh1();
						
					  });
					}else {}
					
				});
				
				$('#bg-youtube').on("YTPPlay",function(){
					
					if(fixpreparex === 2) {
						
					  $( ".stop-button" ).click(function() {
						  
						fixpreparex = 1;
						sh2();
						
					  });
					  
					}else {}
			
				});
				
			}

			
		break;
		default:
		
		    // BACKGROUND FALLBACK ( COLOR )
			$("#bg-overlay").css("opacity","1");
				
		break;
		
	}
	
	
	// BACKGROUND OVERLAY CHANGER ( Controlled via Config.js )
	switch(bgOverlayMode){
		case 'solid':
		
			// SOLID COLOR BACKGROUND MODE
			if(backgroundOption != "color") {
				$("#bg-overlay").css("background",bgOverlayColor);	
		    }
			
		
		break;	
		case 'gradient':
		
			// GRADIENT ANIMATION BACKGROUND MODE
			var colors = new Array(
			  [62,35,255],
			  [60,255,60],
			  [255,35,98],
			  [45,175,230],
			  [255,0,255],
			  [255,128,0]);
			
			var step = 0;
			//color table indices for: 
			// current color left
			// next color left
			// current color right
			// next color right
			var colorIndices = [0,1,2,3];
			
			//transition speed
			var gradientSpeed = 0.002;
			
			function updateGradient()
			{
			  
			  if ( $===undefined ) return;
			  
			var c0_0 = colors[colorIndices[0]];
			var c0_1 = colors[colorIndices[1]];
			var c1_0 = colors[colorIndices[2]];
			var c1_1 = colors[colorIndices[3]];
			
			var istep = 1 - step;
			var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
			var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
			var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
			var color1 = "rgb("+r1+","+g1+","+b1+")";
			
			var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
			var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
			var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
			var color2 = "rgb("+r2+","+g2+","+b2+")";
			
			if(backgroundOption != "color") {
				$('#bg-overlay').css({
			   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
				background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});	
		    } 
			
			  step += gradientSpeed;
			  if ( step >= 1 )
			  {
				step %= 1;
				colorIndices[0] = colorIndices[1];
				colorIndices[2] = colorIndices[3];
				
				//pick two new target color indices
				//do not pick the same as the current one
				colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
				colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
				
			  }
			}
			
			setInterval(updateGradient,10);
			
		break;
		default:
		
		    // FALLBACK ( solid )
			$("#bg-overlay").css("background",bgOverlayColor);
				
		break;
	}

	// SKIN CHANGER ( Controlled via Config.js )
	var skinOption = CONFIG.skin;
	switch(skinOption){
		case 'black':
		
			// default is black in css no code needed
			
		break;
		case 'white':
		
			$("body").addClass("white");
			
		break;
		
		default:
		
			// default is black in css no code needed
				
		break;
		
	}
	
	// OPACITY OVERWRITE ( OVERLAY AND PATTERN )
	$('#bg-overlay').css("opacity",bgOverlayOpacity);
	$('#bg-pattern').css("opacity",bgPatternOpacity);
	
	// MOBILE DETECT
	(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
		
});	
	
/**	3. CYCLE
 *****************************************************/
$(document).ready( function(){
	
	$('.slider').cycle({
		fx : 'scrollVert',
		timeout: screenTime, // CONTROLLED VIA CONFIG.JS
		delay: 0,
		speed: fadeDuration, // CONTROLLED VIA CONFIG.JS
		slides: '.slide'
	});
	
});	
	
/**	4. OVERLAY
*****************************************************/
$(document).ready(function(){ 
	
    // CORE VARIABLES
	overlay = $("#overlay");
	overlay1 = $(".overlay-1");
	overlay2 = $(".overlay-2");
	overlayContent = $("#overlay section");
	upBtn = $(".go-up");
	downBtn = $(".go-down");
	frontpage = $("#intro .container-mid");
	blockEvents = true;
	overlayStatus = 1;
	
	
	// CORE FUNCTIONS
	function showfrontPage() {
		frontpage.fadeIn(400);
	}
	
	function hidefrontPage() {
		frontpage.animate({opacity: 'hide', bottom: 'hide', height: 'hide'}, 600);
	}
	
	function hideDownBtn() {
		downBtn.removeClass("active");
	}

	
	function showDownBtn() {
		downBtn.addClass("active");
	}
	
	function hideUpBtn() {
		upBtn.removeClass("active");
	}

	
	function showUpBtn() {
		upBtn.addClass("active");
	}
	
	function hidettip() {
		$(".social-icons li a").tooltip('hide');
	}
	
	
	// CORE OPTION CONTROLLER
	function optionController() {
		
		killOverlay = false;
		disableOverlay2 = false;
		$(".social-icons li a.go-down").closest('.li').fadeIn(1);
		
		switch(CONFIG.overlay){
			case 1:
			    overlay1 = $(".overlay-1");
				disableOverlay2 = true;
				$(".social-icons li a.go-down").parent().fadeOut(1);
				
			break;
			case 2:
				overlay1 = $(".overlay-2");
				disableOverlay2 = true;
				
			break;
			case 3:
				killOverlay = true;
				
			break;
			default:
				overlay1 = $(".overlay-1");
			break;
			
		}
	}
	
	
	// CORE FUNCTION OPEN
	function openOverlay() {
		
		optionController();
		if (killOverlay === false && blockEvents === false) {	
		
			blockEvents = true;
			
			switch (overlayStatus) { 
			
				case 1:
					hidefrontPage();
					hideDownBtn();
					
					setTimeout(function() {
						overlay.addClass("open");
						
						setTimeout(function() {
							overlay1.addClass("active");
							
								setTimeout(function() {
								showUpBtn();
								
								setTimeout(function() {
									overlayStatus = 2;
									blockEvents = false;
									
								}, 800);
							}, 400);
						}, 800);
					}, 200);
					
				break;	
				case 2: 
					if (disableOverlay2 == false) {
						
						overlay1.removeClass("active");
						hidettip();
						
						setTimeout(function() {
							overlay2.addClass("active");
							
							setTimeout(function() {
								overlayStatus = 3;
								blockEvents = false;
								
							}, 800);
						}, 800);
						
					}
					else { blockEvents = false; };
						
				break;
				case 3: 
					blockEvents = false;
					
				break;    
				default:
					alert('SOMETHING WENT WRONG!');
			}

		}
		
	}
	
	
	// CORE FUNCTION CLOSE
	function closeOverlay() {
		
		if (blockEvents == false) {
		    
			blockEvents = true;
			
			switch (overlayStatus) { 
			
				case 1: 
					blockEvents = false;
				
				break;	
				case 2: 
				    overlay1.removeClass("active");
					hideUpBtn();
					hidettip();
					
					setTimeout(function() {
						overlay.removeClass("open");
						
						setTimeout(function() {
							showfrontPage();
							showDownBtn();
							
							setTimeout(function() {
								overlayStatus = 1;
								blockEvents = false;
								
							}, 800);
						}, 600);
					}, 800);
				
				break;
				case 3: 
					overlay2.removeClass("active");
				    
					setTimeout(function() {
						overlay1.addClass("active");

						setTimeout(function() {
							overlayStatus = 2;
							blockEvents = false;
							
						}, 800);
					}, 800);
					
				break; 
				default:
					alert('SOMETHING WENT WRONG!');
			}					 
		
		}
		
	}
	
	
	// EVENT - ON DOWN BUTTON CLICK
	downBtn.click(function() {
		openOverlay();
	});
	

	// EVENT - ON UP BUTTON CLICK
	upBtn.click(function() {
		closeOverlay();
	});
	
	
	// EVENT - ON DOWN SCROLL GLOBAL	
	$('html').bind('DOMMouseScroll mousewheel', function(e){
		var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail*-1;
		if(theEvent / 120 < 0) {
			openOverlay();
		}
	});
	
	// EVENT - ON UP SCROLL GLOBAL	
	$('html').bind('DOMMouseScroll mousewheel', function(e){
		var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail*-1;
		if(theEvent / 120 > 0) {
			closeOverlay();
		}
	});
	
	
	// EVENT - KEYDOWN	
	$(document).keydown(function(e) {
		
		switch(e.which) {
			case 37: // left
			break;
	
			case 38: // up
			closeOverlay();
			break;
	
			case 39: // right
			break;
	
			case 40: // down
			openOverlay();
			break;
	
			default: return; // exit this handler for other keys
		}
		
		e.preventDefault();
		
	});
	
	
	// SWITCH ANIMATION OVERLAY 
	switch(overlayAnimation){
		case 'fade':
		
			overlay.addClass("fade-In");
			
		break;
		case 'slide':
		
			overlay.addClass("slide-from-bottom");
			
		break;
		
		default:
		
		   overlay.addClass("fade-In");
				
		break;
		
	}
	
	
	// SWITCH ANIMATION OVERLAY CONTENT
	switch(overlayContentAnimation){
		case 'fade':
		
			overlayContent.addClass("fade-In");
			
		break;
		case 'slide':
		
			overlayContent.addClass("slide-from-bottom");
			
		break;
		
		default:
		
		    overlayContent.addClass("slide-from-bottom");
				
		break;
		
	}
	
	
});

/**	5. EFFECTS
*****************************************************/
$(document).ready(function(){
	
	// CANVAS STAR / PARTICLE EFFECT ( Controlled via Config.js )
	if ( CONFIG.canvasEffect === true ) {
		backgroundEffect = 1;
	}
	
	
	// PARALLAX EFFECT ( Controlled via Config.js )
	if ( CONFIG.parallax === true ) {
		$('#main-container').parallax({
		  scalarX: 24,
		  scalarY: 15,
		  frictionX: 0.1,
		  frictionY: 0.1,
		});
	} 
	
	
	// EFFECT CHANGER ( Not in Config.js )
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

}); 

/**	6. AJAX - SUBSCRIBE
 *****************************************************/
$(document).ready( function(){
	
	$('.subscribe-form').submit(function() {
		
		  var postdata = $('.subscribe-form').serialize();
		  $.ajax({
			  type: 'POST',
			  url: 'assets/subscribe.php',
			  data: postdata,
			  dataType: 'json',
			  success: function(json) {
				  if(json.valid === 0) {
					  
					  $('.subscribe-form').addClass("error");
					  $('.subscribe-form input').attr("placeholder", json.error);
				  }
				  else {
					  
					  $('.subscribe-form input,.subscribe-form button').val('').prop('disabled', true);
					  $('.subscribe-form input').attr("placeholder",json.message);
					  $('.subscribe-form').removeClass("error").addClass("success");
				  }
			  }
			});
			return false;
		});
		
});

/**	7. AJAX - CONTACT
 *****************************************************/
 $(document).ready( function(){
	
	$('.contact-form').submit(function() {
		
	        $('.contact-form label .status').remove();
			$('#contact .contact-form.error input,#contact .contact-form.error textarea').removeClass("active");
			
			var postdata = $('.contact-form').serialize();
			
			$.ajax({
				type: 'POST',
				url: 'assets/sendmail.php',
				data: postdata,
				dataType: 'json',
				success: function(json) {
					if(json.nameMessage !== '') {
						
						$('#contact .contact-form #name').addClass("active").attr("placeholder",json.nameMessage);
						$('.contact-form').addClass("error");
						
					}
					if(json.emailMessage !== '') {
						
						$('#contact .contact-form #email').addClass("active").attr("placeholder",json.emailMessage);
						$('.contact-form').addClass("error");
						
					}
					if(json.messageMessage !== '') {
						
						$('#contact .contact-form #message').addClass("active").attr("placeholder",json.messageMessage);
						$('.contact-form').addClass("error");
						
					}
					if(json.nameMessage === '' && json.emailMessage === '' && json.messageMessage === '') {
						
						$('.contact-form').removeClass("error").addClass("success");
						$('#contact .contact-form #message,#contact .contact-form #email,#contact .contact-form #name').attr("placeholder","");
						$('#contact .contact-form #message').attr("placeholder",json.succes);
						$('.contact-form input,.contact-form button,.contact-form textarea').val('').prop('disabled', true);
						
					}
				}
			});
			return false;
		});	

});