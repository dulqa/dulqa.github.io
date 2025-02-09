document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close all other accordions
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current accordion
            item.classList.toggle('active');
        });
    });

    // Video upload handling
    const videoUpload = document.getElementById('videoUpload');
    const videoPreview = document.getElementById('videoPreview');
    const uploadMessage = document.getElementById('uploadMessage');
    const practiceNotes = document.getElementById('practiceNotes');
    const saveNotes = document.getElementById('saveNotes');

    videoUpload?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            videoPreview.src = videoURL;
            videoPreview.style.display = 'block';
            uploadMessage.textContent = 'Видео загружено успешно!';
        }
    });

    saveNotes?.addEventListener('click', function() {
        const notes = practiceNotes.value;
        if (notes) {
            localStorage.setItem('zadornovPracticeNotes', notes);
            uploadMessage.textContent = 'Заметки сохранены!';
            setTimeout(() => {
                uploadMessage.textContent = '';
            }, 2000);
        }
    });

    // Load saved notes if they exist
    const savedNotes = localStorage.getItem('zadornovPracticeNotes');
    if (savedNotes && practiceNotes) {
        practiceNotes.value = savedNotes;
    }
});
