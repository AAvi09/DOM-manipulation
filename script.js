const istatus = document.querySelector("h5");

const addFriend = document.querySelector("#add");

const removeFriend = document.querySelector("#remove");

const card = document.querySelector("#card");

let char = 0;

addFriend.addEventListener("click", () => {
  if (char == 0) {
    char = 1;
    istatus.innerHTML = "Friends";
    istatus.style.color = "white";
    addFriend.style.background = "linear-gradient(to right, #00c6ff, #0072ff";
    addFriend.innerHTML = "Remove friend";
    card.style.background = "linear-gradient(to right, #00c6ff, #0072ff";
  } else if (char == 1) {
    char = 0;
    istatus.innerHTML = "strangers";
    istatus.style.color = "black";
    addFriend.style.background = "linear-gradient(to right, #ff512f, #dd2476";
    addFriend.innerHTML = "Add friend";
    card.style.background = "linear-gradient(to right, #ff512f, #dd2476";
  }
});

// removeFriend.addEventListener("click", () => {
//   istatus.innerHTML = "strangers";
//   istatus.style.color = "red";
// });
