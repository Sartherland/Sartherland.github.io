const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'comethru',
        artist: 'Jeremy Zucker / Bea Miller',
        url: 'https://m801.music.126.net/20220703194136/bce17347937a5aa5ab067834244c220d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/13256834629/6bc0/9823/70a6/fc7b828f92b3ef1eb6e2cb857e2eb00a.m4a',
        cover: 'https://p1.music.126.net/mmMLF6_a1yDnzGO1LVyCeg==/109951163926564641.jpg?param=34y34',
    }, 
	]
});
