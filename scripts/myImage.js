


getData(myURL).then( data194 => {
    let mySection = document.querySelector("section:nth-of-type(1)")


    let avatar = data194.data.avatar; 
    let myName = data194.data.name; 

    // console.log(avatar);

    let myImg = document.createElement("img");

    mySection.append(myImg);
    myImg.src = avatar;
    myImg.alt = myName; 
    console.log(myImg);
})











/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }