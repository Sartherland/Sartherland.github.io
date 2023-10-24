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
        url: 'https://m701.music.126.net/20231024232303/580555b1cdca82e361958da39eabfb2b/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14954921816/048a/ea4d/0da7/715a758cf685e957eccbbc14bf34a690.m4a',
        cover: 'http://p2.music.126.net/SvM1dpYNtWxT1K9Otg7JGA==/109951167549562317.jpg?param=130y130',
    },
   
    ]
});