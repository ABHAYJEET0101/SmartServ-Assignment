const url = 'https://s3.amazonaws.com/open-to-cors/assignment.json'
    async function getISS(){
        const arr = [];
        try{
            const response = await fetch(url);
            const data = await response.json();
            const dataproducts = data["products"];
            
            for(variable in dataproducts){
                arr.push(dataproducts[variable]);
            }
            arr.sort((x, y) =>
                x.popularity -y.popularity
            )
            
            console.log(arr);
        }
        catch (e) {
            console.log("Error!");
            console.log(e);
        }
    
  
        let list = document.getElementById("ans");
  
        arr.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = JSON.stringify(item, null, 2);
            list.appendChild(li);
        });
    }
getISS();