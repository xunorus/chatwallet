		/*********************************************************************************************
		.) sweetalert2
		// position: "top-right",
		**********************************************************************************************/

		const ToastTop = Swal.mixin({
			toast: true,
			position: "top-start",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
			iconColor: 'white',
			customClass: {
				popup: 'colored-toast'
			},
		});

		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
			iconColor: 'white',
			customClass: {
				popup: 'colored-toast'
			},
		});

		const Toastcenter = Swal.mixin({
			toast: true,
			position: "top",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
			iconColor: 'white',
			customClass: {
				popup: 'colored-toast'
			},
		});

		const Toastnoclose = Swal.mixin({
			toast: true,
			position: "top",
			iconColor: 'white',
			customClass: {
				popup: 'colored-toast'
			},

		});

		const fixedToast = swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: true,
			showDenyButton: false,
			showCancelButton: true,
			cancelButtonText: 'Now!',
			confirmButtonText: 'later ...',
			denyButtonText: `Close`,
			iconColor: 'white',
			customClass: {
				popup: 'colored-toast'
			},
		});

		const fixedToastLoader = swal.mixin({
			toast: true,
			position: "top-right",
			showConfirmButton: false,
			showConfirmButton: false
		});


		var sweet_loader = '<div class="sweet_loader"><svg viewBox="0 0 140 140" ><g class="outline"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="rgba(0,0,0,0.1)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g><g class="circle"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="#71BBFF" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dashoffset="200" stroke-dasharray="300"></path></g></svg></div>';

		const steps = ['1', '2', '3', '4']
		const Queue = Swal.mixin({
			progressSteps: steps,
			confirmButtonText: 'Next >',
			showClass: { backdrop: 'swal2-noanimation' },
			hideClass: { backdrop: 'swal2-noanimation' }
		})

		/*********************************************************************************************
		.)  SIDEBAR
		**********************************************************************************************/

		// Get the navigation button and add a click event listener
		var navBtn = document.querySelector('.hamburger');
		navBtn.addEventListener('click', plToggle);

		// Define the plToggle function
		function plToggle(event) {
			console.log('TOOGLE NAVBAR', event);
			navBtn.classList.toggle('is-active');

			// Toggle classes for elements with class 'content', 'sidebar', and 'overlay'
			document.querySelector('.sidebar').classList.toggle('isOpen');
			document.querySelector('.overlay').classList.toggle('overlayisOpen');

			// Get the container element with class 'sidebar'
			var container = document.querySelector('.sidebar');
		}

		// Add a click event listener to the overlay element
		document.querySelector('.overlay').addEventListener('click', function (event) {
			console.log('clickeado en nav li');
			plToggle();
		});

