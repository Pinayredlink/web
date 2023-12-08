
const videoData = [
    { duration: '02:53', info: 'Wait lang muna baby nag quicky lang si mommy at daddy.' },
    { duration: '04:31', info: 'Baby face lang pero meron nang malalaking kabundokan sa probinsya.' },
    { duration: '02:08', info: 'Ako muna mag drive baby alam ko na pagod ka galing trabaho.' },
    { duration: '01:16', info: 'Iba yung pinag aralan ng mag classmate.' },
    { duration: '02:01', info: 'Kaya kuna to babe higa ka lang dyan.' },
    { duration: '01:00', info: 'Nakabored na sa TikTok kaya lipat tayo sa OnlyFans.' },
    { duration: '01:05', info: 'Masage ko lang to saglit.' },
    { duration: '04:17', info: 'Lf kasabay maligo.' },
    { duration: '04:55', info: 'Nadala ni captain-ball sa kwarto si cheerleader.' },
    { duration: '01:09', info: 'Nag practice kasi gawin daw siyang muse.' },
 
    // Add more video data as needed 
];

const videoAds = [
    { adS: 'ads1.com'},
    { adS: 'ads2.com'},
    { adS: 'ads3.com'},
    { adS: 'ads4.com'},
    { adS: 'ads4.com'},
    { adS: 'ads4.com'},
    { adS: 'ads4.com'},
    { adS: 'ads4.com'},
    { adS: 'ads4.com'},
    { adS: 'ads4.com'},
    { adS: 'ads4.com'},
    { adS: 'ads4.com'},
]; 

const adsLength = videoAds.length;
const totalVideos = videoData.length;
const videosPerPage = 5;

function generateVideoUrl() {
    const videoUrl = [];
    for (let i = totalVideos; i > 0 ; i--) {
        videoUrl.push({
            src: `assets/clips/clip${i}.mp4`,
            videoSrc: `assets/videos/video${i}.mp4`
        });
    }
    return videoUrl;
}