/* 
	Hello, guys!! :)
	JS desenvolvido pela bs.agency em 2020. 

	Façam bom uso :)
*/

jQuery(document).ready(function () {

	// Variáveis:
	var BreakPoint = 1050;
	var WidthDevice = $(window).width();
	var heightDevice = $(window).height();
	// :Variáveis

	// Reload no resize da página:
	var screen = '';
	if (WidthDevice < BreakPoint) {
		screen = 'mobile';
	} else if (WidthDevice > BreakPoint) {
		screen = 'desktop';
	}

	$(window).resize(function () {
		var cur_width = $(window).width();
		if (cur_width < BreakPoint && screen == 'desktop') {
			location.reload();
		} else if (cur_width > BreakPoint && screen == 'mobile') {
			location.reload();
		}
	});
	// :Reload no resize da página    

	// Decodificando SVG:
	$('img.svg').each(function () {
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function (data) {
			var $svg = $(data).find('svg');
			if (typeof imgID !== 'undefined') { $svg = $svg.attr('id', imgID); }
			if (typeof imgClass !== 'undefined') { $svg = $svg.attr('class', imgClass + ' replaced-svg'); } $svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) { $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width')) } $img.replaceWith($svg);
		}, 'xml');
	});
	// :Decodificando SVG

	// Verificando Android ou IOS:
	function getMobileOperatingSystem() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		if (/windows phone/i.test(userAgent)) { // Windows Phone
			$('.iOS').remove();
		} else if (/android/i.test(userAgent)) { // Android
			$('.iOS').remove();
		} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { // iOS
			$('.Android').remove();
		}
	} getMobileOperatingSystem();
	// :Verificando Android ou IOS


	// Scroll suave
	$('nav a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;

		$('html, body').animate({
			scrollTop: targetOffset
		}, 500);
	});




	//TOPO
	$('#topo .login').click(function (e) {
		e.preventDefault();
		$('.setinha').addClass('ativada')
		$('.bgamarelo').css('opacity', '0')
		$('.bgvermelho').addClass('ativado')
		$('form').fadeIn()
		$('.boneco').addClass('some')
		$('#topo').css('background-color', '#B3003A')
	})


	// Trava Scroll se for home
	$(document).ready(function () {
		if ($('body').attr('id') == 'essencia' && $(window).scrollTop() == 0) {
			$('html, body').css({
				overflow: 'hidden',
				height: '100%'
			});
		}
	})


	// Se for clicado no link da Home nao vai para o "login"
	$(document).ready(function () {

		let url = window.location.href;
		if (url.includes('direct')) {
			document.getElementById('topo').style.display = 'none';
			$('main').css('margin-top', '0');

			$('html, body').css('overflow', 'auto');
		}
	})


	$('.login').click(function (e) {
		e.preventDefault()
		$(this).css('opacity', '0')
		$(this).css('cursor', 'unset')
		$('form').fadeOut();
		$('.setinha').removeClass('desktopitem')
		$('.setinha').css('display', 'none')
		$('#topo').css('background-color', 'var(--secundaria)')
		$('.vermais p').addClass('active')


		// Libera o scroll
		$('html, body').css('overflow', 'auto');
	})



	// Controle do ver mais
	$(document).scroll(function () {
		if ($(window).scrollTop() === 0) {
			$('.toporodape p').fadeIn();
			$('.toporodape span').fadeIn();
		} else {
			$('.toporodape p').fadeOut();
			$('.toporodape span').fadeOut();
		}
	});



	// QUIZ
	$('.quiz').each(function () {

		var sessao = $(this).parent().parent().attr('id');
		sessao = '#' + sessao;

		var divsDir = $(this).find('.dir div')
		var divEsq = $(this).find('.esq')


		$(divEsq).click(function () {
			$(this).removeClass('certo errado')
		})


		$(divsDir).each(function () {
			$(this).click(function () {
				var spanActive = $(this).find('span.active');

				if (spanActive.hasClass('errado')) {
					$(this).removeClass('certo');
					$(this).addClass('errado');
					$(divEsq).removeClass('certo')
					$(divEsq).addClass('errado')

				} else if (spanActive.hasClass('certo')) {
					$(this).removeClass('errado');
					$(this).addClass('certo');
					$(divEsq).removeClass('errado')
					$(divEsq).addClass('certo')

				} else {
					$(this).removeClass('certo errado')
					$(divEsq).removeClass('certo errado')
				}

				setTimeout(function () {
					$(divEsq).find('.avancar').click()
				}, 3500)
			})
		})

		var total = $(sessao + ' .cima span').length;
		$(sessao + ' #total').text(total);
		var ativo = $(sessao + ' .dir span.active').index() + 1;
		$(sessao + ' #atual').text(ativo);


		$(sessao + ' .setas .avancar').click(function () {
			$(divEsq).removeClass('certo errado')
			$(divsDir).removeClass('certo errado')

			var ativo = $(sessao + ' .dir span.active');
			var index = ativo.index();
			var proximo = index + 1;
			var anterior = index - 2;

			// Controle de opacidade das setas
			if (proximo + 1 == total) {
				$(this).addClass('op20');
			}

			if (proximo + 1 != total) {
				$(sessao + ' .setas .voltar').removeClass('op20');
			}

			// Controle de limites das setas
			if (proximo == total) {
				return false;
			} else {

				$(sessao + ' .dir span.active').removeClass('active');
				$(sessao + ' #atual').text(index + 2)

				$(sessao + ' .dir span').each(function () {
					if ($(this).index() == proximo) {
						$(this).addClass('active');
					}
				})
			}
		})

		var ativo = $(sessao + ' .dir span.active').index();

		$(sessao + ' .setas .voltar').click(function () {

			$(divEsq).removeClass('certo errado')
			$(divsDir).removeClass('certo errado')

			var ativo = $(sessao + ' .dir span.active');
			var index = ativo.index();
			var proximo = index + 1;
			var anterior = index - 1;

			// Controle de opacidade das setas
			if (anterior == total - total) {
				$(this).addClass('op20');
			}

			if (anterior != total - total) {
				$(sessao + ' .setas .avancar').removeClass('op20');
			}

			// Controle de limites das setas
			if (anterior == -1) {
				return false;
			} else {

				$(sessao + ' .dir span.active').removeClass('active');
				$(sessao + ' #atual').text(index)

				$(sessao + ' .dir span').each(function () {
					if ($(this).index() == anterior) {
						$(this).addClass('active');
					}
				})
			}
		})

		// Controle de cores
		// $(sessao + ' .cima').click(function () {
		// 	$(sessao + ' .quiz').removeClass('certo')
		// 	$(sessao + ' .quiz').toggleClass('errado')

		// })

		// $(sessao + ' .baixo').click(function () {
		// 	$(sessao + ' .quiz').removeClass('errado')
		// 	$(sessao + ' .quiz').toggleClass('certo')
		// })

		// $(sessao + ' .principal').click(function () {
		// 	$(sessao + ' .quiz').removeClass('errado certo')
		// })

	})



	// Aplicacoes Slider
	$('.slick').slick({
		dots: true,
		arrows: true,
		nextArrow: '<div class="slick-next"></div>',
		prevArrow: '<div class="slick-prev"></div>',
		speed: 400,
		infinite: false,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		swipeToSlide: true,
		touchMove: true,
		adaptiveHeight: true
	});


	$(document).ready(function () {
		$('.slick-prev').css('background-image', 'url("assets/img/voltar-white.png")');
	})


	$('.slick-prev').click(function () {
		$('.slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			if (nextSlide == '0') {
				$('.slick-prev').css('background-image', 'url("assets/img/voltar-white.png")');
			} else {
				$('.slick-prev').css('background-image', 'url("assets/img/voltar.png")');
			}
		});
	})

	$('.slick-next').click(function () {
		$('.slick-prev').css('background-image', 'url("assets/img/voltar.png")');

		$('.slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

			if (nextSlide != 0 && nextSlide != 1) {
				$('.slick-next').css('background-image', 'url("assets/img/avancar-white.png")');
			} else {
				$('.slick-next').css('background-image', 'url("assets/img/avancar.png")');
			}
		});
	})




	// Beer Slider		
	window.onload = (function () {
		var altura = $('#beer-slider').height() - 4 + 'px';

		$('.beer-handle').append('<div class="risco"></div>');
		$('.risco').css('height', altura);

		// var inicial = $('.wrapper-slider').attr('inicial');
		// $('.beer-reveal').css('width', inicial)
		// $('.beer-handle').css('left', inicial)

	})


	// $(".wrapper-slider").click(function(){		
	// 	var inicial = $(this).attr('inicial');
	// 	var final = $(this).attr('final');

	// 	if ( $(this).attr('estagio') == 'final' ) {					
	// 			$(".beer-handle").animate({left:inicial}, 300)
	// 			$(".beer-reveal").animate({width:inicial}, 300)
	// 			$(this).attr('estagio','inicial');
	// 		} else {
	// 			$(".beer-handle").animate({left:final}, 300)
	// 			$(".beer-reveal").animate({width:final}, 300)
	// 			$(this).attr('estagio','final');
	// 		}
	// })




	// Accordeon		
	$('.wrapper-acc .box').click(function () {
		$(this).addClass('ativo');
		$(this).siblings().removeClass('ativo');
	})


	// Definir cores de background dos blocos em Ilustracao
	$('.bloco').each(function (index, element) {
		var str = element.innerText
		var ultima = str.substring(str.lastIndexOf('#'))
		ultima = ultima.replace(/\s/g, '');
		$(this).css('background-color', ultima);
	});


	// Procurar cor e setar como background
	document.onload = getBgColor()

	function getBgColor() {
		let boxes = document.querySelectorAll('.accordeon .box .desc');
		let box = document.querySelectorAll('.box');

		for (var i = 0; i < boxes.length; i++) {
			texto = boxes[i].innerText;
			regexp = /(#......)/;
			cor = texto.match(regexp)[0];
			box[i].style.backgroundColor = cor;
		}
	}

	// Navegacao Footer
	document.onload = atualizaFooter();

	function atualizaFooter() {
		var links = $('.link-abre');
		var primeiroLink = $('.links ul:first-child a');
		var primeiroLinkUrl = primeiroLink.attr('href');
		var primeiroLinkTexto = primeiroLink[0].innerText;

		var ativo = $(links).parent().find('.active');
		var proximo = $(ativo).parent().next().find('.link-abre').attr('href');
		var proximoNome = $(ativo).parent().next().find('.link-abre').text();
		var linkFooter = $('footer a')
		var nomeFooter = $('footer p.txt--bold')
		$(linkFooter).attr('href', proximo)
		$(nomeFooter).text(proximoNome)

		if (proximoNome < 1) {
			$(linkFooter).attr('href', primeiroLinkUrl)
			$(nomeFooter)[0].innerHTML = primeiroLinkTexto;
		}

	}

	// Funções executadas apenas na versão Desktop:
	function DesktopVersion() {

		//Nav Tabs		
		$(document).ready(function () {
			setTimeout(function () {
				var sizeInitial = $('.nav_tabs li.active').width();
				$('.slider-bar').css('width', sizeInitial)
			}, 300);
		})

		$('.modulo-abas').each(function () {
			var li = $(this).find('.nav li');
			var slider = $(this).find('.slider-bar');
			var tab = $(this).find('.tab');

			$(li).click(function () {
				var size = $(this).width();
				var pos = $(this).position().left
				var nav = $(this).attr('nav')

				li.removeClass('active')
				$(this).addClass('active')

				tab.removeClass('active')
				$(tab[nav]).addClass('active')

				$(slider).width(size)
				$(slider).css('margin-left', pos)
			})

		})

		// Navegacao Menu		
		$('.link-abre').click(function (event) {
			event.preventDefault();
			window.location.href = ($(this).attr('href'));
			$('.link-abre.active').siblings().fadeIn(200);
		})

		// Controle de abertura do menu
		document.onload = showMenu();

		function showMenu() {
			$('.link-abre.active').siblings().fadeIn(200);

			if ($('body').attr('id') == 'downloads') {
				$('.link-abre.active').removeClass('active')
			}
		}

	}
	// :Funções executadas apenas na versão Desktop



	// Funções executadas apenas na versão Mobile:
	function MobileVersion() {

		// Abrir e fechar menu no Mobile
		$('.link-abre.active').siblings().fadeIn(200);

		$('#abrirmenu').click(function () {
			if ($(this).hasClass('MenuAberto')) {

				$(this).removeClass('MenuAberto');
				$('.links').removeClass('LinksAberto');

				$('.menu').css('height', '66px');
				$('nav .links').css('height', '0');

			} else {

				$(this).addClass('MenuAberto');
				$('.links').addClass('LinksAberto');

				$('.menu').css('height', '100vh');
				$('nav .links').css('height', '100vh');
			}
		});

		$('nav li a').click(function () {
			$('.menu').css('height', '66px');
		})

		$('.link-abre a').click(function (e) {
			e.preventDefault();

			$('#abrirmenu').click();
		})



		// TOPO
		$('#topo .login').click(function (e) {
			e.preventDefault();
			// $(this).css('display', 'none')
			$('.logo , .bemvindo, .olaalo, .setinha').addClass('acessar')
		})

		$('.login').click(function (e) {
			e.preventDefault()
			$('.logo').css('display', 'none')
			$('.setinha').removeClass('mobileitem')
			$('.bemvindo, .olaalo').addClass('final')

			$('.menu').css('display', 'block')
			$('.menu').css('z-index', '10')

			$('body, html').css('overflow', 'auto')
			$('body, html').css('height', 'auto')
		})



	}
	// :Funções executadas apenas na versão Mobile



	// Executando versionamentos
	if (WidthDevice <= 900) { MobileVersion(); } else { DesktopVersion(); }
	// FadeIn da página após o carregamento.
	$('body').fadeIn(1000);
	// ScrollTop
	// $('html, body').animate({scrollTop: '0px'}, 600);


});
