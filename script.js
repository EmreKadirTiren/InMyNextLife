// We want:
// 1. To create a ai chat bublles and user chat bubbles
// 2. And AI logic to reply to the user

const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chat = document.getElementById("chat-container");

function addBubble(text, sender = "ai") {
  const bubble = document.createElement("div"); //Bubble = a div element
  bubble.classList.add("bubble", sender); //Says use the css bubble and, sender so .ai or .user class 
  bubble.textContent = text; 
  chat.appendChild(bubble); 
  chat.scrollTop = chat.scrollHeight; // Auto-scroll
}

// AI example message
addBubble("Welcome! Your life begins now... Choose wisely.", "ai"); // message, sender

form.addEventListener("submit", async (e) => { //Waits for the form submission when the user submits the form it creates a new bubble from the user
  e.preventDefault();
  const userText = input.value;
  if (!userText) return;

  addBubble(userText, "user"); // message, sender
  input.value = "";

  // Auto reply for demonstration
  addBubble("Hmm... interesting choice.");

  // Ai api + other things 

});
