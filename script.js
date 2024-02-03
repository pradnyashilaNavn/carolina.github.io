console.log("Hello Music User Wellcome To Spotify.");
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('SongItem');
let songItemsArray = Array.from(songItems);

let songs = [
    {songName: "Warriyo - Mortals (feat. Laura Brehm)", filePath: "songs/1.mp3", coverPath : "images/covers/1.jpg"},
    {songName: "Pasoori Songs", filePath: "songs/2.mp3", coverPath : "images/covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath : "images/covers/3.jpg"},
    {songName: "David Guetta – Titanium", filePath: "songs/4.mp3", coverPath : "images/covers/4.jpg"},
    {songName: "Reha Ni Hunn Aitbaar Sohniye | No Love", filePath: "songs/5.mp3", coverPath : "images/covers/5.jpg"},
    {songName: "Swag Se Swagat | Tiger Zinda Hai", filePath: "songs/6.mp3", coverPath : "images/covers/6.jpg"},
    {songName: "Gadar2 - Main Nikla Gaddi Leke", filePath: "songs/7.mp3", coverPath : "images/covers/7.jpg"},
    {songName: "ROCK THA PARTY SONG - ROCKY HANDSOME", filePath: "songs/8.mp3", coverPath : "images/covers/8.jpg"},
     
]
// songItemsArray.forEach((element, i)=> {
//     console.log(element, i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
// })
songItemsArray.forEach((element, i) => {
    let imgElement = element.getElementsByTagName("img")[0];
    if (imgElement) {
        imgElement.src = songs[i].coverPath;
    }
    let songNameElement = element.querySelector(".songName");
    if (songNameElement) {
        songNameElement.innerText = songs[i].songName;
    } else {
        let newSongNameElement = document.createElement("span");
        newSongNameElement.className = "SongName";
        newSongNameElement.innerText = songs[i].songName;
        element.appendChild(newSongNameElement);
    }
});
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        if (e.target && e.target.classList) {
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${songIndex}.mp3`;
            masterSongName.innerText = songs[songIndex-1].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
    });
});
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
    songIndex = 1;
    }else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
    songIndex = 1;
    }else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
