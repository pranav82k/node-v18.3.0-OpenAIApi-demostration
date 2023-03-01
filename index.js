const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');

dotenv.config();


const configuration = new Configuration({
	organization: process.env.OrganizationID,
	apiKey: process.env.OPENAI_API_KEY
});


const openai = new OpenAIApi(configuration);
const model = 'text-davinci-003';
const prompt = "Write 3 facebook marketing slogan for burger"

const asyncFunction = async function asyncCall() {
  	console.log('waiting for response from API');
  	const response = await openai.createCompletion({
  		model,
  		prompt,
  		temperature: 0,
  		max_tokens: 150
  	});

  	return response.data.choices[0].text;
  	// try {
  	// 	console.log(response.data.choices[0].text)
  	// } catch(error) {
  	// 	console.log(error)
  	// }
}


const callingFunction = async () => {
	const response = await asyncFunction();
	console.log(response);
}

callingFunction()