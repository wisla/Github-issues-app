
let navBtn = document.querySelectorAll('.side-nav__link'),
	issueBtn = document.querySelectorAll('.icon-svg');

for (let index = 0; index < navBtn.length; index++) {
	const element = navBtn[index];
	element.addEventListener('click', function () {
		element.classList.toggle("active");
	});
}

for (let index = 0; index < issueBtn.length; index++) {
	const element = issueBtn[index];
	element.addEventListener('click', function () {
		element.classList.toggle("active");
	});
}