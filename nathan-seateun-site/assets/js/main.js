(function() {
	const yearSpan = document.getElementById('year');
	if (yearSpan) {
		yearSpan.textContent = String(new Date().getFullYear());
	}
	// Active nav state
	const path = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
	document.querySelectorAll('.nav-link').forEach(function(link){
		if (link.getAttribute('href')?.endsWith(path)) {
			link.classList.add('active');
		}
	});
})();
