const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCy5znSnfMsDwaLlROnZ7Qbg&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '71dd11a2e3msh14664d2ecf35b10p1e5094jsna4e0b2a6c43c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlApi, payload) {
    const response = await fetch(urlApi, payload);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(url, options);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();