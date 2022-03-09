console.log("this is my index js file ");
// f75e34620d67483ab74d4fde5f4aab18

//initialize the news api parameters 
let source = 'bbc-news';
let apikey = 'f75e34620d67483ab74d4fde5f4aab18'

//grab the news container 
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request 
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);
xhr.getResponseHeader('content-type', 'application/json')

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        // console.log(json);
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index) {
        console.log(element,index);
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1} </b>
                                    ${element["title"]}
                                </button> 
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body"> ${element["content"]}.   <a href="${element['url']} " target = "_blank"  >Read more here  </a>   </div>
                            </div>
                        </div> `
            newsHtml+=news;
        
    });

        newsAccordion.innerHTML= newsHtml;

    }
    else {
        console.log("some error occured")
    }
}
xhr.send();


