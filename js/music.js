const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    autoplay: false,
    theme: '#252d38',
    audio: [{
        name: 'shelveme',
        artist: 'Tai Verdes',
        url: '/playlist/sheluvme.m4a',
        cover: 'http://p2.music.126.net/SvM1dpYNtWxT1K9Otg7JGA==/109951167549562317.jpg?param=130y130',
    },
                {
        name: '够爱',
        artist: '曾沛慈',
        url: '/playlist/够爱.m4a',
        cover: 'http://p2.music.126.net/SvM1dpYNtWxT1K9Otg7JGA==/109951167549562317.jpg?param=130y130',
    },
   
    ]
});