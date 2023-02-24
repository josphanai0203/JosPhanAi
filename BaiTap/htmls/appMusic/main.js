const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgLive = $('.liveSongImg')
const nameLive =$('.mainName')
const subNameLive = $('.subName');
const audio = $('#audioLive');
const rangeSong = $('#rangeSong');
const imgRotate = $(".liveSongImg")
const preBtn = $(".preBtn");
const nextBtn = $(".nextBtn");
const musicLive = $('.musicLive');
const liveSong = $('.liveSong');
const liSongs = $$('.item_song');
const imgRotateAnimate = imgRotate.animate([{transform:"rotate(360deg)"}],{duration: 10000,iterations:Infinity})

let temp = 1;
let btn = ["fa-solid fa-play","fa-solid fa-pause"];
let val =1;
let volume = ["fa-solid fa-volume-high","fa-solid fa-volume-xmark"]
let flat = false;
let isRepeat = false;


const app = {
    songs:[
        {
            name: "Ai muốn nghe không",
            singer:"Đen Vâu",
            path: "./music/song1.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 1
        },
        {
            name: "Lối Nhỏ",
            singer:"Đen Vâu",
            path: "./music/song2.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 2
        },
        {
            name: "Luôn Yêu Đời",
            singer:"Đen Vâu",
            path: "./music/song3.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 3
        },
        {
            name: "Mười Năm",
            singer:"Đen Vâu",
            path: "./music/song4.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 4
        },
        {
            name: "Một Triệu Like",
            singer:"Đen Vâu",
            path: "./music/song5.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 5
        },
        {
            name: "Chỉ là không cùng nhau",
            singer:"Đen Vâu",
            path: "./music/song6.mp3",
            image: './img/z4117840091339_f10a7826f9e64da28ab63f02af43fad2.jpg',
            id: 6
        },
        {
            name: "Ai muốn nghe không",
            singer:"Đen Vâu",
            path: "./music/song1.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 7
        },
        {
            name: "Lối Nhỏ",
            singer:"Đen Vâu",
            path: "./music/song2.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 8
        },
        {
            name: "Luôn Yêu Đời",
            singer:"Đen Vâu",
            path: "./music/song3.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 9
        },
        {
            name: "Mười Năm",
            singer:"Đen Vâu",
            path: "./music/song4.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 10
        },
        {
            name: "Một Triệu Like",
            singer:"Đen Vâu",
            path: "./music/song5.mp3",
            image: './img/den-vau_TICF.jpg',
            id: 11
        },
        {
            name: "Chỉ là không cùng nhau",
            singer:"Đen Vâu",
            path: "./music/song6.mp3",
            image: './img/z4117840091339_f10a7826f9e64da28ab63f02af43fad2.jpg',
            id: 12
        }
    ],
    currentIndex: 1,
    render: function(){
        let htmls = this.songs.map((song)=>{
            return `
            <li class="item_song" id="${song.id}">
            <img src="${song.image}" alt="" class="item_songImg">
            <div class="item_song_des">
            <h4>${song.name}</h4>
            <span>${song.singer}</span>
                                    
            </div>
                                
            </li>
            `
        })
        $('.recently_content_ulList').innerHTML = htmls.join('');
    },
    songClick: function(){
        const liSongs = $$('.item_song');
        liSongs.forEach(function(li){
            li.addEventListener('click', function(){
                let currentSong = app.songs.find((song)=> song.id == li.id)
                if (!flat) {
                    musicLive.style.display = 'flex'
                    app.loadSong(currentSong);
                    flat = true;
                }
                else {
                    imgRotateAnimate.cancel();
                    app.loadSong(currentSong);
                    
                }
            });
        })

    },
    loadSong: function(currentSong){
        imgLive.src = currentSong.image;
        nameLive.innerHTML = currentSong.name;
        subNameLive.innerHTML = currentSong.singer
        audio.src = currentSong.path
        app.currentIndex = currentSong.id;
        imgRotateAnimate.play();
        audio.play();
        if($('.stopBtn').firstChild.classList == "fa-solid fa-play"){
                        
            $('.stopBtn').firstChild.classList = btn[temp++ %  btn.length];
        }
    },
    nextSong(){
        if(app.currentIndex == app.songs.length){
            app.currentIndex = 0;
        }
        var nextSong = app.songs.find((song) => song.id == (app.currentIndex + 1))
        app.loadSong(nextSong);
    },
    preSong(){
        if(app.currentIndex == 1){
            app.currentIndex = app.songs.length +1;
        }
        var preSong = app.songs.find((song) => song.id == (app.currentIndex -1))
        app.loadSong(preSong);
    }
    ,
    handleEvent:  function(){
        let endTime = $(".endTime");
        let volumeBar = $('.volumeBar');
        let originValueVolume;
        // image song is rotate when song play and pause
        imgRotateAnimate.pause();
        //handle buttons play/pause events
        $('.stopBtn').onclick = function(){
           
            if (this.firstChild.classList == "fa-solid fa-play") {
                audio.play();
                imgRotateAnimate.play();
            }else {
                imgRotateAnimate.pause();
                audio.pause();
            }
            this.firstChild.classList = btn[temp++ %  btn.length];
        }
        //handle audio when click song in list
        audio.onloadedmetadata = () => {
            let firstTime = parseInt(audio.duration/60);
            let end = Math.floor(audio.duration%60);
            endTime.innerHTML = `${firstTime}:${end}`;
            rangeSong.innerText = audio.duration;
            rangeSong.max = audio.duration;
        };
        //handle seek bar audio and time current audio
        rangeSong.oninput = ()=>audio.currentTime = rangeSong.value
        // update range input when currentTime updates
        audio.ontimeupdate = ()=> rangeSong.value = audio.currentTime;

        audio.addEventListener('timeupdate',function (){

            var sec= new Number();
            var min= new Number();
             sec = Math.floor( audio.currentTime );    
             min = Math.floor( sec / 60 );
            min = min >= 10 ? min : '0' + min;    
            sec = Math.floor( sec % 60 );
            sec = sec >= 10 ? sec : '0' + sec;
            
        //    $('#rangeSong').setAttribute('aria-valuetext',min + ":"+ sec);
            $('.currentTime').innerHTML = `${min}:${sec}`;
            
            });
        volumeBar.oninput = ()=>audio.volume = volumeBar.value/100;
        volumeBar.onchange = ()=>audio.volume = volumeBar.value/100;
        //handle mute button click
        $(".muteBox").onclick =function(){
            if(this.firstElementChild.classList == "fa-solid fa-volume-high"){
                audio.muted = true;
                originValueVolume = volumeBar.value;
                volumeBar.value = 0;
            }else {
                audio.muted = false;
                volumeBar.value = originValueVolume;
            }
            this.firstElementChild.classList = volume[val++ % volume.length];
        };
        //handle replay button click
        $(".reloadBox").onclick =function(){
            isRepeat = !isRepeat;
            this.classList.toggle("rePlay");
        };
        //when audio ended, if replay btn active then reload audio
        audio.onended = function(){
            if (isRepeat) {
                audio.currentTime = 0;
                audio.play();
            }else {
                app.nextSong();
            }
        };
        window.onkeydown = function(e){
                if(e.keyCode == 32){
                    if(audio.paused){
                        audio.play();
                        imgRotateAnimate.play();
                        $('.stopBtn').firstChild.classList = btn[temp++ %  btn.length];
                    }else{
                        audio.pause();
                        imgRotateAnimate.pause();
                        $('.stopBtn').firstChild.classList = btn[temp++ %  btn.length];
                    }
                }else if(e.keyCode == 37){
                    e.preventDefault()
                    audio.currentTime -= 5;
                }else if(e.keyCode == 39){
                    e.preventDefault()
                    audio.currentTime += 5;
                }
        }
        // click in next / previous song
        preBtn.onclick = ()=>{
            imgRotateAnimate.cancel();
            app.preSong()

        }
        nextBtn.onclick = ()=>{
            imgRotateAnimate.cancel();
            app.nextSong()
        }
    },
    start: function(){
        this.render();
        this.songClick();
        this.handleEvent();
        
    },
}
app.start();