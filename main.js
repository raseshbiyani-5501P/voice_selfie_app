var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){

document.getElementById("textbox").innerHTML = "";
recognition.start();

}

recognition.onresult = function (event){

    console.log(event);
    var recognition2 = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = recognition2 ;
    console.log(recognition2);
    speak();

}

function speak(){

var synth = window.speechSynthesis;

s_this = document.getElementById("textbox").value;

var utter_this = new SpeechSynthesisUtterance(s_this);

synth.speak(utter_this);
Webcam.attach(camera);

}

Webcam.set({

height : 300,

width : 350, 

image_format : 'png',

png_quality : 90

});

camera = document.getElementById("camera");