const apiUrl = "https://s3.amazonaws.com/open-to-cors/assignment.json";

const divContainer = document.querySelector(".item");

async function fetchApi(url) {
  const response = await fetch(url);
  const responseData = await response.json();
  const productsData = responseData["products"];

  arr = [];
  for (variable in productsData) {
    arr.push(productsData[variable]);
  }
  arr.sort((a, b) => {
    return b.popularity - a.popularity;
  });
  arr.forEach((arr) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText ="Title: " + arr["title"] + "\nPrice :  " +  arr["price"];
    ul.appendChild(li);
    divContainer.appendChild(ul);
    
  });
}
fetchApi(apiUrl);