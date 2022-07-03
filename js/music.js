const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    audio: [{
        name: 'comethru',
        artist: 'Jeremy Zucker / Bea Miller',
        url: 'https://dl.stream.qqmusic.qq.com/C400002h3qS42H0bpN.m4a?guid=2807914998&vkey=2D3F079B5127B15BCC3818940B215FE60F2A204BF350DE1C5C0F117C29395B99B70BCB2C6DA2734489B0D80CF9B95E0DA950CCEF2977FEA1&uin=1176139845&fromtag=120032',
        cover: 'http://p1.music.126.net/mmMLF6_a1yDnzGO1LVyCeg==/109951163926564641.jpg?param=130y130',
    },
   {
            name: "Baby I'm Yours",
            artist: 'Breakbot',
            url: 'https://dl.stream.qqmusic.qq.com/C400002s767H3mj2h1.m4a?guid=6560413900&vkey=1A1D600BD21C82B85CFEBAB859DE144485815F6E74BFB3AFB4320FA5B73C7FE3EB18690A03D7A7E8E2565DBB3FCCF94CA9928C34AC293E1B&uin=1176139845&fromtag=120032',
            cover: 'http://p1.music.126.net/9YvEXwlECxr3o-lZp-nmLw==/109951165212867712.jpg?param=130y130',
     }
    ]
});