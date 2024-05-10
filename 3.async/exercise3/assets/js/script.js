const main = document.querySelector("main");
const endpoint = "https://thatsthespir.it/api";
const quoteBtn = document.querySelector("#show_quote");

const getQuote = async () => {
    try {
        const result = await fetch("https://thatsthespir.it/api");
        const data = await result.json()
        createQuote(data);
    }
    catch(error) {
        alert("Failed to get you a quote! :-(")
    }
}

const createQuote = (data) => {
    const quoteDiv = document.querySelector(".quote");
    quoteDiv.innerHTML = 
    `
    <blockquote>"${data.quote}"</blockquote>
    <div class="img-container" style="background-image: url('${data.photo}');">
    </div>
    <div class="author">- ${data.author}</div>
    `
    main.appendChild(quoteDiv);
}

getQuote();

quoteBtn.addEventListener("click", () => {
    getQuote();
})