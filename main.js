// const project1 = document.querySelector("#project1");
// const project2 = document.querySelector("#project2");
// const project3 = document.querySelector("#project3");

// project1.addEventListener("click", function () {
//   location.href = "http://www.suerecipes.com";
// });

// project2.addEventListener("click", function () {
//   location.href = "http://www.manar-blog.com";
// });

// project3.addEventListener("click", function () {
//   location.href = "http://www.incentiveuk.com";
// });

var myHeaders = new Headers();
myHeaders.append("clientId", "44f90130-92c5-4181-88d6-27692ee4ed7c");
myHeaders.append("Access-Control-Request-Headers", "*");
myHeaders.append(
  "Authorization",
  "Basic Y3d0ZXN0K2ZMbkxpcXU1SXVtTktqZVE6dGxWbFFsRlhMUEdaQkIyNg=="
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://cwtest.eswit.com/v4_6_release/apis/3.0/service/tickets",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
