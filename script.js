// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});


// Handle the main download button click
const btn = document.getElementById('animated-download');
btn.addEventListener('click', () => {
    // Show SweetAlert with custom button background colors
    Swal.fire({
        title: 'Choose CV Format',
        html: `
                <div style="font-size: 3rem; color: #2563eb; margin-bottom: 10px;">
                    <i class="fas fa-file-alt"></i>
                </div>
                <p>Select download format</p>
            `,
        showCancelButton: true,
        confirmButtonText: `<i class="fas fa-file-pdf" style="margin-right: 5px;"></i> Download PDF`,
        cancelButtonText: `<i class="fas fa-file-word" style="margin-right: 5px;"></i> Download Word`,
        customClass: {
            confirmButton: 'btn-confirm-custom',
            cancelButton: 'btn-cancel-custom'
        },
        buttonsStyling: false, // Disable default SweetAlert2 styles for buttons
    }).then((result) => {
        if (result.isConfirmed) {
            // User chose PDF
            triggerDownload('/documents/GBENLE GBOLAHAN HASSAN FRONTEND DEVELOPER.pdf', 'Downloading PDF...');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // User chose Word
            triggerDownload('/documents/GBENLE GBOLAHAN HASSAN FRONTEND DEVELOPER.docx', 'Downloading Word...');
        }
    });
});

// Function to handle the download process
function triggerDownload(filePath, downloadingText) {
    btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ${downloadingText}`;
    btn.disabled = true;

    setTimeout(() => {
        // Trigger the download
        window.location.href = filePath;

        // Reset the main button after download initiation
        btn.innerHTML = `Download CV`;
        btn.disabled = false;
    }, 2000); // Simulated delay
}


// JavaScript to move the "Hire Me" button to the bottom-left corner when the page is scrolled
window.addEventListener('scroll', function () {
    const hireMeBtn = document.getElementById('hireMeBtn');

    if (window.scrollY > 50) {
        // When the page is scrolled more than 50px, move the button
        hireMeBtn.classList.add('fixed-btn');
    } else {
        // Remove the fixed positioning when the page is at the top
        hireMeBtn.classList.remove('fixed-btn');
    }
});



