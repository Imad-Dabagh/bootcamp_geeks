// Daily challenge : Creating Objects
// 1. Create a class named Video. with the parameters title, uploader, time
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  // 2. Create a method called watch() which displays a string
  watch() {
    console.log(
      `Uploader ${this.uploader} watched all ${this.time} of ${this.title}`
    );
  }
}

// 3. Instantiate a new Video instance and call the watch() method.
let video1 = new Video("Titanic", "Ahmad", 12000);
video1.watch()

// 4. Instantiate a second Video instance with different values.
let video2 = new Video("Wja3 trab", "Jilali", 9000);
video2.watch();

// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
let arrayVideos = [
  { title: "Bertal", uploader: "Khadija", time: 15000 },
  { title: "Titanic", uploader: "Salma", time: 14000 },
  { title: "God Father", uploader: "Amine", time: 25000 },
  { title: "One Piece", uploader: "Imad", time: 15000000 },
  { title: "Naruto", uploader: "Yassine", time: 190000 },
];

// 6. Bonus: Loop through the array to instantiate those instances.
let instances = arrayVideos.map(video => {
    return new Video(video.title, video.uploader, video.time);
})

instances.forEach((instance) => {
  instance.watch();
});

