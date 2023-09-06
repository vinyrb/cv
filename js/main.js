const scrollUp = document.querySelector("#scroll-up");
const burger = document.getElementById("kebab-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link")

scrollUp.addEventListener("click",() =>{
	window.scrollTo({
		top:0,
		left:0,
		behavior: "smooth",
	});
});

kebab.addEventListener("click",() =>{
	ul.classList.toggle("show");
});

navLink.forEach((link) =>
	link.addEventListener("click",() => {
		ul.classList.remove("show");
	})
);
