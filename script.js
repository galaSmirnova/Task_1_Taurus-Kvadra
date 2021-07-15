var newsBlock = document.getElementById('news'),    
    form = document.getElementById('add'),
    requestURL = 'data.json',
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
        let div = document.createElement('div'),        
            date = new Date(Date.parse(elem.publishedAt)),
            dateNews;
        if ((date.getMonth(date) + 1) < 10) {
                dateNews = date.getDate(date) + "." + "0" + (date.getMonth(date) + 1) + "." + date.getFullYear(date);
            } else {
                dateNews = date.getDate(date) + "." + (date.getMonth(date) + 1) + "." + date.getFullYear(date);
        }       
        div.className = "news_block";        
        div.innerHTML = `<img src="${elem.urlToImage}"><h2><a href="${elem.url}">${elem.title}</a></h2><p class="date">${dateNews} | ${elem.author}</p><p>${elem.description}</p>`;
        news.appendChild(div);
    }); 
}
form.onsubmit = function (evt) { 
        let titleNews = document.getElementById('title'),
            linkNews = document.getElementById('link_news'),
            imgNews = document.getElementById('link_img'),
            authorNews = document.getElementById('author'),
            dateSetNews = document.getElementById('date'),
            descriptionNews = document.getElementById('description'),
            div = document.createElement('div');       
        div.className = "news_block"; 
        div.innerHTML = `<img src="${imgNews.value}"><h2><a href="${linkNews.value}">${titleNews.value}</a></h2><p>${dateSetNews.value} | ${authorNews.value}</p><p>${descriptionNews.value}</p>`;
        news.prepend(div);                
        return false;
    } 