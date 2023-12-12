const axios = require('axios');
const { API_KEY } = require('./config');
const FormData = require('form-data');
const fs = require('fs');


const formData = new FormData();
formData.append('api_key', API_KEY);
formData.append('audio', fs.createReadStream('conversation.mp3'));
formData.append('format', 'mp3');


axios.post('https://api.openai.com/v1/audio/transcriptions',formData, {
    headers: {
        ...formData.getHeaders()
    }})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

/*
  axios.post('https://api.whisper.ai/v1/speech-to-text', formData, {
    headers: {
        ...formData.getHeaders()
    }
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});
*/