const form = document.querySelector("#searchContainer");
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  //   you should print waht value is in input and you need its place
  console.dir(form);
  const searchTerm = form.elements.searchInput.value;
  console.log(searchTerm);
  const res = await axios.get(
    ` https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  console.log(res.data);

  //   //   name
  //   const name1 = document.createElement("H2");
  //   name1.src = res.data[1].show.name;
  //   console.log(name1);
  //   document.append(name1);
  for (let i = 0; i < 10; i++) {
    const img = document.createElement("IMG");
    img.src = res.data[i].show.image.medium;
    document.body.append(img);
  }
});
