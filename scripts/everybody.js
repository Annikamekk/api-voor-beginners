const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';


const everybodyURL = baseURL + endpointSquad; 

getData(everybodyURL).then (everybodyData => { 
    console.log(everybodyData)

    let persons = everybodyData.data;
    let everybodySection = document.querySelector('section:nth-of-type(2)');
    // console.log(allPersons)
    persons.forEach( person1 =>  {  
        // console.log(person1.name)
        let personName = person1.name 
        let personAvatar = person1.avatar
        let personURL= person1.website

    
     



        if( personAvatar ) { 
            //do nothing
        }
        // gebruik default plaatje uit het image mapje

        else{
            const randomImg = Math.floor( Math.random() * 5 )+ 1;
            personAvatar = `images/placeholder${randomImg}.svg`;

        }

        if (personURL) {
            //do npthing
        }
        else{
            personURL = fallbackWebsite;
        }
        // console.log(personName)

       let personHTML =  ` <article>
      <h3>${personName}</h3>
      <img src="${personAvatar}" alt="${personName}" >
      <a href="${personURL}" aria-label="de website van ${personName}">website</a>
    </article>`
        
    everybodySection.insertAdjacentHTML('beforeend', personHTML);
    })
})





























/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }