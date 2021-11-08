const courses = [
  { id: 1, name: "Introduction to Cloud Computing", hours: 3, year: 2021 },
  { id: 2, name: "Compiler Construction", hours: 3, year: 2021 },
  { id: 3, name: "Numerical Analysis", hours: 3, year: 2021 },
  { id: 4, name: "Introduction to Data Science", hours: 3, year: 2021 },
];

const body = document.querySelector(".tbody");

function display(arr = []) {
  for (let index = 0; index < arr.length; index++) {
    body.innerHTML += `
      <tr>
      <td>${arr[index].id}</td>
      <td id="${arr[index].name}"'>${arr[index].name}</td>
      <td>${arr[index].hours}</td>
      <td>${arr[index].year}</td>
      <tr>
      `;
  }
}
display(courses);

const search = document.querySelector(".search");
const searchbtn = document.querySelector(".src");

function searched(e) {
  e.preventDefault();
  if (!search.value) {
    window.alert("Null Value");
  } else {
    console.log(search.value);
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].name === search.value) {
        const data = document.getElementById(`${search.value}`);
        setTimeout(() => {
          data.classList.toggle("color");
        }, 3000);
        data.classList.toggle("color");
        search.value = "";
        break;
      }
    }
  }
}
searchbtn.addEventListener("click", searched);

const addbtn = document.querySelector(".add");
function addnew(e) {
  e.preventDefault();
  if (document.querySelector(".added").style.display === "block") {
    document.querySelector(".added").style.display = "none";
  } else {
    document.querySelector(".added").style.display = "block";
  }
}
addbtn.addEventListener("click", addnew);

const addnewbtn = document.querySelector(".addnewbtn");
function addnewcourse(e) {
  e.preventDefault();
  items = {
    id: document.querySelector(".addid").value,
    name: document.querySelector(".addname").value,
    hours: document.querySelector(".addhours").value,
    year: document.querySelector(".addyear").value,
  };
  courses.push(items);
  body.innerHTML = ``;
  for (let i = 0; i < courses.length; i++) {
    body.innerHTML += `
    <tr>
        <td>${courses[i].id}</td>
        <td id="${courses[i].name}"'>${courses[i].name}</td>
        <td>${courses[i].hours}</td>
        <td>${courses[i].year}</td>
        <tr>
    `;
  }
  addnew(e);
}
addnewbtn.addEventListener("click", addnewcourse);

const update = document.querySelector(".update");
function updatefun(e) {
  e.preventDefault();
  if (document.querySelector(".added2").style.display === "block") {
    document.querySelector(".added2").style.display = "none";
  } else {
    document.querySelector(".added2").style.display = "block";
  }
}
update.addEventListener("click", updatefun);

const updatebtn = document.querySelector(".updateit");

function updateit(e) {
  e.preventDefault();
  if (!document.querySelector(".addid2").value) {
    window.alert("Null Value");
    return;
  } else {
    updatefun(e);
    if (document.querySelector(".added3").style.display === "block") {
      document.querySelector(".added3").style.display = "none";
    } else {
      document.querySelector(".added3").style.display = "block";
    }
  }
}

updatebtn.addEventListener("click", updateit);

const updatefinal = document.querySelector(".addnewbtn3");

function updatefinally(e) {
  e.preventDefault();
  const val = document.querySelector(".addid2").value;
  items = {
    id: document.querySelector(".addid3").value,
    name: document.querySelector(".addname3").value,
    hours: document.querySelector(".addhours3").value,
    year: document.querySelector(".addyear3").value,
  };
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == val) {
      courses[i].id = items.id;
      courses[i].name = items.name;
      courses[i].hours = items.hours;
      courses[i].year = items.year;
      break;
    }
  }
  body.innerHTML = "";
  display(courses);
  updateit(e);
  updatefun(e);
}
updatefinal.addEventListener("click", updatefinally);

const rem = document.querySelector(".removebtn");
function removeitem(e) {
  e.preventDefault();
  if (document.querySelector(".added4").style.display === "block") {
    document.querySelector(".added4").style.display = "none";
  } else {
    document.querySelector(".added4").style.display = "block";
  }
}
rem.addEventListener("click", removeitem);

const rem2 = document.querySelector(".deleteit");

function deletetheitem(e) {
  e.preventDefault();
  for (let i = 0; i < courses.length; i++) {
    const val = document.querySelector(".addid4").value;
    if (courses[i].id == val) {
      courses.splice(i, 1);
      body.innerHTML = "";
      display(courses);
      removeitem(e);
      break;
    }
  }
}
rem2.addEventListener("click", deletetheitem);
