const encryption = document.querySelector("#encryption");
const textarea = document.querySelector(".principal-text-area");

encryption.addEventListener("click", () => {
  let text;
  const msg = textarea.value;

  for (text = 0; text < msg.length; text++) {
    if (msg === "a") {
      alert((msg.value = "ai"));
    } else {
      alert(msg.value);
    }
  }
});
