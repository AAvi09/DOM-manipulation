const istatus = document.querySelector("h5");

const addFriend = document.querySelector("#add");

const removeFriend = document.querySelector("#remove");

let char = 0;

addFriend.addEventListener("click", () => {
  if (char == 0) {
    char = 1;
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    addFriend.style.background = "linear-gradient(to right, #00c6ff, #0072ff";
    addFriend.innerHTML = "Remove friend";
  } else {
    char = 0;
    istatus.innerHTML = "strangers";
    istatus.style.color = "red";
    addFriend.style.background = "linear-gradient(to right, #ff512f, #dd2476";
    addFriend.innerHTML = "Add friend";
  }
});

// removeFriend.addEventListener("click", () => {
//   istatus.innerHTML = "strangers";
//   istatus.style.color = "red";
// });
