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

 /******************************************************************************************************************************************************************************************
		.) DICTIONARY
		********************************************************************************************************************************************************************************************/
		var userLang = navigator.language || navigator.userLanguage;
		var lang = navigator.language || navigator.userLanguage; //no ?s necessary

		const langs = document.querySelectorAll("[lang]");
		const langen = document.querySelectorAll('[lang="en"]');
		const langfr = document.querySelectorAll('[lang="fr"]');
		const langes = document.querySelectorAll('[lang="es"]');
		var dictionary = {
			en: {
				IAMDescription: 'IAM-(Your Names initials )-(Your date of birth )',
				names: 'Name/s',
				surnames: 'Surname/s',
				name: 'Name and surname initials',
				placeofbirth: 'place of birth',
				address: 'address',
				createIAM: '0 -Create IAM code',
				addDocs: '1 -Add documents',
				title: "Upload to IPFS",
				upload: "Upload",
				adddoc: "Add document",
				addcourtesytranslation: "Add courtesy translation",
				preview: "preview",
				delete: "delete",
				selPDFfirst: "you have to select a PDF first!",
				setTitlefirst: " Give this upload a title first...",
				bravo: "Bravo!",
				uploadtoipfs: "upload your documents to InterPlanetary File System!",
				desc: 'Built on top of the InterPlanetary File System (IPFS), a distributed and content-addressed file system designed to be reliable, resilient and future-proof.',
				signThisToLogin: "Welcome to OPPT-ONE! Sign this message to prove you have access to this wallet and we'll log you in. This won't cost you any Ether.",
				back: 'back',
				nft_name: "Title",
				enterDescription: 'Description',
				enterDate: 'Date of birth',
				pricePerItem: 'price',
				address: 'address',
				econtact: 'electronic contact',
				wallet: 'Wallet',
				uploadcourtesytranslations: "upload courtesy translations of this document",
				addanother: " Add another",
				close: "Close",
				connect: "CONNECT",
				setpassword: "Set password",
				createwallet: "CREATE WALLET",
				restorewallet: "RESTORE WALLET",
				walletCreation: "CREATING TX",
				createpasswordtoencryptwallet: 'Create a password to encrypt your local wallet',
				decryptlocalwallet: 'Decrypt your local wallet',
				addAddress: 'Add a new address',
				addAlias: 'Add a new alias',
				yourkeysyourdata: "Your keys, your data",
				utilsfortheautodetermined: "Publish your self-determination documents according to the OPPT mechanism",
				config: "Config",
				filloutfield: "Please fill out this field",
				publicipfs: "Publish to IPFS",
				decryptingwallet: "Decrypting wallet to sign hash...",
				restore: "Restore",
				walletrestore: "Restore wallet",
				start: "Tutorial",
				getvalidation: "get validation",
				askpeer: "demander votre pair de payer le gas",
				txverification: "Verify Tx",
				stopqrvideo: "stop scanning",
				retry: "retry",
				scanqr: "Scan QR",
				makedeposit: "Make a deposit",
				cancel: "Cancel"
			},
			fr: {
				IAMDescription: 'IAM-(Les initiales de vos noms )-(Votre date de naissance )',
				names: 'Prenom/s',
				surnames: 'Nome/s',
				name: 'initials de votre Nom et prenom',
				placeofbirth: 'lieu de naissance',
				address: 'address',
				createIAM: '0 -Créer le code IAM',
				addDocs: '1 - Ajouter des documents',
				title: "Télécharger sur IPFS",
				upload: "Télécharger",
				adddoc: "Ajouter document",
				addcourtesytranslation: "Ajouter une traduction de courtoisie",
				preview: "prévisualisation",
				delete: "effacer",
				selPDFfirst: "vous devez d'abord sélectionner un PDF!",
				setTitlefirst: " Donnez d'abord un titre à ce téléchargement...",
				bravo: "Bravo!",
				uploadtoipfs: "TÉLÉCHARGER tes fichiers PDF sur le système de fichiers interplanétaire!",
				desc: `Construit sur le système de fichiers interplanétaire (IPFS), un système de fichiers contenu-adressable et distribué conçu pour être fiable, résilient et à l'épreuve du temps.`,
				signThisToLogin: "Bienvenue sur OPPT-ONE! Signez ce message pour montrer que vous avez accès à votre clé privée pour vous connecter. Cela ne vous coûtera aucun Ether.",
				back: 'retour',
				nft_name: "Titre",
				enterDescription: "Description",
				enterDate: 'Date de naisance',
				pricePerItem: "Prix",
				address: 'adresse',
				econtact: 'contact électronique',
				wallet: 'Portefeuille',
				uploadcourtesytranslations: "télécharger des traductions de courtoisie de ce document",
				addanother: "Ajouter un autre",
				close: "Fermer",
				connect: "CONNECTER",
				setpassword: "Définir le mot de passe",
				createwallet: "CRÉER LE WALLET",
				restorewallet: "RESTAURER WALLET",
				walletCreation: "CRÉATION DU PORTEFEUILLE",
				createpasswordtoencryptwallet: 'Créer un mot de passe pour chiffrer votre portefeuille local',
				decryptlocalwallet: 'Décryptez votre portefeuille local',
				addAddress: 'Ajouter un nouveau contact',
				addAlias: 'Ajouter un nouveau alias',
				yourkeysyourdata: "Vos clés, vos données",
				utilsfortheautodetermined: "Publiez vos documents d'autodétermination selon le mécanisme OPPT",
				config: "Paramètres",
				filloutfield: "Veuillez remplir ce champ",
				publicipfs: "Publiquer sur IPFS",
				decryptingwallet: "Déchiffrer le portefeuille pour signer le hachage...",
				restore: "Restaurer",
				walletrestore: "Restaurer wallet",
				start: "Tutorial",
				getvalidation: "get validation",
				askpeer: "Demandar pago de gas",
				txverification: "Verifier Tx",
				stopqrvideo: "stop qr scanner",
				retry: "réessayer",
				scanqr: "scanner le code QR",
				makedeposit: "Make a deposit",
				cancel: "Cancel"
			},
			es: {
				IAMDescription: 'IAM-(Las iniciales de su nombre )-(fecha de nacimiento )',
				names: 'Nombre/s',
				surnames: 'Apellido/s',
				name: 'Iniciales de su nombre y apellido',
				placeofbirth: 'lugar de nacimiento',
				address: 'direccion',
				createIAM: '0 -Crear el código IAM',
				addDocs: '1- Agregar documentos',
				title: "Sube tus documentos a IPFS",
				upload: "Cargar documento",
				adddoc: "Agregar documento",
				addcourtesytranslation: "Agregar traducción de cortesía",
				preview: "Previsualizar",
				delete: "Borrar",
				selPDFfirst: "¡Tienes que seleccionar un PDF primero!",
				setTitlefirst: " Dale un título a antes de subir el documento...",
				bravo: "¡Bravo!",
				uploadtoipfs: "¡Sube tus documentos al sistema de archivos interplanetario!",
				desc: 'Construido sobre el Sistema de archivos interplanetarios (IPFS), un sistema de archivos distribuido y dirigido por contenido diseñado para ser confiable, resistente a la censura y de prueba futura.',
				signThisToLogin: "¡Bienvenido a OPPT-ONE! Firme este mensaje para demostrar que tiene acceso a su llave privada para ingresar. Esto no le costará ningún Ether.",
				back: 'volver',
				nft_name: "titulo",
				enterDescription: 'Descripcion',
				enterDate: 'Fecha de nacimiento',
				pricePerItem: 'precio',
				address: 'Direccion',
				econtact: 'contacto electronico',
				wallet: 'Billetera',
				uploadcourtesytranslations: "subir traducciones de cortesía de este documento",
				addanother: "Agrega otro",
				close: "Cerrar",
				connect: "Conectarse a OPPT",
				setpassword: "Configurar la Contraseña",
				createwallet: "CREAR LA WALLET",
				restorewallet: "RESTAURAR LA WALLET",
				walletCreation: "CREANDO WALLET",
				createpasswordtoencryptwallet: 'cree una contraseña para encriptar su wallet local',
				decryptlocalwallet: 'Desencriptar la billetera',
				addAddress: 'Agregar una nuevo contacto',
				addAlias: 'Agregar una nuevo alias',
				yourkeysyourdata: "Tus llaves, tus datos",
				utilsfortheautodetermined: "Publique sus documentos de autodeterminacion segun el mecanismo OPPT",
				config: "Configuración",
				filloutfield: "Por favor rellene este campo",
				publicipfs: "Publicar en IPFS",
				decryptingwallet: "Descifrar billetera para firmar hash...",
				restore: "Restaurar",
				walletrestore: "Restaurar wallet",
				start: "Tutorial",
				getvalidation: "get validation",
				askpeer: "demandar pago de gas",
				txverification: "Verificar Tx",
				stopqrvideo: "stop qr scanner",
				retry: "reintentar",
				scanqr: "Escanear QR",
				makedeposit: "Deposita fondos",
				cancel: "Cancelar"
			}
		};

		function set_lang(dictionary) {

			document.querySelectorAll("[data-translate]").forEach(function (element) {
				if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
					console.log('setlang found a Textarea');
				} else {
					element.innerHTML = dictionary[element.dataset.translate];
				}
			});


		}

		function selectText(lang) {
			switch (lang) {
				case "en":
					set_lang(dictionary.en);
					window.globalLang = "en";
					break;
				case "fr":
					set_lang(dictionary.fr);
					window.globalLang = "fr";
					break;
				case "es":
					set_lang(dictionary.es);
					window.globalLang = "es";
					break;
				default:
					set_lang(dictionary.en);
					window.globalLang = "en";
			}
		}

		// STORAGE

		// Swap languages when menu changes
		let langswitch = document.getElementById("langswitch");
		langswitch.onchange = function () {
			var lang = this.value;
			localStorage.setItem("lang", lang);
			selectText(lang);
		};


		// *********************************
		// RELOAD TRANSLATIONS
		// *********************************
		function reloadTranslations() {

			let savedLang = localStorage.getItem("lang");
			if (savedLang) {
				let element = document.querySelector(`option[value='${savedLang}']`);
				element.selected = true;
				selectText(savedLang);
			} else {
				console.log("NO hay LANG GUARDADO, muestra default lang: en ");
				set_lang(dictionary.en);
				window.globalLang = "en";
			}
		}//fin reloadTranslations

		reloadTranslations()

	
		/*********************************************************************************************
		.) MANAGE MODALS
		**********************************************************************************************/

		function closeModal() {
			console.log('closing Modal')
			myModal.hide()
		}

		function openModalId(id, event) {
			console.log('openingModal', id, event)
			setTimeout(() => {
				window[id + 'Modal'] = new bootstrap.Modal(document.querySelector(`${id}`));
				window[id + 'Modal'].show(event);

				// Check if the modal is open
				var isModalOpen = window[id + 'Modal']._isShown;
				console.log('Is modal open?', window[id + 'Modal'], isModalOpen);

			}, 50);
		}


		function closeModalId(id, event) {
			console.log('closing modal', id, event)
			var modal = window[id + 'Modal'];
			if (modal && modal._isShown) {
				console.log('Is modal open?', modal, modal._isShown);
				modal.hide(event);
			} else {
				console.log('Modal is not open or not defined.');
			}
	}
  
	
		/*********************************************************************************************
		.) SOUNDS
		**********************************************************************************************/

		function playBeep() {
			var AudioContext = window.AudioContext || window.webkitAudioContext;
			var audioCtx = new AudioContext();

			var oscillator = audioCtx.createOscillator();
			oscillator.type = 'sine'; // Set the waveform type
			oscillator.frequency.value = 864; // Set the frequency (Hz)

			oscillator.connect(audioCtx.destination);
			oscillator.start();

			// Stop the oscillator after 100 milliseconds
			setTimeout(function () {
				oscillator.stop();
			}, 100);
		}
