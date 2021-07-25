'use strict'

const url_placeholder = `https://jsonplaceholder.typicode.com/users`;

// send get response

// simple Get response, loading 
// A simple request, type << Get >> that downloads data.
fetch(url_placeholder)
	// response is promise as instance class Response (+ own property's and method's)
	.then(response => {
		// if(response.ok){
			return response.json()
			// response.text()
			// console.log(response.ok)
			// console.log(response.status)
			// console.log(response)
		// }else{
			// console.log(response.status)
		// }
	})
	// next --->> Common actions with promise's
	.then(json =>{

		console.log(json)
		// console.log(text);
		// console.log(typeof text);


	})


const url_finance = `https://cbr.ru/scripts/XML_dynamic.asp?date_req1=02/03/2001&date_req2=14/03/2001&VAL_NM_RQ=R01235`;
fetch(url_finance, {headers:{
	// 'Access-Control-Allow-Origin': 'no-cors',
	// origin:'no-cors',
	mode:'no-cors',
}
})
	.then(response =>{
		// if(response.ok){
			return response.text()
			// console.log(`statys HTTPS : ${response.status}`)
			// console.log(response);
		// }else{
		// 	console.log(response.status)
		// }

	})
	.then(text => {
		console.log(text)
	})

// saddas