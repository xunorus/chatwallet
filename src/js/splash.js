/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'ip-container' ),
		header = container.querySelector( 'header.ip-header' ),
		loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}

	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + Math.random() * 0.1, 1 );

					instance.setProgress( progress );

					// reached the end
					if( progress === 1 ) {
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}

							classie.add( document.body, 'layout-switch' );
							window.removeEventListener( 'scroll', noscroll );
						};

						if( support.animations ) {
							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					}
				}, 80 );
		};

		loader.setProgressFn( simulationFn );
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();

})();
// // main.js
// import 'bootstrap'
// // import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
// // import '@fortawesome/fontawesome-free/css/all.css'

// // import 'sweetalert2';
// import Swal from 'sweetalert2'
// // import 'jquery';

// // import jquery from "jquery";
// // export default (window.$ = window.jQuery = jquery);

// // import 'bootstrap-toggle';

// import QRCodeStyling from 'qr-code-styling';



  
//   /*********************************************************************************************
//   .) triggers FUNCTIONS
//   **********************************************************************************************/
// // Handler that uses various data-* attributes to trigger
// // specific actions, mimicing bootstraps attributes

// // Grab all the trigger elements on the page
// const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

// // Listen for click events, but only on our triggers
// window.addEventListener('click', (evnt) => {
//   const elm = evnt.target;
//   if (triggers.includes(elm)) {
//     const selector = elm.getAttribute('data-target');
//     collapse(selector, 'toggle');
//   }
// }, false);

// // map our commands to the classList methods
// const fnmap = {
//   'toggle': 'toggle',	// toggle
//   'show': 'add',		// add
//   'hide': 'remove'		// remove

// };

// function collapse(selector, command) {
//   const targets = Array.from(document.querySelectorAll(selector));

//   targets.forEach(target => {
//     target.classList[fnmap[command]]('show');	// show
// 	console.table(target.classList);
//   });
// }


  
//   /*********************************************************************************************
//   .) STORAGE FUNCTIONS
//   **********************************************************************************************/
//   // toggleStoredItem =  (item, value) => {
//   //   // function toggleStoredItem(item, value) {
//   //     if (localStorage.getItem(item)){
//   //       localStorage.removeItem(item);
//   //       console.log('Item removed: ',item)
//   //     } else {
//   //       localStorage.setItem(item, value);
//   //       console.log('Item set: ',item)
    
//   //     }
//   //   }
    


// function viewItem(e){let t="https://ipfs.moralis.io:2053/ipfs/"+e;
// window.open(t,"_blank","fullscreen=yes")}

// // function copyItem(e,t){
//   function copyItem(e, addr){
//   if(e.preventDefault(),window.clipboardData&&window.clipboardData.setData)return Toastcenter.fire("CID Copied to Clipboard",t,"success"),window.clipboardData.setData("Text",addr);

//   if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var o=document.createElement("textarea");o.textContent=addr,o.style.position="fixed",document.body.appendChild(o),o.select();

//   try{return Toastcenter.fire("Address copied to Clipboard","","success"),document.execCommand("copy")}
//   catch(e){return console.warn("Copy to clipboard failed.",e),prompt("Copy to clipboard: Ctrl+C, Enter",addr)}
//   finally{document.body.removeChild(o)}}
// }


// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-center',
//   iconColor: 'white',
//   customClass: {
//     popup: 'colored-toast'
//   },
//   showConfirmButton: false,
//   // timer: 1500,
//   // timerProgressBar: true
// })

 

//   /*********************************************************************************************
//   .) RECEIVE TROQ
//   **********************************************************************************************/
//   function receiveTroq (f){

//     console.log('RECEIVE TROQ')
//     openModal('#createTx')

     

//     }

// // receibeTroq



// function updateBalance(newbalance){
//   document.getElementById('mainTitle').innerHTML = newbalance;
//             // $("#mainTitle").textEffect();
// }
//     /*********************************************************************************************
//   .)  QR
//   **********************************************************************************************/
//   async function showQR(address){

// // SHOW QR CODE
// let qrCode= new QRCodeStyling({ 
//         width: 300, 
//         height: 300, 
//         type: "png", 
//         data: address, 
//         image: `troqv3b.png`, 
//         dotsOptions: {
//             color: "var(--shadow1)",
//             type: "rounded"
//         },
//         backgroundOptions: { color: "var(--background)", }, 
//         imageOptions: { crossOrigin: "anonymous", margin: 10 } 
//       });

//       document.getElementById("canvas").innerHTML=''
//       document.getElementById("copy").innerHTML=''
      
//         qrCode.append(document.getElementById("canvas"));
        
//         // show qr
        
//         // setTimeout(() => {
//           canvas.style.display='block';
//         // }, 1000);
        
//         // window["qrCode"];
//         // QRs.push(window["qrCode"])
//     }

//   /*********************************************************************************************
//   .)  GENERATE QR
//   **********************************************************************************************/
//   async function showCIDQR(cid){
//       console.log(cid)
//       let linkIPFS = `${cid}`
//       const cidqr = new QRCodeStyling({ width: 300, height: 300, type: "png", data: linkIPFS, image: `troqv3b.png`, dotsOptions: { color: "#1568B0", type: "extra-rounded" }, backgroundOptions: { color: "#fff", }, imageOptions: { crossOrigin: "anonymous", margin: 0 } });
//       let cidqrRaw =   await cidqr.getRawData('png')
//       let cidqrURL =  URL.createObjectURL(cidqrRaw)
//       console.log('xqr: ', cidqr)

//     Swal.fire({ text: cid, imageUrl: cidqrURL, imageWidth: 300, imageHeight: 300, imageAlt: 'QR Code image' })
//   }
//   /*********************************************************************************************
//   .) INIT
//   **********************************************************************************************/
  
//   let init = async () => {
//     console.log('init')
//         // Swal.fire( 'Deleted!', 'Your wallet has been deleted.', 'success' )

//   walletOptCreate.style.display = 'none'
//   walletOptConnect.style.display = 'none'
//   walletDelete.style.display = 'none'

// let jsonWallet = localStorage.getItem('jsonWallet')
// if(!jsonWallet){
//   // if true, there is no json wallet
//   console.log('there is NO json wallet')

//   // createwallet / metamask
//   walletOptCreate.style.display = 'inline-block'

// } else{
//   // if false, there is alreade a wallet
//   console.log('YES, there is json wallet')
 
//  let xw= localStorage.getItem('jsonWallet')
//  let w =  JSON.parse(xw)
//  let addr = '0x'+w.address.toUpperCase();
//  var shortAddr = addr.substring(0, 6) + "..."+ addr.substring(38, 42);

//  console.log('ADDRESS:', addr ,shortAddr)

// //  SHOW QR
// showQR(addr);
// // canvas.style.display='block'

 
//   // connect
//   walletOptConnect.style.display = 'inline-block'
//   walletDelete.style.display = 'inline-block'


//   // ui touches
//   // walletOptConnect.style.display = 'none';
//             walletOptCreate.style.display = 'none';
//             document.getElementById('loader').style.display='none'
//             var shortAddr = addr.substring(0, 6) + "..."+ addr.substring(38, 42);
          
//             document.getElementById('addr').innerHTML = shortAddr;
//             document.getElementById('copy').innerHTML += `<i class="fa-solid fa-clipboard" onclick="event.stopPropagation();copyItem(event,'${addr}')"></i>`;
            
//             // QR
//             canvas.style.display='block'

//             // $("#addr").textEffect();
//             document.getElementById('addr').classList.add("glow");

            
//             // display solde
//             // document.getElementById('mainTitle').innerHTML = '13.11';
//             // $("#mainTitle").textEffect();

//             // show buttons 
//           // document.getElementById('wallie').style.display='inline';
   
  

// }

// checkWeb3ProviderRecursively()


// // $("#mainTitle").textEffect();



//   }

//   init();
  
//   let firstCall;
//   // function checkWeb3ProviderRecursively(firstCall = true) {
//   function checkWeb3ProviderRecursively() {
//     if (typeof window.ethereum !== 'undefined') {
//         console.log("web3 provide detected")
//         metamaskBtn.style.display= 'block'

//         // reload the page
//         // if(!firstCall) document.location.reload()
//     } else {
//         console.log("Please install metamask")
//         metamaskBtn.style.display= 'none'
//         // add a delay here as you want
//         // checkWeb3ProviderRecursively(false)
//     }
// }
 

//     // *********************************
//     // decryptWallet
//     // ethers.Wallet.fromEncryptedJson( json , password [ , progress ] ) ⇒ Promise< Wallet >
//     // *********************************
//       async function decryptWallet(pwd) {
//         let encryptedjson = localStorage.getItem('jsonWallet')
//         let ew = JSON.parse( encryptedjson)
//         console.log('pub key of wallet in localstorage:', ew.address)


//         let wallet;
//         try { wallet = await ethers.Wallet.fromEncryptedJson(encryptedjson, pwd)
//           .then(async (myWallet) => {
//             console.log('mywallet: ', myWallet)
//             console.log('mywallet Address: ', myWallet.address)
//             displayDecrypt.innerHTML= myWallet.address;
//             let addr;

//             try { addr = await myWallet.getAddress(); }
//             catch (error) {
//                 console.log('ERROR in myWallet:', error);
//                 document.getElementById('loader').style.display='none';
//                 return;
//             }

//             console.log('ADDRESS SUCCESS:', addr)
//             walletOptCreate.style.display = 'none';
//             walletOptConnect.style.display = 'none';
//             document.getElementById('loader').style.display='none'
//             var shortAddr = addr.substring(0, 6) + "..."+ addr.substring(38, 42);
          
//             document.getElementById('addr').innerHTML = shortAddr;
//             document.getElementById('copy').innerHTML += `<i class="fa-solid fa-clipboard" onclick="event.stopPropagation();copyItem(event,'${addr}')"></i>`;
            
//             // QR
//             canvas.style.display='block'

//             // $("#addr").textEffect();
//             document.getElementById('addr').classList.add("glow");

            
//             // display solde
//             document.getElementById('mainTitle').innerHTML = '13.11';
//             // $("#mainTitle").textEffect();

//             // show buttons 
//           document.getElementById('wallie').style.display='inline';
   


//             })
//       }
//       catch (error) {
//         console.log('ERROR FRIN wallet:', error);
//         document.getElementById('loader').style.display='none';
//       //   messages.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
//       //  Password incorrect.
//       //     <div>`
//         await Toast.fire({
//           icon: 'error',
//           title: 'Password incorrect'
//         })


        
//         init();

//         return;
//         }




// console.log('wallet from localstorage:', wallet)


//       }


//   /*********************************************************************************************
//   .) RESTORE WALLET
//   **********************************************************************************************/
//       async function restoreWallet(){
//         console.log('RESTORE WALLET:')
//       }

//   /*********************************************************************************************
//   .) DELETE WALLET
//   **********************************************************************************************/
//   async function deleteWallet(){
  
//     Swal.fire({
//       title: 'Delete wallet?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.removeItem('jsonWallet')
//         init();
//         Swal.fire( 'Deleted!', 'Your wallet has been deleted.', 'success' )
//       }
//     })
//   }
      
//   /*********************************************************************************************
//   .) OPEN / CREATE WALLET
//   **********************************************************************************************/
//   function writepassword (f){
//     if(f=='open'){ 
//       //OPEN WALLET
//       console.log('write password to open wallet')
//       Swal.fire({
//           title: 'Decrypt your wallet',
//           input: 'password',
//           inputAttributes: { autocapitalize: 'off' },
//           showCancelButton: true,
//           confirmButtonText: 'Enter',
//           showLoaderOnConfirm: true,
//           backdrop: true,
//           preConfirm: (login) => { },
//           allowOutsideClick: () => {
//               const popup = Swal.getPopup()
//               popup.classList.remove('swal2-show')
//               setTimeout(() => { popup.classList.add('animate__animated', 'animate__headShake') })
//               setTimeout(() => { popup.classList.remove('animate__animated', 'animate__headShake') }, 500)
//               return false
//           },

//     })
//     .then((result) => {
//     if (result.isConfirmed) {
//         // console.log('RESULT:',result.value)
        
//         walletOptCreate.style.display = 'none'
//         walletOptConnect.style.display = 'none'
//         walletDelete.style.display = 'none'
//         document.getElementById('loader').style.display='block'
//         messages.innerHTML = '';

//         if(result.value ==''){
//           console.log('IS EMPTY');
//            Toast.fire({ icon: 'error', title: 'Password cannot be empty' });
//           // document.getElementById('loader').style.display='none';
//           init();


//           return;
//         }
//         decryptWallet(result.value)

//         return result.value
//     } 
//     })
//       return
//     }


//     //////////////////////
//     // CREATE WALLET
//     Swal.fire({
//     title: 'Create a password to encrypt your wallet',
//     input: 'password',
//     inputAttributes: {
//         autocapitalize: 'off'
//     },
//     showCancelButton: true,
//     confirmButtonText: 'create',
//     showLoaderOnConfirm: true,
  
//   inputValidator: (value) => {
//     if (!value) {
//       return 'You need to set a password to create your wallet!'
//     }
//   },

//     allowOutsideClick: () => {
//         const popup = Swal.getPopup()
//         popup.classList.remove('swal2-show')
//         setTimeout(() => { popup.classList.add('animate__animated', 'animate__headShake') })
//         setTimeout(() => { popup.classList.remove('animate__animated', 'animate__headShake') }, 500)
//         return false
//     },

//     })
//     .then((result) => {
//     if (result.isConfirmed) {
//         console.log('PASSWORD RESULT:',result.value)
        
//         createWallet(result.value)
//         init()
//         return result.value
//     } 
//     })


// }


//   /*********************************************************************************************
//   .) CREATE WALLET
//   **********************************************************************************************/
//   async function createWallet(pwd){

//     const wallet = ethers.Wallet.createRandom()
//     console.log('address:', wallet.address)
//     console.log('mnemonic:', wallet.mnemonic.phrase)
  
//       displayMnemonic.innerHTML = ` <div  id="loaderCW"  > <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> creating encrypted wallet ... </div> `

//     // SAVE TO LOCALSTORAGE (encrypted?)
//     console.log('password: ',pwd)
//     const promisseJSON = wallet.encrypt( pwd);
//     promisseJSON.then((jsonWallet) => {
//     console.log(jsonWallet)
//     console.log('WALLET ENCRYPTED')

//     // loaderCW
//     document.getElementById('loaderCW').innerHTML=`
//     <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
//   <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
//   </symbol>
//   <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
//   </symbol>
//   <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//   </symbol>
// </svg>

//     <div class="alert alert-success d-flex align-items-center" role="alert">
//   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
//   <div>
//     Wallet encrypted and saved into localstorage
//   </div>
// </div>
//     `


//     localStorage.setItem('jsonWallet', jsonWallet)
//     console.log(' SAVED INTO LOCALSTORAGE')
 
//     walletOptCreate.style.display = 'none'
//         walletOptConnect.style.display = 'none'
//         document.getElementById('loader').style.display='block'
 

//         displayMnemonic.innerHTML = ` 
//     <h3>WRITE DOWN YOUR MNEMONIC PHRASE</h3>
//     <div id='wmnem'>${wallet.mnemonic.phrase}
//       </div>`



// setTimeout(() => {
//   document.getElementById("closeWalletBkp").disabled = false;

//   document.getElementById('loader').style.display='none'

// init();
// }, 5000);

        
//     // document.getElementById("closeWalletBkpx").disabled = false;

//     //   localStorage.setItem('Up_JSON', JSON.stringify(UPJSON));

//     });


//     setTimeout(() => {
//     openModal('#walletHidden')

//     }, 50);



//     }


//   /*********************************************************************************************
//   .) UI FORM
//   **********************************************************************************************/
//   function openModal(id,event){
//     console.log('openingModal', id,event)
//     // if (!user) { 
   
//     setTimeout(() => {
//       var myModal = new bootstrap.Modal(document.querySelector(`${id}`))
//       myModal.show(event)
//     }, 50);
//   }

//   document.addEventListener("click", function(evnt){
//     console.log(evnt.target.id);
//     // walletOptCreate
// });

//   /*********************************************************************************************
//   .) DARKMODE
//   **********************************************************************************************/
//     const toggleButton = document.querySelector('.darklight');
//     const colors = document.querySelectorAll('.color');
    
//     colors.forEach(color => {
//     color.addEventListener('click', (e) => {
//       colors.forEach(c => c.classList.remove('selected'));
//       const theme = color.getAttribute('data-color');
//       document.body.setAttribute('data-theme', theme);
//       color.classList.add('selected');
//     });
//     });
    

//   let uimode = localStorage.getItem("uimode");
//     if(uimode){
//       console.log("uimode:", uimode)
//       document.body.classList.toggle('dark-mode');
//       // $('#dmode').bootstrapToggle('on')	
//       // document.getElementById('dmode').bootstrapToggle('on');
      
      
//     } else{
//       console.log('no hay uimode')
//       // $('#dmode').bootstrapToggle('off')	
//       // document.getElementById('dmode').bootstrapToggle('off');

//     }

// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');

//   if(document.body.classList.contains('my-class-name')){
//     //do something
//   console.log('HASCLASS dark mode!');

    
//   };

//   toggleStoredItem('uimode', 'dark');
//   console.log('togled dark mode!');
// });

//   /*********************************************************************************************
//   .) STORAGE FUNCTIONS
//   **********************************************************************************************/
//   function toggleStoredItem (item, value)  {
//     if (localStorage.getItem(item)){
//       localStorage.removeItem(item);
//       console.log('Item removed: ',item)
//     } else {
//       localStorage.setItem(item, value);
//       console.log('Item set: ',item)
  
//     }
//   }

    