const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const flat  = false;
let temp = 1;
let btn = ["fa-solid fa-play","fa-solid fa-pause"];
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
                if (!flat) {
                    musicLive.style.display = 'flex';
                    let currentSong = app.songs.find((song)=> song.id == li.id)
                    liveSong.innerHTML = `
                    <img src="${currentSong.image}" alt="" class="liveSongImg">
                      <div class="liveSongDes">
                        <span>${currentSong.name}</span><span class="subName">${currentSong.singer}</span>
                        <input type="range">
                        </div>
                        <audio class="audioLive" src="${currentSong.path}" ></audio>
                    `
                    flat = true;
                }
                else {
                    let currentSong = app.songs.find((song)=> song.id == li.id)
                    liveSong.innerHTML = `
                    <img src="${currentSong.image}" alt="" class="liveSongImg">
                      <div class="liveSongDes">
                        <span>${currentSong.name}</span><span class="subName">${currentSong.singer}</span>
                        <input type="range">
                        </div>
                        <audio class="audioLive" src="${currentSong.path}" ></audio>
                    `
                }
            });
        })
    },
    btnHandle:  function(){
        $('.stopBtn').onclick = function(){
            this.firstChild.classList = btn[temp++ %  btn.length];
        }
    },
    start: function(){
        this.render();
        this.songClick();
        this.btnHandle();  
    },
}
app.start();