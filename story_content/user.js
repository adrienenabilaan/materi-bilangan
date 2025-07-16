function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5V2XEeHB2aT":
        Script1();
        break;
      case "5YSMoNg2kuI":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.1;
}

function Script2()
{
  var audio =
document.getElementById('bgSong');

audio.src="1.mp3";

audio.load();

audio.play();

audio.volume = 0.05;
}

