const istatus = document.querySelector("h5");

const addFriend = document.querySelector("#add");

const removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click", () => {
  istatus.innerHTML = "Friends";
  istatus.style.color = "green";
});

removeFriend.addEventListener("click", () => {
  istatus.innerHTML = "strangers";
  istatus.style.color = "red";
});
