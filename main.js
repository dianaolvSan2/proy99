var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="toma mi selfie")
      {
        console.log("tomando selfie --- ");
        speak();
      }
}

// clase 99 
function speak(){
    var synth = window.speechSynthesis; // permite reconocer la voz y convertirla en texto

    speak_data = "Tomando tu selfie en 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data); // convierte la voz a texto

    synth.speak(utterThis); // convierte el texto a voz

    Webcam.attach(camera);

   
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

