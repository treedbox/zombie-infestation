//cache version
var cacheName = 'v2';
//cache files
var cacheFiles = [
	'./',
	'./index.html',
	'./css/style.css',
	'./js/app.js',
	'./js/game.js',
	'./sw.js',
	'./images/char1.svg',
	'./images/char2.svg',
	'./images/char3.svg',
	'./images/char4.svg',
	'./images/char5.svg',
	'./images/char6.svg',
	'./images/char7.svg',
	'./images/char8.svg',
	'./images/char9.svg',
	'./images/char10.svg',
	'./images/char11.svg',
	'./images/char12.svg',
	'./images/char13.svg',
	'./images/char14.svg',
	'./images/char15.svg',
	'./images/char16.svg',
	'./images/char17.svg',
	'./images/char18.svg',
	'./images/char19.svg',
	'./images/char20.svg',
	'./images/char21.svg',
	'./images/char22.svg',
	'./images/char23.svg',
	'./images/char24.svg',
	'./images/char25.svg',
	'./images/char26.svg',
	'./images/char27.svg',
	'./images/char28.svg',
	'./images/joystic.svg',
	'./images/treedbox-presents1.svg',
	'./icon/treedbox.png',
	'./icon/treedbox-ani.svg',
	'./icon/zombie-infestation-1000.png',
	'./icon/zombie-infestation-500.png',
	'./icon/zombie-infestation.png',
	'./icon/zombie-infestation.svg',
	'./audio/girl01.ogg',
	'./audio/girl02.ogg',
	'./audio/girl03.ogg',
	'./audio/joni01.ogg',
	'./audio/marko01.ogg',
	'./audio/marko02.ogg',
	'./audio/marko03.ogg',
	'./audio/marko04.ogg',
	'./audio/marko05.ogg',
	'./audio/marko06.ogg',
	'./audio/marko07.ogg',
	'./audio/marko08.ogg',
	'./audio/paulo01.ogg',
	'./audio/paulo02.ogg',
	'./audio/robson01.ogg',
	'./audio/robson02.ogg',
	'./audio/robson03.ogg',
	'./audio/robson04.ogg',
	'./audio/toin01.ogg',
	'./audio/toin02.ogg',
	'./audio/toin03.ogg',
	'./audio/toin04.ogg',
	'./audio/zombie01.ogg',
	'./audio/zombie02.ogg',
	'./audio/zombie03.ogg',
	'./audio/zombie04.ogg',
	'./audio/zombie05.ogg',
	'./audio/street-city.ogg'
];

//install SW
self.addEventListener('install', function(e){
	console.log('SW Installed');
	console.log('e.waitUntil', e.waitUntil);
	//install wait until this Promise
	e.waitUntil(
		//open cache with the cacheName
		caches.open(cacheName)
			//then
			.then(function(cache){
				console.log('SW Caching Files', cache);
				//add all files listed in cacheFiles on this cache
				return cache.addAll(cacheFiles);
			})
	)
});

//activate SW
self.addEventListener('activate', function(e){
	console.log('SW activated');
	//activate wait until is complete
	e.waitUntil(
		caches.keys()
			.then(function(cacheNames){
				//looping throught everything in the cache
				return Promise.all(
					//get this cache by the name
					cacheNames.map(function(thisCacheName){
						//if this cache name is not equal the current
						if (thisCacheName !== cacheName) {
							console.log('removing old cache', thisCacheName);
							//remove old cache
							return caches.delete(thisCacheName);
						}
					})
				)
			})
	)
});
//fetch SW
self.addEventListener('fetch', function(e){
	console.log('SW fetching', e.request.url);

	e.respondWith(
		//check in cache if the requested url exists
		caches.match(e.request)
			.then(function(response){
				if (response) {
					console.log('SW Found in cache', e.request.url);
					//return the cache version
					return response;
				}
				//clone request
				var requestClone = e.request.clone();

				//if not found in cache, fetch request
				return fetch(requestClone)
				.then(function(response){
					//if no response from fetch
					if (!response) {
						console.log('SW no response from fetch');
						return response;
					}
					//
					var responseClone = response.clone();
					//
					caches.open(cacheName)
						//
						.then(function(cache){
							//
							cache.put(e.request, responseClone);
							//return response
							return response;
						});
				})
			})
			.catch(function(error){
				console.log('SW Error fetching & Caching new Data', error);
			})
	)

});
