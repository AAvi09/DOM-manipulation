const istatus = document.querySelector("h5");

const addFriend = document.querySelector("#add");

const removeFriend = document.querySelector("#remove");

let char = 0;

addFriend.addEventListener("click", () => {
  if (char == 0) {
    char = 1;
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
  } else {
    char = 0;
    istatus.innerHTML = "strangers";
    istatus.style.color = "red";
  }
});

// removeFriend.addEventListener("click", () => {
//   istatus.innerHTML = "strangers";
//   istatus.style.color = "red";
// });
