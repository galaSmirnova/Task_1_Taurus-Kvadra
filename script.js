var newsBlock = document.getElementById('news'),    
    form = document.getElementById('add'),
    requestURL = 'data.json', //файл находится в той же папке, что и html-файл, который к нему обращается
    request = new XMLHttpRequest();
request.open('GET', requestURL);
request.onload = function(e) {
    if (request.readyState === 4) {
        if (request.status === 200) {
            console.log(request.response);
            var dataBlock = JSON.parse(request.responseText);
            getBlockInfo(dataBlock);
        } else {
            console.error(request.statusText);
        }
    }
};
request.onerror = function(e) {
    console.error(request.statusText);
};
request.send();
 
function getBlockInfo(data) {       
    data.articles.forEach(function(elem) {
        let div = document.createElement('div');        
        let date = Date.parse(elem.publishedAt);
        div.className = "news_block";        
        div.innerHTML = `<img src="${elem.urlToImage}"><h2><a href="${elem.url}">${elem.title}</a></h2><p class="date">${date}</p><p>${elem.description}</p>`;
        news.appendChild(div);
    }); 
}
form.onsubmit = function (evt) {
        let div = document.createElement('div'),
        titleNews = document.getElementById('title'),
        linkNews = document.getElementById('link_news'),
        imgNews = document.getElementById('link_img'),
        authorNews = document.getElementById('author'),
        descriptionNews = document.getElementById('description');
        div.className = "news_block"; 
        div.innerHTML = `<img src="${imgNews.value}"><h2><a href="${linkNews.value}">${titleNews.value}</a></h2><p>${descriptionNews.value}</p>`;
        news.prepend(div);
        return false;    
    } 