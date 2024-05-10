const main = document.querySelector("main");
const endpoint = "https://thatsthespir.it/api";
const quoteBtn = document.querySelector("#show_quote");
const loader = document.querySelector('#loader')


const getQuote = async () => {
    try {
        loader.style.display = "block";
        const result = await fetch("https://thatsthespir.it/api");
        const data = await result.json();
        loader.style.display = 'none';
        createQuote(data);
    }
    catch(error) {
        alert("Failed to get you a quote! :-(")
    }
    finally {
        loader.style.display = "none"
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
    loader.style.display = "none";
    main.appendChild(quoteDiv);
}

getQuote();

quoteBtn.addEventListener("click", () => {
    loader.style.display = "block";
    const quoteDiv = document.querySelector(".quote");
    quoteDiv.innerHTML = "";
    setTimeout(getQuote, 400);
})