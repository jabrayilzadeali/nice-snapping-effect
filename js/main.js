const navs = document.querySelectorAll('.navbar ul li');
const container = document.querySelector('.container');
const pages = document.querySelectorAll('.page');
// container.scrollTop = 1000;
// container.scrollLeft = 1000;
console.log(pages);
console.log(container);

navs.forEach(nav => {
	nav.onclick = () => {
		navs.forEach(nav => {
			nav.classList = '';
		})
		nav.className = 'active';
		console.log(navs);
	}
})

// overflow-y: scroll; on css .container add another scroll on top of existing scroll
// that's why window.onscroll doesn't work because we don't scrollng windows we are scrolling container
container.onscroll = () => {
	// console.log('hello');
	pages.forEach(page => {
		const pageTop = page.offsetTop;
		const pageScrollTop = container.scrollTop;
		if (pageScrollTop === pageTop) {
			const id = page.getAttribute('id');
			console.log(`id: ${id} true`);
			const navbarElement = document.querySelector(`a[href="#${id}"]`);
			navbarParentElement = navbarElement.parentElement;
			navs.forEach(nav => {
				nav.classList = '';
			})
			// navs.className = 'active';
			navbarParentElement.className = 'active';
		}
	})
	console.log('````````````````````````````````````````````');
	// pages.forEach(page => {
	// 	console.log(page);
	// 	// const pageHeight = page.scrollY;
	// 	// console.log(pageHeight);
	// })
	// console.log(container.scrollY)
	// console.log(window.scrollY);
}

