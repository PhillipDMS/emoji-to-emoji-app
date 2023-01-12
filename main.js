/*https://teachablemachine.withgoogle.com/models/PMShghGrM/*/

Webcam.set({
    width:350, height:300, 
    image_format:"png",
    png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(datauri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+datauri+"' >";
    })  
}
 console.log("ml5 version",ml5.version);

 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PMShghGrM/model.json",modelloded);
 function modelloded(){
    console.log("model has been loaded");
 }
 prediction1="";
 prediction2="";
 function speak(){
    var synth= window.speechSynthesis;
    speakdata1="the first prediction is "+prediction1;
    speakdata2="the second prediction is"+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    utterthis.rate=0.2;
    synth.speak(utterthis);
    
 }
 function check(){
    img=document.getElementById("capture_image")
    classifier.classify(img, gotresult);
 }
 function gotresult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction1=results[0].label;
        prediction2=results[1].label;
        speak();
        if(results[0].label=="Happy"){
            document.getElementById("update_emoji").innerHTML="&#128522"

        }
        if(results[0].label=="Sad"){
            document.getElementById("update_emoji").innerHTML="&#128532"
            
        }
        if(results[0].label=="Angry"){
            document.getElementById("update_emoji").innerHTML="&#128548"
            
        }
        if(results[1].label=="Happy"){
            document.getElementById("update_emoji2").innerHTML="&#128522"

        }
        if(results[1].label=="Sad"){
            document.getElementById("update_emoji2").innerHTML="&#128532"
            
        }
        if(results[1].label=="Angry"){
            document.getElementById("update_emoji2").innerHTML="&#128548"
            
        }
    }
 }