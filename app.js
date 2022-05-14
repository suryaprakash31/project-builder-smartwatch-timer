var updateTime = setInterval(showTimeDay, 1000); 


//showing time and day
function showTimeDay() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    document.getElementById('topTime').innerHTML = time

    document.getElementById('time').innerHTML = time; 

    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('day').innerHTML = weekDays[today.getDay()]

}


let message = document.getElementById('messageDisplay')
let innerMsg = document.getElementById('innermessage')
let hr = document.createElement('hr')
var msg = document.createElement('p')

function showMessage() {
    document.getElementById('timeDisplay').style.display = 'none'
    document.getElementById('musicDisplay').style.display = 'none'
    document.getElementById('messageDisplay').style.display = 'block'
    document.getElementById('music').style.color = 'gray'
    document.getElementById('clock').style.color = 'gray'
    document.getElementById('message').style.color = 'white'
}
function showJavaMsg() {
    document.getElementById('btnMessage').disabled = true
    document.getElementById('btnMusic').disabled = true
    message.style.display = 'none'
    innerMsg.style.display = 'block'
    msg.innerText = "Java is high-level programming language developed by sun Microsystems"
    innerMsg.appendChild(msg)
    innerMsg.appendChild(hr)

}
function showHtmlMsg() {
    msg.innerText = ''
    document.getElementById('btnMessage').disabled = true
    document.getElementById('btnMusic').disabled = true
    message.style.display = 'none'
    innerMsg.style.display = 'block'
    msg.innerText = "HTML stands for Hyper Text Markup Language. HTML describes the structure of a Web page."
    innerMsg.appendChild(msg)
    innerMsg.appendChild(hr)
}
function showCssMsg() {
    msg.innerText = ''
    document.getElementById('btnMessage').disabled = true
    document.getElementById('btnMusic').disabled = true
    message.style.display = 'none'
    innerMsg.style.display = 'block'
    msg.innerText = "Css is a cascading style sheet used for styling purpose."
    innerMsg.appendChild(msg)
    innerMsg.appendChild(hr)
}
function showWatch() {
    msg.innerText = ''
    document.getElementById('btnMessage').disabled = false
    document.getElementById('btnMusic').disabled = false
    document.getElementById('messageDisplay').style.display = 'none'
    document.getElementById('musicDisplay').style.display = 'none'

    innerMsg.style.display = 'none'
    document.getElementById('timeDisplay').style.display = 'block'
    showTimeDay()
    document.getElementById('music').style.color = 'white'
    document.getElementById('clock').style.color = 'white'
    document.getElementById('message').style.color = 'white'
}

var tracks =[
    {
        id:"1",
        name: "Montero",
        trackSrc: "assests/Montero.mp3",
        artist : "Lil Nas X",
        imgSrc: "https://i1.sndcdn.com/artworks-WKXQhFyML8G2cBXZ-wIDz9g-t500x500.jpg"
    },
    {
        id:"2",
        name: "Raataan Lambiyan - Shershaah",
        trackSrc: "assests/Raataan Lambiyan - Shershaah.mp3",
        artist : "Jubin Nautiyal, Asees Kaur, Tanishk Bagchi",
        imgSrc: "https://www.pagalworld.pw/GpE34Kg9Gq/113558/145809-raataan-lambiyan-shershaah-mp3-song-300.jpg"
    },
    {
        id:"3",
        name: "Ghungroo - War",
        trackSrc: "assests/Ghungroo - War.mp3",
        artist: "Arijit Singh, Shilpa Rao, VishalShekhar",
        imgSrc: "https://www.pagalworld.pw/GpE34Kg9Gq/113426/143113-ghungroo-war-mp3-song-300.jpg"
    },
    
    {
        id:"4",
        name: "Marjaawaan",
        trackSrc: "assests/Marjaawaan.mp3",
        artist: "Gurnazar Chatth, Asees Kaur",
        imgSrc: "https://pagalworld.com.se/siteuploads/thumb/sft7/3249_4.jpg"

    },
    {
        id:"5",
        name: "Jannat ve",
        trackSrc: "assests/Jannat Ve.mp3",
        artist: "Darshan Rwal",
        imgSrc: "https://www.pagalworld.pw/GpE34Kg9Gq/113514/145898-jannat-ve-darshan-raval-song-mp3-song-300.jpg"

    },
   
    
]
function playMusic() {
    document.getElementById('timeDisplay').style.display = 'none'
    document.getElementById('messageDisplay').style.display = 'none'
    document.getElementById('musicDisplay').style.display='block'
    document.getElementById('message').style.color = 'gray'
    document.getElementById('clock').style.color = 'gray'
    document.getElementById('music').style.color = 'white'
}

let play = document.getElementById('play-pause')
let ol = document.getElementById('orderList')

tracks.forEach(track=>{
let li = document.createElement('li')
var audio = document.querySelector('audio')
li.innerHTML=track.id+" . "+track.name + "<span>- "+track.artist+"</span>"
var img = document.getElementById('songimg')

li.onclick = function(){

    var trackname = document.getElementById('trackname')
    trackname.innerText=track.name

    img.setAttribute('src',track.imgSrc)
   
    audio.pause();
    audio.setAttribute('src', track.trackSrc);
    audio.load();
    audio.play();
    play.innerHTML = "Pause"
}

ol.appendChild(li)

})
//changing state of button 
function playtrack()
{
    let audio=document.querySelector('audio')
    if(audio.paused)
    {
        play.innerHTML="Pause"
        audio.play()
    }
    else{

        play.innerHTML = "Play"
        audio.pause()
    }
}