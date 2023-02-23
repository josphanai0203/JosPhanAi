const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let flat  = false;
const imgLive = $('.liveSongImg')
const nameLive =$('.mainName')
const subNameLive = $('.subName');
const audio = $('#audioLive');
const rangeSong = $('#rangeSong'); 
let temp = 1;
let btn = ["fa-solid fa-play","fa-solid fa-pause"];
let val =1;
let volume = ["fa-solid fa-volume-high","fa-solid fa-volume-xmark"]
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
        let liSongs = $$('.item_song');
        const musicLive = $('.musicLive');
        const liveSong = $('.liveSong');
        liSongs.forEach(function(li){
            li.addEventListener('click', function(){
                let currentSong = app.songs.find((song)=> song.id == li.id)
                if (!flat) {
                    musicLive.style.display = 'flex'
                    imgLive.src = currentSong.image;
                    nameLive.innerHTML = currentSong.name;
                    subNameLive.innerHTML = currentSong.singer
                    audio.src = currentSong.path
                    flat = true;
                }
                else {
                    musicLive.style.display = 'flex'
                    imgLive.src = currentSong.image;
                    nameLive.innerHTML = currentSong.name;
                    subNameLive.innerHTML = currentSong.singer
                    audio.src = currentSong.path
                    if($('.stopBtn').firstChild.classList == "fa-solid fa-pause"){
                        
                        $('.stopBtn').firstChild.classList = btn[temp++ %  btn.length];
                    }
                }
            });
        })

    },
    handleEvent:  function(){
        let endTime = $(".endTime");
        let volumeBar = $('.volumeBar');
        let originValueVolume;
        //handle buttons play/pause events
        $('.stopBtn').onclick = function(){
           
            if (this.firstChild.classList == "fa-solid fa-play") {
                audio.play();
            }else {
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
        rangeSong.onchange = () => audio.currentTime = rangeSong.value
        // update range input when currentTime updates
        audio.ontimeupdate = () => rangeSong.value = audio.currentTime 
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
        let checkReplayActive = false;
        $(".reloadBox").onclick =function(){
            this.classList.toggle("rePlay");
            if(this.classList.contains("rePlay")){
                checkReplayActive = true;
            }else{
                checkReplayActive = false;
            }
        };
        //when audio ended, if replay btn active then reload audio
        audio.onended = function(){
            if(checkReplayActive){
                audio.currentTime = 0;
                audio.play();
            }else{
                $('.stopBtn').firstChild.classList = btn[temp++ %  btn.length];
            }
        };
        window.onkeydown = function(e){
            if (e.target == rangeSong) {
                if (e.keyCode == 37){
                    audio.currentTime -= 5;
                    console.log(audio.currentTime)
                }else if(e.keyCode == 39){
                    audio.currentTime += 5;
                    console.log(audio.currentTime)
                    
                }
            }
        }
    },
    start: function(){
        this.render();
        this.songClick();
        this.handleEvent();
        
    },
}
app.start();