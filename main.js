Webcam.set({
    width: 350,
    height:300,
    image_format: "png",
    png_quality: 90,
  });

  camera = document.getElementById("camera");

  function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        //Na linha 24, você deverá adicionar o id do resultado
        //Para descobrir qual é o id, volte para o html
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log(

ml5.version

)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vsnFFEIZD/model.json");
