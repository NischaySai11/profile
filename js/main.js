document.addEventListener('DOMContentLoaded', () => {
	// Smooth scroll to projects
	const viewWork = document.getElementById('view-work');
	viewWork.addEventListener('click', () => {
		document.querySelector('#projects').scrollIntoView({behavior:'smooth', block:'start'});
	});

	// Contact form: open mail client with prefilled content
	const form = document.getElementById('contact-form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const data = new FormData(form);
		const name = data.get('name') || 'No name';
		const email = data.get('email') || 'no-email';
		const message = data.get('message') || '';
		const subject = encodeURIComponent(`Portfolio contact from ${name}`);
		const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
		window.location.href = `mailto:nischay.sai@example.com?subject=${subject}&body=${body}`;
	});

	// Enhance external links (open safely)
	document.querySelectorAll('a[target="_blank"]').forEach(a => {
		a.setAttribute('rel','noopener noreferrer');
	});
});
