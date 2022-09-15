function request(url){
    let request = new XMLHttpRequest;
    request.open("GET",url,false);
    request.send();

    return request.responseText;
}

function phrases(){
    let data = request('https://api.kanye.rest/');
    let phrase = JSON.parse(data);

    let section = document.querySelector('#content')
    section.style.display = 'flex';

    console.log(phrase)
    section.innerHTML = phrase.quote;
}