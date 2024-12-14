function deleteMovie() {
    alert("sdfdss");
    console.log("ALA");
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    console.log(checkedBoxes);
    for (var i=0; i<checkedBoxes.length; i++) {
        document.getElementById("moviesList").removeChild(checkedBoxes[i].parentNode)
    }
}
function addMovie() {
    var movieTitle = document.getElementById("inputTitle").value;
    var movieYear = document.getElementById("inputYear").value;
    var movieActors = document.getElementById("inputActors").value;
  if (movieTitle == "") {
    alert("Movie title cannot be empty");
    return;
  }
  if (movieYear == "") {
    alert("Movie year cannot be empty");
    return;
  }
    if (movieActors == "") {
    alert("Movie actors cannot be empty");
    return;
  }

    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
    document.getElementById("moviesList").appendChild(li);
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputYear").value = "";
    document.getElementById("inputActors").value = "";
}