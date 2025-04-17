// 🔐 Password Protection
const PASSWORD = "123";

document.getElementById("submit-password").addEventListener("click", () => {
  const input = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");

  if (input === PASSWORD) {
    document.getElementById("password-screen").style.display = "none";
    document.querySelector(".main-content").style.display = "block";
  } else {
    errorMsg.textContent = "Wrong password. Try again!";
  }
});

// Toggle light/dark mode
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
  document.getElementById("toggleMode").textContent =
    document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
});

let isRepeatMode = false;

document.getElementById("repeat").addEventListener("click", () => {
  isRepeatMode = !isRepeatMode;

  // Toggle the image source correctly
  document.getElementById("repeat-icon").src = isRepeatMode 
    ? "icons/Repert.png" 
    : "icons/NoRepert.png";
});


// Audio ended event
const audio = document.getElementById('audio');
const lottiePlayer = document.getElementById('lottie-player'); // Assuming lottie-player is the id of your Lottie player
audio.addEventListener("ended", () => {
  if (isRepeatMode) {
    audio.currentTime = 0;
    audio.play();
    lottiePlayer.play(); // Play the Lottie animation when repeat is on
  } else {
    currentSongIndex = (currentSongIndex + 1) % filteredSongsList.length;
    loadSong(currentSongIndex);
    
    audio.play();
    lottiePlayer.play(); // Play the Lottie animation when song changes
  }
  
});



// Song Data (Adding more songs)
const songs = [
  // Hindi Songs //
    'music/1.mp3',  'music/3.mp3', 'music/4.mp3', 'music/5.mp3', 'music/6.mp3', 'music/7.mp3', 'music/8.mp3', 
    'music/9.mp3', 'music/11.mp3', 'music/12.mp3', 'music/13.mp3', 'music/14.mp3', 'music/15.mp3', 'music/16.mp3', 
    'music/17.mp3', 'music/18.mp3', 'music/19.mp3', 'music/20.mp3', 'music/2.mp3', 'music/21.mp3', 'music/25.mp3', 
    'music/54.mp3', 'music/45.mp3', 'music/57.mp3', 'music/58.mp3', 'music/59.mp3', 'music/60.mp3', 'music/61.mp3', 
    'music/62.mp3', 'music/63.mp3', 'music/64.mp3', 'music/65.mp3', 'music/66.mp3', 'music/67.mp3',

    // Marathi Songs //
    'music/22.mp3', 'music/27.mp3', 'music/30.mp3', 'music/55.mp3', 'music/56.mp3', 'music/90.mp3',
    
    // English Songs //
    'music/26.mp3', 'music/28.mp3', 'music/68.mp3', 'music/69.mp3','music/70.mp3', 'music/71.mp3', 'music/72.mp3',
    'music/73.mp3', 'music/74.mp3', 'music/75.mp3', 'music/84.mp3', 'music/85.mp3', 'music/86.mp3', 'music/87.mp3', 
    'music/88.mp3', 'music/89.mp3', 

    // Telugu Songs //
    'music/23.mp3', 'music/53.mp3',  'music/76.mp3', 
    
    // Japanese Songs //
    'music/24.mp3', 'music/29.mp3', 'music/50.mp3', 'music/51.mp3',
    
    // Mixup Songs //
    'music/10.mp3', 'music/79.mp3', 'music/31.mp3', 'music/32.mp3', 
    'music/33.mp3', 'music/34.mp3', 'music/35.mp3', 'music/36.mp3', 'music/37.mp3', 'music/38.mp3', 'music/39.mp3', 'music/40.mp3', 
    'music/41.mp3', 'music/42.mp3', 'music/43.mp3', 'music/44.mp3',  'music/46.mp3', 'music/47.mp3', 'music/48.mp3','music/49.mp3', 
    'music/52.mp3', 'music/81.mp3', 'music/82.mp3', 'music/83.mp3', 'music/80.mp3', 

  ];
  
  const songDetails = {
    '1.mp3': { title: 'Sooraj Dooba Hain', singer: 'Arijit Singh, Aditi Singh Sharma', movie: 'Roy', language: 'Hindi' ,  img: 'images/1.jpg' ,  },
    '3.mp3': { title: 'Abhi Kuch Dino Se', singer: 'Mohit Chauhan', movie: 'Dil Toh Baccha Hai Ji', language: 'Hindi' , img: 'images/3.jpg' },
    '4.mp3': { title: 'Teri Jhuki Nazar', singer: 'Pritam, Shafqat Amanat Ali', movie: 'Murder 3', language: 'Hindi' , img: 'images/4.jpg'},
    '5.mp3': { title: 'Surili Akhiyon Wale', singer: 'Rahat Fateh Ali Khan, Suzanne', movie: 'Veer', language: 'Hindi' , img: 'images/5.jpg'},
    '6.mp3': { title: 'Tum Jo Aaye', singer: 'Rahat Fateh Ali Khan, Tulsi Kumar', movie: 'Once Upon A Time In Mumbai', language: 'Hindi' , img: 'images/6.jpg' },
    '7.mp3': { title: 'Nadaan Parinde', singer: 'A.R Rahman, Mohit Chauhan', movie: 'Rockstar', language: 'Hindi' , img: 'images/7.jpg'  },
    '8.mp3': { title: 'Saibo', singer: 'Sachin-Jigar, Shreya Ghoshal', movie: 'Shor in the City', language: 'Hindi' , img: 'images/8.jpg'  },
    '9.mp3': { title: 'Kun Faya Kun', singer: 'A.R. Rahman, Javed Ali', movie: 'Rockstar', language: 'Hindi' , img: 'images/7.jpg'  },
    '11.mp3': { title: 'Manwa Laage', singer: 'Arijit Singh, Shreya Ghoshal', movie: 'Happy New Year', language: 'Hindi' , img: 'images/11.jpg'  },
    '12.mp3': { title: 'Tum Se Hi', singer: 'Mohit Chauhan', movie: 'Jab We Met', language: 'Hindi' , img: 'images/12.jpg'  },
    '13.mp3': { title: 'O Meri Laila', singer: 'Atif Aslam & Jyotica Tangri', movie: 'Laila Majnu', language: 'Hindi' , img: 'images/13.jpg'  },
    '14.mp3': { title: 'O Re Piya', singer: 'Rahat Fateh Ali Khan', movie: 'Aaja Nachle', language: 'Hindi' , img: 'images/14.jpg'  },
    '16.mp3': { title: 'Emptiness', singer: 'Gajendra Verma', movie: 'An album', language: 'Hindi' , img: 'images/16.jpg'  },
    '15.mp3': { title: 'Dildara', singer: 'Shekhar Ravjiani, Vishal Dadlani', movie: 'Ra.One', language: 'Hindi' , img: 'images/15.jpg'  },
    '17.mp3': { title: 'Chand Sifarish', singer: 'Kailash Kher, Shaan', movie: 'Fanaa', language: 'Hindi'  , img: 'images/17.jpg' },
    '18.mp3': { title: 'Tu Hi Re', singer: 'A. R. Rahman, Hariharan, Kavita', movie: 'Bombay', language: 'Hindi' , img: 'images/18.jpg'  },
    '19.mp3': { title: 'Uyi Amma', singer: 'Madhubanti Bagchi', movie: 'Azaad', language: 'Hindi' , img: 'images/19.jpg'  },
    '20.mp3': { title: 'Tum Tak', singer: 'Javed Ali', movie: 'Raanjhanaa', language: 'Hindi' , img: 'images/20.jpg'   },
    '2.mp3': { title: 'Titli', singer: 'Chinmayi Sripada , Gopi Sunder', movie: 'Chennai Express', language: 'Hindi' , img: 'images/2.jpg'},
    '21.mp3': { title: 'Pee Loon', singer: 'Emraan Hashmi, Prachi Desai', movie: 'Once Upon A Time in Mumbai', language: 'Hindi' , img: 'images/6.jpg'    },
    '25.mp3': { title: 'Tum Todo Na', singer: 'A. R. Rahman', movie: 'i', language: 'Hindi'  , img: 'images/25.jpg'   },
    '54.mp3': { title: 'Aa Jao Meri Tamanna', singer: 'Javed Ali, Jojo, Pritam', movie: 'Ajab Prem Ki Ghazab Kahani', language: 'Hindi'  , img: 'images/35.jpg'   },
    '45.mp3': { title: 'Tere Nainon Mein', singer: 'Bilz, Kashif', movie: 'An album', language: 'Hindi'  , img: 'images/31.jpg'   },
    '57.mp3': { title: 'AFSOS', singer: 'Anuv Jain, AP Dhillon', movie: 'An album', language: 'Hindi'  , img: 'images/38.jpg'   },
    '58.mp3': { title: 'Pehle Bhi Main', singer: 'Vishal Mishra, Raj Shekhar', movie: 'Animal', language: 'Hindi'  , img: 'images/39.jpg'   },
    '59.mp3': { title: 'Raabta', singer: 'Pritam, Arijit Singh', movie: 'Agent Vinod', language: 'Hindi'  , img: 'images/40.jpg'   },
    '60.mp3': { title: 'Jhoom', singer: 'Ali Zafar', movie: 'An album', language: 'Hindi'  , img: 'images/41.jpg'   },
    '61.mp3': { title: 'Kaabil Hoon', singer: 'Jubin Nautiyal, Palak Muchhal', movie: 'Kaabil', language: 'Hindi'  , img: 'images/42.jpg'   },
    '62.mp3': { title: 'Mera Yaar', singer: 'Shankar-Ehsaan, Javed Bashir', movie: 'Bhaag Milkha Bhaag', language: 'Hindi'  , img: 'images/43.jpg'   },
    '63.mp3': { title: 'Mann Mera', singer: 'Gajendra Verma', movie: 'Table No. 21', language: 'Hindi'  , img: 'images/44.jpg'   },
    '64.mp3': { title: 'O Sajna', singer: 'Puja Thaker, Gajendra Verma', movie: 'Table No. 21', language: 'Hindi'  , img: 'images/44.jpg'   },
    '65.mp3': { title: 'Lut Gaye', singer: 'Jubin Nautiyal', movie: 'Mumbai Saga', language: 'Hindi'  , img: 'images/45.jpg'   },
    '66.mp3': { title: 'Pani Da Rang', singer: 'Ayushmann Khurrana', movie: 'Vicky Donor', language: 'Hindi'  , img: 'images/46.jpg'   },
    '67.mp3': { title: 'Yun Hi Chala Chal', singer: 'Udit Narayan, Kailash Kher', movie: 'Swades', language: 'Hindi'  , img: 'images/47.jpg'   },



    '22.mp3': { title: 'Ved Lavlay', singer: 'Vishal Dadlani', movie: 'Ved', language: 'Marathi'  , img: 'images/22.jpg'    },
    '27.mp3': { title: 'Vithu Mauli Tu', singer: 'Sahil Pandhre', movie: 'An album', language: 'Marathi'  , img: 'images/27.jpg'   },
    '30.mp3': { title: 'Man Udhan Varyache', singer: 'Shankar Mahadevan , Ajay-Atul', movie: 'Aga Bai Arecha', language: 'Marathi'  , img: 'images/30.jpg'   },
    '55.mp3': { title: 'Kanda Raja Pandaricha', singer: 'Chitanya Devdhe', movie: 'Dharila Pandreecha Chor', language: 'Marathi'  , img: 'images/36.jpg'   },
    '56.mp3': { title: 'Majhe Maher Pandhari', singer: 'Vishwajeet Borwankar', movie: 'An album', language: 'Marathi'  , img: 'images/37.jpg'   },
    '90.mp3': { title: 'Sur Niragas Ho', singer: 'Shankar Mahadevan, Anandi Joshi', movie: 'Katyar Kaljat Ghusli', language: 'Marathi'  , img: 'images/66.jpg'   },
    '91.mp3': { title: 'Man Mandira Tejane', singer: 'Shankar Mahadevan', movie: 'Katyar Kaljat Ghusli', language: 'Marathi'  , img: 'images/66.jpg'   },



    '26.mp3': { title: 'Blue ', singer: 'yung kai', movie: 'An album', language: 'English' , img: 'images/26.jpg'    },
    '28.mp3': { title: 'Past Lives', singer: 'BØRNS', movie: 'An album', language: 'English'  , img: 'images/28.jpg'   },
    '68.mp3': { title: 'Right Now (Na Na Na)', singer: 'Akon', movie: 'Freedom', language: 'English'  , img: 'images/48.jpg'   },
    '69.mp3': { title: 'Runaway', singer: 'Aurora', movie: 'An album', language: 'English'  , img: 'images/49.jpg'   },
    '70.mp3': { title: 'End of Beginning', singer: 'Djo', movie: 'Decide', language: 'English'  , img: 'images/50.jpg'   },
    '71.mp3': { title: 'ilomilo', singer: 'MBNN, Rowald Steyn', movie: 'An album', language: 'English'  , img: 'images/51.jpg'   },    
    '72.mp3': { title: 'One Kiss', singer: 'Calvin Harris, Dua Lipa', movie: 'An album', language: 'English'  , img: 'images/52.jpg'   },
    '73.mp3': { title: 'Co2', singer: 'Prateek Kuhad', movie: 'The Way That Lovers Do', language: 'English'  , img: 'images/53.jpg'   },
    '74.mp3': { title: 'Freak The Freak Out ', singer: 'Victorious', movie: 'Victorious Cast', language: 'English'  , img: 'images/54.jpg'   },
    '75.mp3': { title: 'High', singer: 'Stephen Sanchez', movie: 'Angel Face', language: 'English'  , img: 'images/55.jpg'   },
    '84.mp3': { title: 'Die With A Smile', singer: 'Lady Gaga, Bruno Mars', movie: 'An album', language: 'English'  , img: 'images/60.jpg'   },
    '85.mp3': { title: 'We fell in love in Oct', singer: 'Marie Ulven', movie: 'Silver Linings Playbook', language: 'English'  , img: 'images/61.jpg'   },
    '86.mp3': { title: 'Migraine', singer: 'BoyWithUke', movie: '-', language: 'English'  , img: 'images/62.jpg'   },
    '87.mp3': { title: 'Everyday Normal Guy 2', singer: 'Jon Lajoie', movie: 'You Want Some of This?', language: 'English' , img: 'images/63.jpg'    },
    '88.mp3': { title: 'Beggin', singer: 'Måneskin', movie: 'Chosen', language: 'English' , img: 'images/64.jpg'    },
    '89.mp3': { title: 'No Lie', singer: 'Sean Paul', movie: '-', language: 'English' , img: 'images/65.jpg'    },
    


    '23.mp3': { title: 'Top Lesi Poddi', singer: 'Geetha Madhuri , Sagar', movie: 'Iddarammayilatho', language: 'Telugu' , img: 'images/23.jpg'    },
    '53.mp3': { title: 'Aa Ante Amalapuram', singer: 'Malathy', movie: 'Maximum', language: 'Telugu' , img: 'images/34.jpg'    },
    '76.mp3': { title: 'Edhuta Nilichindhi', singer: 'Kamalakar, Karthik', movie: 'Vaana', language: 'Telugu' , img: 'images/56.jpg'    },
    '77.mp3': { title: 'Inkem Inkem Kaavaale', singer: 'Sid Sriram', movie: 'Geetha Govindam', language: 'Telugu' , img: 'images/57.jpg'    },
    '78.mp3': { title: 'Kaadhal En Kaviye', singer: 'Sid Sriram', movie: 'Salmon 3D', language: 'Telugu' , img: 'images/58.jpg'    },



    '24.mp3': { title: '米津玄師 -Lemon', singer: 'Kenshi Yonezu', movie: 'Unnatural', language: 'Japanese' , img: 'images/24.jpg'    },
    '29.mp3': { title: 'Sayonara Daisuki Na ', singer: 'Maria', movie: 'An album', language: 'Japanese'  , img: 'images/29.jpg'   },
    '50.mp3': { title: '女性が歌うあとひとつ', singer: 'コバソロ & こぴ', movie: 'An album', language: 'Japanese'  , img: 'images/32.jpg'   },
    '51.mp3': { title: '女性が歌う', singer: 'Kobasolo , Chiai Fujikawa', movie: 'An album', language: 'Japanese'  , img: 'images/33.jpg'   },


    '10.mp3': { title: 'Kabhi Kabhi Aditi Mix', singer: '-', movie: '-', language: 'Mixup' , img: 'images/10.jpg'  },
    '79.mp3': { title: 'Atif Aslam Mashup', singer: 'Atif Aslam', movie: '-', language: 'Mixup'  , img: 'images/59.jpg'   },
    '31.mp3': { title: 'Mix Marathi ', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '32.mp3': { title: 'Megamix', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '33.mp3': { title: 'Nostalgic Love Mashup', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '34.mp3': { title: 'Stay Mashup', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '35.mp3': { title: 'Suniyan X Kaakan', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '36.mp3': { title: 'Mashup  Full', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '37.mp3': { title: 'Love Mashup 2022', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '38.mp3': { title: 'Mashup - 90s', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '39.mp3': { title: 'Soluful Mashup', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '40.mp3': { title: 'Marathi Love Mashup', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '41.mp3': { title: 'Mashup  Sahiba', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '42.mp3': { title: 'Magenta Megamix', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '43.mp3': { title: 'Marathi Love Mashup', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '44.mp3': { title: 'Mashup Lofi Beatz', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '46.mp3': { title: 'Ishq Hai X O Rangrez', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '47.mp3': { title: ' KK Mashup 2024 ', singer: 'KK, Emran Hashmi', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '48.mp3': { title: 'Mashup', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '49.mp3': { title: '90s SRK Mashup', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '52.mp3': { title: '80s Marathi Mashup', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '81.mp3': { title: 'Cocktail Mashup 2024', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '82.mp3': { title: 'Megamix - Style', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '83.mp3': { title: 'HollyBolly Mashup 2024', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },
    '80.mp3': { title: 'Dekha Ek Khwab x Laila', singer: '-', movie: '-', language: 'Mixup'  , img: 'images/10.jpg'   },

    

  };
  

// DOM Elements
const playPauseBtn = document.getElementById('playPause');
const seekBar = document.getElementById('seekBar');
const currentTime = document.getElementById('current-time');
const totalTime = document.getElementById('total-time');
const volumeSlider = document.getElementById('volume');
const languageFilter = document.getElementById('filter-language');
const repeatBtn = document.getElementById('repeat');
const repeatStatus = document.getElementById('repeat-status');


let currentSongIndex = 0;
let filteredSongsList = []; // Only songs matching the selected language
let isRepeat = false;



const filterContainer = document.getElementById('filter-container');
const filterBoxes = filterContainer.querySelectorAll('.filter-box');

filterBoxes.forEach(filterBox => {
  filterBox.addEventListener('click', () => {
    const selectedLanguage = filterBox.getAttribute('data-lang');
    // Filter only those songs that match selected language
    filteredSongsList = Object.entries(songDetails)
      .filter(([filename, details]) => selectedLanguage === 'All' || details.language === selectedLanguage)
      .map(([filename]) => `music/${filename}`);
    
    const filteredKeys = filteredSongsList.map(songPath => songPath.split('/').pop());
    renderPlaylist(filteredKeys);
    
    // Reset to first filtered song
    currentSongIndex = 0;
    if (filteredSongsList.length > 0) {
      loadSong(currentSongIndex);
      audio.play();
    }
  });
});


// Load song and update UI
function loadSong(index) {
  if (filteredSongsList.length === 0) return;
  const songPath = filteredSongsList[index];
  const fileName = songPath.split('/').pop();
  const details = songDetails[fileName];
  document.getElementById('song-img').src = details.img;  // ✅ ADD THIS
  audio.src = songPath;
  const songNameEl = document.getElementById('song-name');

  songNameEl.innerHTML = `<div style="margin-left: 5px; margin-bottom: 5px;"><span class="emoji" style="font-size: 1.0em;">🎧</span> ${details.title}</div>`;
  document.getElementById('singer').innerHTML = `<div style="margin-left: 5px; margin-bottom: 5px;"><span class="emoji" style="font-size: 1.2em;">🎙️</span> <span style="font-size: 0.9em;">${details.singer}</span></div>`;
  document.getElementById('movie').innerHTML = `<div style="margin-left: 5px;"><span class="emoji" style="font-size: 1.2em;">🎬</span> <span style="font-size: 0.9em;">${details.movie}</span></div>`;
   highlightPlaylist(index);
}




// Highlight playlist item when clicked
function highlightPlaylist(index) {
  const playlist = document.getElementById('playlist');
  const playlistItems = playlist.getElementsByTagName('li');
      for (let i = 0; i < playlistItems.length; i++) {
      if (i === index) {
        playlistItems[i].style.backgroundColor = '#69d2ce';  // Updated color code
      } else {
        playlistItems[i].style.backgroundColor = '';
      }
    }
  }

  function renderPlaylist(filteredSongs) {
    const playlist = document.getElementById('playlist');
    playlist.innerHTML = '';
    filteredSongs.forEach((fileName, index) => {
      const details = songDetails[fileName];
      const listItem = document.createElement('li');
      listItem.textContent = `${details.title}`; // ✅ Only song title shown
      listItem.addEventListener('click', () => {
        currentSongIndex = filteredSongsList.indexOf(`music/${fileName}`);
        loadSong(currentSongIndex);
        audio.play();
      });
      playlist.appendChild(listItem);
    });
  }
  
  filteredSongsList = songs;
  renderPlaylist(songs.map(songPath => songPath.split('/').pop()));
  

// Update seek bar and time during playback
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBar.value = progress;

  const currentMins = Math.floor(audio.currentTime / 60);
  const currentSecs = Math.floor(audio.currentTime % 60);
  currentTime.textContent = `${currentMins}:${currentSecs < 10 ? '0' : ''}${currentSecs}`;

  const totalMins = Math.floor(audio.duration / 60);
  const totalSecs = Math.floor(audio.duration % 60);
  totalTime.textContent = `${totalMins}:${totalSecs < 10 ? '0' : ''}${totalSecs}`;
});

// Allow user to seek by dragging
seekBar.addEventListener('input', () => {
  const seekTo = (seekBar.value / 100) * audio.duration;
  audio.currentTime = seekTo;
});


// Update volume
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

const playPauseIcon = document.getElementById('playPause-icon');


// Toggle play/pause
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().then(() => {
      // After audio starts playing, change the icon to "stop"
      playPauseIcon.src = "icons/stop.png";  // Show stop icon
    }).catch(error => {
      console.log("Error while playing the audio: ", error);
    });
  } else {
    audio.pause();
    // Once audio is paused, change the icon to "play"
    playPauseIcon.src = "icons/play.png";  // Show play icon
  }
});



// Next button functionality
document.getElementById('next').addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  lottiePlayer.play(); // Play the Lottie animation when song changes
});

// Previous button functionality
document.getElementById('prev').addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  lottiePlayer.play(); // Play the Lottie animation when song changes
});

// Repeat button functionality
repeatBtn.addEventListener('click', () => {
  isRepeat = !isRepeat;
  if (isRepeat) {
    audio.loop = true;
  } else {
    audio.loop = false;
  }
});

// Update playlist with songs
songs.forEach((song, index) => {
  const li = document.createElement('li');
  li.textContent = songDetails[song.split('/').pop()].title;
  li.addEventListener('click', () => {
    currentSongIndex = index;
    loadSong(index);
    audio.play();
    lottiePlayer.play(); // Play the Lottie animation when song is selected from playlist
  });
  playlist.appendChild(li);
});

// Load the first song initially
loadSong(currentSongIndex);

// Drag the seek bar to update the audio position (Mouse and Touch support)
function updateSeekBar(e) {
  const max = seekBar.max;
  let offsetX;
  // Check for mouse or touch event
  if (e.type === 'mousedown' || e.type === 'mousemove') {
    offsetX = e.offsetX;
  } else if (e.type === 'touchstart' || e.type === 'touchmove') {
    offsetX = e.touches[0].clientX - seekBar.getBoundingClientRect().left;
  }
  const width = seekBar.offsetWidth;
  const percentage = (offsetX / width) * 100;
  seekBar.value = percentage;
  audio.currentTime = (percentage / 100) * audio.duration;
}

// Mouse event listeners
seekBar.addEventListener('mousedown', (e) => {
  updateSeekBar(e);

  // Add mousemove event to allow dragging
  function onMouseMove(e) {
    updateSeekBar(e);
  }

  // Stop dragging on mouseup
  function onMouseUp() {
    seekBar.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  seekBar.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

// Touch event listeners for mobile devices
seekBar.addEventListener('touchstart', (e) => {
  updateSeekBar(e);

  // Add touchmove event to allow dragging
  function onTouchMove(e) {
    updateSeekBar(e);
  }

  // Stop dragging on touchend
  function onTouchEnd() {
    seekBar.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  }

  seekBar.addEventListener('touchmove', onTouchMove);
  document.addEventListener('touchend', onTouchEnd);
});

function showFilteredSongs(selectedLanguage) {
  const libraryContainer = document.getElementById('song-library');
  libraryContainer.innerHTML = ''; // Clear previous songs

  for (const [filename, details] of Object.entries(songs)) {
    if (details.language === selectedLanguage) {
      const songCard = document.createElement('div');
      songCard.className = 'song-card';

      songCard.innerHTML = `
        <h3>${details.title}</h3>
        <p><strong>Singer:</strong> ${details.singer}</p>
        <p><strong>Movie:</strong> ${details.movie}</p>
        <p><strong>Language:</strong> ${details.language}</p>
        <audio controls src="music/${filename}"></audio>
      `;

      libraryContainer.appendChild(songCard);
    }
  }
}



function updateSongLanguage(fileName, newLanguage) {
  if (songDetails[fileName]) {
    songDetails[fileName].language = newLanguage;
    console.log(`Updated language for ${fileName} to ${newLanguage}`);
  } else {
    console.log(`Song ${fileName} not found.`);
  }
}


const languageButtons = document.querySelectorAll('.filter-box');
const xBtn = document.getElementById('toggle-filter');
const libraryDrawer = document.getElementById('library-drawer');

// Function to be called when a language is selected (Manual or Automatic)
function handleLanguageSelection(language) {
  // Example of automatic functionality (trigger 'x' function based on language)
  if (language === 'English') {
    automaticFunction(); // Call automatic function for 'English'
  } else {
    manualFunction(); // Call manual function for other languages
  }

  // Close the drawer after selecting the language
  closeDrawer();
}

// Manual Function
function manualFunction() {
  console.log('Manual Function Triggered');
  // Add your manual functionality here
}

// Automatic Function
function automaticFunction() {
  console.log('Automatic Function Triggered');
  // Add your automatic functionality here
}

// Close the drawer
function closeDrawer() {
  libraryDrawer.classList.remove('active'); // Assuming 'active' is the class for open state
}

// Event listener for language selection
languageButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const selectedLanguage = event.target.getAttribute('data-lang');
    handleLanguageSelection(selectedLanguage);
  });
});

// Event listener for toggle button (x button)
xBtn.addEventListener('click', () => {
  console.log('Toggle button clicked');
  // Toggle the drawer open/close when the button is clicked
  libraryDrawer.classList.toggle('active');
});




const micButton = document.getElementById('toggle-lyrics');
const lyricsContainer = document.getElementById('lyrics');
const closeLyrics = document.getElementById('close-lyrics');

micButton.addEventListener('click', () => {
  lyricsContainer.style.visibility = 'visible';  // Make the container visible
  lyricsContainer.style.opacity = 1;  // Set opacity to fully visible
  setTimeout(() => {
    lyricsContainer.classList.add('show');  // Slide in with animation
  }, 10);
});

closeLyrics.addEventListener('click', () => {
  lyricsContainer.classList.remove('show');  // Slide out with animation
  setTimeout(() => {
    lyricsContainer.style.opacity = 0;  // Fade out
    lyricsContainer.style.visibility = 'hidden';  // Hide it after animation
  }, 500);  // Matches the 500ms transition time
});


const lyricsText = document.getElementById('lyrics-text');

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const lyricsText = document.getElementById('lyrics-text');
  const defaultMessage = document.querySelector('.bold-text'); // 💡 Target the static line

  audio.addEventListener('play', () => {
    const filename = audio.currentSrc.split('/').pop();
    const lyricsLines = getLyrics(filename);

    // 💥 Hide the default "Select a song..." text
    if (defaultMessage) defaultMessage.style.display = 'none';

    // Clear previous lyrics only
    lyricsText.innerHTML = '';

    // Add each line (with emoji image if > is found)
    lyricsLines.forEach(line => {
      const lineElement = document.createElement('div');
      lineElement.innerHTML = line;
      lyricsText.appendChild(lineElement);
    });
  });
});






