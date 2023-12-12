const axios = require('axios');
const { API_KEY,API_KEY_2, API_KEY_EURO_S0 } = require('./config');



let config =   {
  headers: {
      "Ocp-Apim-Subscription-Key": API_KEY_EURO_S0,
      "Content-Type": "application/json"
  }
};


let runProcess = function(){

  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/conversation.mp3
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/Donall_and_Conall.mp3

  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/conversation.mp3?sp=r&st=2023-04-09T09:26:02Z&se=2023-04-09T17:26:02Z&spr=https&sv=2021-12-02&sr=b&sig=WyIq07MpcZI0YFiU%2Fyrx9PjO5HFnj%2FwAKMS%2F3lZRx1k%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/conversation.wav?sp=r&st=2023-04-09T09:35:05Z&se=2023-04-09T17:35:05Z&spr=https&sv=2021-12-02&sr=b&sig=OWVuqsPtaaGGnuX7jfI3AukPND1tG7viGZ9AX3wHSNk%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/Donall_and_Conall.mp3?sp=r&st=2023-04-09T16:01:51Z&se=2023-04-10T00:01:51Z&spr=https&sv=2021-12-02&sr=b&sig=eRoezOVl5D571e6jSBVp9TDq2zg%2BWN30HLzweu97I3s%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/Donall_and_Conall.wav?sp=r&st=2023-04-09T16:13:09Z&se=2023-04-10T00:13:09Z&spr=https&sv=2021-12-02&sr=b&sig=0ZnXAwfFz%2BuQ7pjtc31PsMFddYn%2FD4dI%2BcAalJVgjEA%3D
  
  //English
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/01_1Million_Rejected_SharkTank_England.mp3?sp=r&st=2023-04-09T22:34:54Z&se=2023-05-10T06:34:54Z&spr=https&sv=2021-12-02&sr=b&sig=L817lZRoRBusbmRMFWAK2K%2FbFZ%2BjwiARylTvgyBfdpM%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/02_Barack_Obama_Zach_2PersEnglish.mp3?sp=r&st=2023-04-09T22:35:41Z&se=2023-05-10T06:35:41Z&spr=https&sv=2021-12-02&sr=b&sig=1wbiUKjTnHv6%2Bk9V0tjwT9SXsalxzxZ6jyS%2FtuDoXVA%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/03_President_Obama_1Voice.mp3?sp=r&st=2023-04-09T22:36:04Z&se=2023-05-10T06:36:04Z&spr=https&sv=2021-12-02&sr=b&sig=CRCoWH%2FXOSqymnVwcXYbiM1XDnlozWwqwxQKFVmZkMI%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/07_The_Spellbinding_3Voices_english.mp3?sp=r&st=2023-04-09T22:53:32Z&se=2023-05-10T06:53:32Z&spr=https&sv=2021-12-02&sr=b&sig=ZhppV46RH2IM7mj8g%2FSOxh8aipxs8MnxE4u5aBKzItU%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/08_Who_Wants_to_be_Millionaire_2Voices.mp3?sp=r&st=2023-04-09T22:54:02Z&se=2023-05-10T06:54:02Z&spr=https&sv=2021-12-02&sr=b&sig=aZk51bNKN2Rel5VWTv4ApRr78%2BRIRJp0YzP8I9YUwXc%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/09_Wrong_Simon_4_voices.mp3?sp=r&st=2023-04-09T22:54:23Z&se=2023-05-10T06:54:23Z&spr=https&sv=2021-12-02&sr=b&sig=CIW4bbJyhUrTgBg5wc1ZdNsdeXI%2B8cPwRwiT%2FF68ozw%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/10_His_Granny_Dream_1voice.mp3?sp=r&st=2023-04-09T22:54:41Z&se=2023-05-10T06:54:41Z&spr=https&sv=2021-12-02&sr=b&sig=wIVKGf0Crsy5b0Y%2F%2BQJdLLBGEM6YJwGVYxllj3n9h2M%3D
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/11_Jim_Carrey_3Voices%20(online-audio-converter.com).mp3?sp=r&st=2023-04-09T22:55:02Z&se=2023-05-10T06:55:02Z&spr=https&sv=2021-12-02&sr=b&sig=KnMDbpmKtmCdvsTQas0E3AetNfxDj8Qu%2FBkVxlqbaO4%3D

  //Spanish
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/04_Regreso_al_futuro_2_persons_Spanish.mp3?sp=r&st=2023-04-09T22:36:29Z&se=2023-05-10T06:36:29Z&spr=https&sv=2021-12-02&sr=b&sig=43TLMzIS8gsRYcPiWDwC%2BTb3F6rQcrmCbBA%2FT7a5x6k%3D

  //Ruso
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/05_ruso_2_personas.mp3?sp=r&st=2023-04-09T22:37:00Z&se=2023-05-10T06:37:00Z&spr=https&sv=2021-12-02&sr=b&sig=FFV6ucxDQC1i8aFy4XzbgzNZE2sh8NhrRfUvYGAT4xw%3D

  //English_Japanase
  //https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/06_Steve_a_Kids_Japanese_English_3Voices.mp3?sp=r&st=2023-04-09T22:53:00Z&se=2023-05-10T06:53:00Z&spr=https&sv=2021-12-02&sr=b&sig=Pazn6TSKQpjUc5mr%2FUnodZsx3OmM8cXBzF6eCoM%2BH4o%3D

  //ru_RU	Russian
  //en_US	English	United States
  //en_GB	English	United Kingdom
  //es_ES	Spanish	Spain
  //ja_JP	Japanese	Japan
  //nl_NL	Dutch	Netherlands
  //uk_UA	Ukrainian	Ukraine

  let data = {
      "contentUrls": [
        "https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test/09_Wrong_Simon_4_voices.mp3?sp=r&st=2023-04-09T22:54:23Z&se=2023-05-10T06:54:23Z&spr=https&sv=2021-12-02&sr=b&sig=CIW4bbJyhUrTgBg5wc1ZdNsdeXI%2B8cPwRwiT%2FF68ozw%3D"
      ],
      "locale": "en-GB",
      "displayName": "My english transcription",
      "model": null,
      "properties": {
        "diarizationEnabled": true,        
        "diarization": {
          "speakers": {
            "minCount": 5,
            "maxCount": 5
          }
        },
        "channels": [ 0],
        "destinationContainerUrl": "https://storagevo2votestblob.blob.core.windows.net/audio-vo2vo-test?sp=rwl&st=2023-04-09T22:30:29Z&se=2023-05-10T06:30:29Z&spr=https&sv=2021-12-02&sr=c&sig=xhAVnptn5M%2FUgrT6nOMZWgTwKJdNZiPb%2FzEpqchUEaQ%3D",
        "wordLevelTimestampsEnabled": false        
      },
    }

    /*
    "languageIdentification": {
          "candidateLocales": [
            "ru_RU", "uk_UA"
          ],
        }
    */
  //https://eastus.api.cognitive.microsoft.com/speechtotext/v3.1/transcriptions
  //https://eastus.cognitiveservices.azure.com/speechtotext/v3.1/transcriptions
  //https://westeurope.api.cognitive.microsoft.com/speechtotext/v3.1/transcriptions
  axios.post('https://westeurope.api.cognitive.microsoft.com/speechtotext/v3.1/transcriptions',data,config)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('EEEERRROOOOOOOOOOOOOOOOOOR');
      console.error(error);
    });

}


let getTrascription = function(id) {

  axios.get('https://westeurope.api.cognitive.microsoft.com/speechtotext/v3.1/transcriptions/'+id,config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('EEEERRROOOOOOOOOOOOOOOOOOR');
    console.error(error);
  });
}

let getTrascriptionFiles = function(id) {

  axios.get('https://westeurope.api.cognitive.microsoft.com/speechtotext/v3.1/transcriptions/'+id+'/files',config)
  .then(response => {
    console.log(response.data);
    console.log(response.data.values[0].properties);
    console.log(response.data.values[0].links);
  })
  .catch(error => {
    console.error('EEEERRROOOOOOOOOOOOOOOOOOR');
    console.error(error);
  });

}

//getTrascriptionFiles('b6ae3870-c2bc-4ba5-a871-d9fbfa11393e')
getTrascription('993b5b0d-7076-4695-9a59-ed105b8e86c7');
//runProcess();