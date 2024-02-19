const apiEl = "https://api.quotable.io/random"

const quoteEl = document.getElementById("quote")
const btnEl = document.getElementById("btn")
const authorEl = document.getElementById("author")

async function getquote(){
    const quoteApi = await fetch(apiEl).then((res) => res.json())
    const quoteContent = quoteApi.content
    const quoteAuthor = quoteApi.author

    quoteEl.innerText = quoteContent
    authorEl.innerText = quoteAuthor


}

btnEl.addEventListener("click" , getquote)
