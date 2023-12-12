var sdk = require("microsoft-cognitiveservices-speech-sdk");

const datos = require('./sentencesByLanguages');
//var readline = require("readline");


let getNameFile = function(voice,i)
{
    var fecha = new Date;
    let prefName = fecha.getMonth().toString()+fecha.getDate().toString()+ fecha.getMinutes().toString() + fecha.getSeconds().toString();
    return "audioOutput/"+(i+100)+"23"+prefName+voice+".wav"
}

function xmlToString(filePath) {
    const xml = readFileSync(filePath, "utf8");
    return xml;
}


let text2Speech = function(voice,texto,i) {    
    
    let audioFile = getNameFile(voice,i);
    // This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
    const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);

    // The language of the voice that speaks.
    //speechConfig.speechSynthesisLanguage = "en-CO"; 
    speechConfig.speechSynthesisVoiceName = voice; 

    // Create the speech synthesizer.
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    // Start the synthesizer and wait for a result.
    synthesizer.speakTextAsync(texto,
        function (result) {
            if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                console.log("synthesis finished.");
                //console.log(result);
            } else {
                console.error("Speech synthesis canceled, " + result.errorDetails + 
                "\nDid you set the speech resource key and region values?");
            }
            synthesizer.close();
            synthesizer = null;
        },
        function (err) {
            console.trace("err - " + err);
            synthesizer.close();
            synthesizer = null;
    });
    console.log("Now synthesizing to: " + audioFile);    
}    


///
let text2SpeechSSML = function(voice,texto) {    

    let audioFile = getNameFile(voice);
    // This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
    const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
    
    let ssml = `<speak version="1.0" xmlns="https://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="en-US">
<voice name="${voice}">
    <p>
    Your <say-as interpret-as="ordinal"> 1st </say-as> request was for <say-as interpret-as="cardinal"> 1 </say-as> room
    on <say-as interpret-as="date" format="mdy"> 10/19/2010 </say-as>, with early arrival at <say-as interpret-as="time" format="hms12"> 12:35pm </say-as>.
    </p>
    <p>
    Your 1st request was for 1 room on 10/19/2010, with early arrival at 12:35pm.
    </p>
</voice>
</speak>`;

    // Create the speech synthesizer.
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    // Start the synthesizer and wait for a result.
    synthesizer.speakSsmlAsync(
        ssml,
        result => {
            if (result.errorDetails) {
                console.error(result.errorDetails);
            } else {
                //console.log(JSON.stringify(result));
                console.log('synthesis finished.');
                //console.log(result);
            }

            synthesizer.close();
        },
        error => {
            console.log(error);
            synthesizer.close();
    });
    console.log("Now synthesizing to: " + audioFile);
}    



text2Speech(
    'es-MX-JorgeNeural',
    'Regístrate hoy!',
    19
    );


//console.log(datos.sentences_ES);

  /*
  for (const [index, item] of datos.sentences_ES.entries()) {
    
    setTimeout(function() {
            text2Speech('es-MX-JorgeNeural', item,index);
            //console.log(index+":"+item);
    }, 3000*index);
    //console.log("*:"+index+":"+item);
 }
*/
  
  


//es-CO-GonzaloNeural
//es-MX-CecilioNeural
//es-MX-GerardoNeural
//es-MX-JorgeNeural
//text2SpeechSSML('en-US-JennyNeural','');