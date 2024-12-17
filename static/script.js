document.addEventListener("DOMContentLoaded", () => {


    
    fetch('/results_data')
        .then(response => response.json()) 
        .then(data => {
            const results = data.results; 
            const resultList = document.getElementById("result-list");

            
            results.forEach(item => {
            
                const result = JSON.parse(item);

                result.forEach(itn => {

                    const listItem = document.createElement("div");
                    listItem.style.border = "1px solid #ddd";
                    listItem.style.padding = "10px";
                    listItem.style.margin = "10px 0";


                    const title = document.createElement("h1");
                    title.textContent = itn.title || "Título não disponível";


                    const description = document.createElement("p");
                    description.textContent = itn.description || "Descrição não disponível";


                    const price = document.createElement("h2");
                    price.textContent = itn.price ? `Preço: ${itn.price}` : "Preço não disponível";


                    listItem.appendChild(title);
                    listItem.appendChild(description);
                    listItem.appendChild(price);

                    resultList.appendChild(listItem);
                })

            });
        })
        .catch(error => console.error("Erro ao buscar resultados:", error));



});