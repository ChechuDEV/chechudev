let div = document.createElement("div");
div.classList.add("privacy");

let title = document.createElement("h3");
title.textContent = "Cookies & Privacy";

let text = document.createElement("p");
text.textContent =
	"This site uses cookies to ensure you the best experiences of all.";
let continuingText = document.createElement("p");
continuingText.innerHTML =
	'By continuing, I must assume you\'re okay with them, however, <a href="privacy-policy">you can read more about them here.</a>';

let continueBtn = document.createElement("a");
continueBtn.classList.add("btn-black");
continueBtn.id = "continue";
continueBtn.textContent = "Continue";

div.appendChild(title);
div.appendChild(text);
div.appendChild(continuingText);
div.appendChild(continueBtn);

continueBtn.onclick = () => {
	div.classList.add("policy-disappear");
	setTimeout(() => {
		div.remove();
	}, 1000);
	window.localStorage.setItem("hide-consent", "26DEC");
};

if (window.localStorage.getItem("hide-consent") != "26DEC") {
	document.body.appendChild(div);
}
