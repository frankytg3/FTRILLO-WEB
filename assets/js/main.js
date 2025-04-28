/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

			let lastScrollTop = 0; // Variable para almacenar la última posición de scroll
			const navbar = document.querySelector('.navbar'); // Seleccionamos el navbar
		
			window.addEventListener('scroll', function() {
				let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
		
				// Si el scroll es hacia abajo, ocultamos el navbar
				if (currentScroll > lastScrollTop) {
					navbar.classList.add('hidden');  // Agrega la clase 'hidden' para ocultar el navbar
				} else {
					navbar.classList.remove('hidden');  // Elimina la clase 'hidden' para mostrar el navbar
				}
		
				lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Asegura que lastScrollTop no sea negativo
			});
			
		document.getElementById('contact-form').addEventListener('submit', function(event) {
			event.preventDefault();
			
			// Reemplaza estos valores con los tuyos
			const serviceID = 'service_wup6lav';
			const templateID = 'template_y84bydj';
			
			// Asegúrate de que los nombres de los campos coincidan con las variables del template
			// El formulario debe tener campos con name="name", name="email", name="message"
			
			emailjs.sendForm(serviceID, templateID, this)
				.then(function(response) {
					console.log('SUCCESS!', response.status, response.text);
					alert('¡Mensaje enviado correctamente!');
					document.getElementById('contact-form').reset();
				}, function(error) {
					console.log('FAILED...', error);
					alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
				});
		});

	const productos = [
		{ 
			imagen: 'images/N001.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/N002.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/N003.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/N004.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/N005.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/N006.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/N007.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/N008.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43], 
		},
		{ 
			imagen: 'images/N009.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43], 
		},
		{ 
			imagen: 'images/N010.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43], 
		},
		{ 
			imagen: 'images/N011.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43], 
		},
		{ 
			imagen: 'images/N012.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/N013.jpg', 
			estilo: 'style1', 
			titulo: 'New Balance', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43], 
		},
	];

	const productosDamas = [
		{ 
			imagen: 'images/AD001.jpg', 
			estilo: 'style1', 
			titulo: 'Falcon AD', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/AD002.jpg', 
			estilo: 'style1', 
			titulo: 'Falcon AD', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/AD003.jpg', 
			estilo: 'style1', 
			titulo: 'Falcon AD', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/AD004.jpg', 
			estilo: 'style1', 
			titulo: 'Falcon AD', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/AD005.jpg', 
			estilo: 'style1', 
			titulo: 'Falcon AD', 
			descripcion: ' ',
			tipo: 'Dama', // o 'Caballero'
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		}
		
	];
	const productosCaballeros = [
		{ 
			imagen: 'images/A001.jpg', 
			estilo: 'style1', 
			titulo: 'Falcon AD', 
			descripcion: ' ',
			tipo: 'Caballero', 
			precio: 89.99,
			precioAnterior: 120,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/A002.jpg', 
			estilo: 'style1', 
			titulo: 'Falcon AD', 
			descripcion: ' ',
			tipo: 'Caballero', 
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/A003.jpg', 
			estilo: 'style1', 
			titulo: 'Falcon AD', 
			descripcion: ' ',
			tipo: 'Caballero', 
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		{ 
			imagen: 'images/A004.jpg', 
			estilo: 'style1', 
			titulo: 'Falcon AD', 
			descripcion: ' ',
			tipo: 'Caballero', 
			precio: 89.99,
			precioAnterior: 120,
			tallas: [39, 40, 41, 42, 43],
		},
		
	];
	// Mostrar productos generales
	const container = document.getElementById('tilesContainer');
	if (container) {
		productos.forEach(producto => {
			container.innerHTML += `
			<article class="${producto.estilo}">
				<span class="image">
				<img src="${producto.imagen}" alt="${producto.titulo}" />
				</span>
				<a href="https://wa.me/51975294446?text=Hola,%20estoy%20interesado%20en%20el%20modelo%20${encodeURIComponent(producto.titulo)}%20para%20${encodeURIComponent(producto.tipo)}.">
				<div class="content">
					<p>${producto.descripcion}</p>
				</div>
				</a>
				<br>
				<div class="content">
					<h2>${producto.titulo}</h2>
					<p>
						<strong>Precio: </strong> 
						<span class="precio-actual">s/.${producto.precio}</span> 
						<del class="precio-anterior">s/.${producto.precioAnterior ?? ''}</del>
					</p>
					<p><strong>Tallas: </strong> ${producto.tallas.join(', ')}</p>
					<div class="boton-comprar-container">
						<a href="https://wa.me/51975294446?text=Hola,%20estoy%20interesado%20en%20el%20modelo%20${encodeURIComponent(producto.titulo)}%20para%20${encodeURIComponent(producto.tipo)}." 
							target="_blank" 
							class="enlace-comprar">
							<button class="btn-comprar">
								<i class="fab fa-whatsapp"></i> Comprar
							</button>
						</a>
					</div>
				</div>
			</article>
			`;
		});
	}

	// Mostrar productos para damas
	const containerDamas = document.getElementById('damasContainer');
	if (containerDamas) {
		productosDamas.forEach(producto => {
			containerDamas.innerHTML += `
			<article class="${producto.estilo}">
				<span class="image">
				<img src="${producto.imagen}" alt="${producto.titulo}" />
				</span>
				<a href="https://wa.me/51999999999?text=Hola,%20estoy%20interesado%20en%20el%20modelo%20${encodeURIComponent(producto.titulo)}%20para%20${encodeURIComponent(producto.tipo)}.">
				<div class="content">
					<p>${producto.descripcion}</p>
				</div>
				</a>
				<br>
				<div class="content">
					<h2>${producto.titulo}</h2>
					<p>
						<strong>Precio: </strong> 
						<span class="precio-actual">s/.${producto.precio}</span> 
						<del class="precio-anterior">s/.${producto.precioAnterior ?? ''}</del>
					</p>
					<p><strong>Tallas: </strong> ${producto.tallas.join(', ')}</p>
					<div class="boton-comprar-container">
						<a href="https://wa.me/51999999999?text=Hola,%20estoy%20interesado%20en%20el%20modelo%20${encodeURIComponent(producto.titulo)}%20para%20${encodeURIComponent(producto.tipo)}." 
							target="_blank" 
							class="enlace-comprar">
							<button class="btn-comprar">
								<i class="fab fa-whatsapp"></i> Comprar
							</button>
						</a>
					</div>
				</div>
			</article>
			`;
		});
	}

	// Mostrar productos para caballeros
	const containerCaballeros = document.getElementById('caballerosContainer');
	if (containerCaballeros) {
		productosCaballeros.forEach(producto => {
			containerCaballeros.innerHTML += `
			<article class="${producto.estilo}">
				<span class="image">
				<img src="${producto.imagen}" alt="${producto.titulo}" />
				</span>
				<a href="https://wa.me/51999999999?text=Hola,%20estoy%20interesado%20en%20el%20modelo%20${encodeURIComponent(producto.titulo)}%20para%20${encodeURIComponent(producto.tipo)}.">
				<div class="content">
					<p>${producto.descripcion}</p>
				</div>
				</a>
				<br>
				<div class="content">
					<h2>${producto.titulo}</h2>
					<p>
						<strong>Precio: </strong> 
						<span class="precio-actual">s/.${producto.precio}</span> 
						<del class="precio-anterior">s/.${producto.precioAnterior ?? ''}</del>
					</p>
					<p><strong>Tallas: </strong> ${producto.tallas.join(', ')}</p>
					<div class="boton-comprar-container">
						<a href="https://wa.me/51999999999?text=Hola,%20estoy%20interesado%20en%20el%20modelo%20${encodeURIComponent(producto.titulo)}%20para%20${encodeURIComponent(producto.tipo)}." 
							target="_blank" 
							class="enlace-comprar">
							<button class="btn-comprar">
								<i class="fab fa-whatsapp"></i> Comprar
							</button>
						</a>
					</div>
				</div>
			</article>
			`;
		});
	}
	
	

})(jQuery);