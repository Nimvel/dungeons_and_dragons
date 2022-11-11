// let ghost: HTMLElement = document.querySelector("#ghost");
	  
// 	let headerFloatie = document.querySelector(".floatie");
// 	  let headerFloatieSVG = document.querySelector(".floatie svg");
// 	let permanentlyHideFloatie = false;

//     let isFiring = false;

//     let mouseX = 0;
//     let mouseY = 0;

//     let dX = 0;
//     let dY = 0;

//     let xPos = 0;
//     let yPos = 0;
	  
// 	let ghostTimeElapsed = 0;
// 	let ghostVisibility = true;
	  


//     function throttleEvent(event) {
//       if (isFiring === false) {
//         requestAnimationFrame(() => {
//           setGhostPosition(event);
//           isFiring = false;
//         });
//       }
//       isFiring = true;
//     }
	  
//     function setInitialGhostPosition() {
// 		if (permanentlyHideFloatie == true) {
// 			console.log("Ghost shouldn't be shown at all!");
// 			ghost.style.opacity = 0;
// 			return;
// 		}
// 		let initialXPos = localStorage.getItem("ghostInitialX");
// 		let initialYPos = localStorage.getItem("ghostInitialY");
		
// 		if (initialXPos) {
// 			ghost.style.setProperty("--ghostXPos", initialXPos + "px");
// 			xPos = Number(initialXPos);
// 			mouseX = Number(localStorage.getItem("ghostMouseX"));
// 		}
		
// 		if (initialYPos) {
// 			ghost.style.setProperty("--ghostYPos", initialYPos + "px");
// 			yPos = Number(initialYPos);
// 			mouseY = Number(localStorage.getItem("ghostMouseY"));
// 		}
		
// 		console.log(mouseX + " " + initialXPos + ", " + mouseY + " " + initialYPos);
// 	}
// 	setInitialGhostPosition();

//     function setGhostPosition(event) {
// 		if (permanentlyHideFloatie == false) {
// 		  ghostTimeElapsed = 0;
// 		  ghostVisibility = true;
// 		  showFloatie();
// 		} else {
// 			hideFloatie();
// 		}
		
//       mouseX = event.clientX;
//       mouseY = event.clientY;
//     }

//     function moveGhost() {
// 		if (permanentlyHideFloatie == false) {
// 		  dX = mouseX - xPos;
// 		  dY = mouseY - yPos;

// 		  xPos += (dX / 100);
// 		  yPos += (dY / 100);

// 		  ghost.style.setProperty("--ghostXPos", xPos + "px");
// 		  ghost.style.setProperty("--ghostYPos", yPos + "px");

// 		  localStorage.setItem("ghostInitialX", xPos);
// 		  localStorage.setItem("ghostInitialY", yPos);

// 		  localStorage.setItem("ghostMouseX", xPos);
// 		  localStorage.setItem("ghostMouseY", yPos);

// 		  ghostTimeElapsed++;


// 		  if ((ghostTimeElapsed > 300) && (ghostVisibility == true)) {
// 			  hideFloatie();
// 			  ghostVisibility = false;
// 		  }
// 		}

//       requestAnimationFrame(moveGhost);
//     }
//     moveGhost();
	  
// 	function showFloatie() {
// 		ghost.style.opacity = 1;
// 	}
	
// 	function hideFloatie() {
// 		ghost.style.opacity = 0;
// 	}
	
// 	headerFloatie.addEventListener("click", toggleFloatieVisibility, false);
	  
// 	  function getFloatieVisbility() {
// 		  let floatieStatus = localStorage.getItem("floatieVisbility");
		  
// 		  if (floatieStatus == "show") {
// 			  permanentlyHideFloatie = false;
// 			  headerFloatieSVG.classList.add("enabled");
// 		  } else if (floatieStatus == "hide") {
// 			  permanentlyHideFloatie = true;
// 			  headerFloatieSVG.classList.remove("enabled");
// 		  } else {
// 			  permanentlyHideFloatie = false;
// 			  headerFloatieSVG.classList.remove("enabled");
// 		  }
// 	  }
// 	  getFloatieVisbility();
	  
// 	function kickOffFloatie() {
// 		if (permanentlyHideFloatie == true) {
// 			hideFloatie();
// 		} else {
// 			document.body.addEventListener("mousemove", throttleEvent, false);
// 			headerFloatieSVG.classList.add("enabled");
// 			showFloatie();
// 		}
// 	}
// 	kickOffFloatie();
	  
// 	  function toggleFloatieVisibility(event) {
// 		  let floatieStatus = localStorage.getItem("floatieVisbility");
		  
// 		  if (floatieStatus == undefined) {
// 			  console.log("No stored value!");
// 			  localStorage.setItem("floatieVisbility", "hide");
// 			  permanentlyHideFloatie = true;
			  
// 			  headerFloatieSVG.classList.remove("enabled");
// 		  }
		  
// 		  if (floatieStatus == "show") {
// 			  localStorage.setItem("floatieVisbility", "hide");
// 			  permanentlyHideFloatie = true;
			  
// 			  headerFloatieSVG.classList.remove("enabled");
// 		  }
		  
// 		  if (floatieStatus == "hide") {
// 			  localStorage.setItem("floatieVisbility", "show");
// 			  permanentlyHideFloatie = false;
			  
// 			  kickOffFloatie();
			  
// 			  headerFloatieSVG.classList.add("enabled");
// 		  }
// 		  console.log(permanentlyHideFloatie);
// 	  }
	
  // const Ghost = () => {
	//   return <div id="ghost" className="--ghostXPos:369.951px; --ghostYPos:165.423px; opacity: 1;">
  //       <div id="ghostOuter">
  //         <svg id="ghostImage" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48">
  //           <g transform="translate(0, 0)">
  //             <path fill="var(--light)" d="M24,1C13.52344,1,5,9.52344,5,20v24c0,0.36914,0.20312,0.70801,0.52832,0.88184 c0.32324,0.17383,0.71826,0.1543,1.02637-0.0498l5.37891-3.58594l5.42627,4.52246c0.37109,0.30859,0.90918,0.30859,1.28027,0 L24,41.30176l5.35986,4.4668C29.54541,45.92285,29.77246,46,30,46s0.45459-0.07715,0.64014-0.23145l5.42627-4.52246l5.37891,3.58594 c0.30713,0.2041,0.70166,0.22363,1.02637,0.0498C42.79688,44.70801,43,44.36914,43,44V20C43,9.52344,34.47656,1,24,1z">
  //             </path>
  //             <circle fill="var(--darkText)" cx="17" cy="22" r="3"></circle>
  //             <circle fill="var(--darkText)" cx="31" cy="22" r="3"></circle>
  //           </g>
  //         </svg>
  //       </div>
  //     </div>
  // }

  // export default Ghost