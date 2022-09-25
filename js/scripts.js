const submit = document.getElementById("submit-data");

submit.addEventListener("click", getInfo);

async function getInfo() {
  let wanted = document.getElementById("input-show").value;
  const url = "https://api.tvmaze.com/search/shows?q=" + wanted;
  const promise = await fetch(url);
  let data = await promise.json();

  Object.keys(data).forEach((key) => {
    let divIn = document.createElement("div");
    divIn.className = "show-info"; //Help from https://stackoverflow.com/questions/20308270/create-multiple-divs-with-the-same-class-javascript
    let divOut = document.createElement("div");
    divOut.className = "show-data";
    var h1 = document.createElement("h1");
    var p = document.createElement("p");

    if (data[key].show.image !== null) {
      let img = document.createElement("img");
      img.src = data[key].show.image.medium;
      divOut.appendChild(img);
    }

    h1.innerHTML = data[key].show.name;
    p.innerHTML = data[key].show.summary;

    divIn.appendChild(h1);
    divIn.appendChild(p);

    divOut.appendChild(divIn);
    document.body.appendChild(divOut);
  });
}
