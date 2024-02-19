const apiEl = "https://api.quotable.io/random"

const quoteEl = document.getElementById("quote")
const btnEl = document.getElementById("btn")
const writterEl = document.getElementById("writter")

async function getquote(){
    const quoteApi = await fetch(apiEl).then((res) => res.json())
    const quoteContent = quoteApi.content
    const quoteAuthor = quoteApi.author

    quoteEl.innerText = quoteContent
    writterEl.innerText = quoteAuthor

    console.log(quoteContent );
    console.log(quoteAuthor);
}

btnEl.addEventListener("click" , getquote)
