const toggleSwitch = document.querySelector('.checkbox');
const themeStylesheet = document.getElementById('themeStylesheet');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        themeStylesheet.href = 'stylelight.css';
    } else {
        themeStylesheet.href = 'styledark.css';
    }
});

if (localStorage.getItem('likeCount1') === null) {
    localStorage.setItem('likeCount1', '0');
}
if (localStorage.getItem('likeCount2') === null) {
    localStorage.setItem('likeCount2', '0');
}

document.querySelectorAll('.like-count').forEach((element, index) => {
    const likeCount = localStorage.getItem(`likeCount${index + 1}`);
    element.textContent = likeCount;
});

document.querySelectorAll('.like-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const likeCount = parseInt(localStorage.getItem(`likeCount${index + 1}`)) + 1;
        localStorage.setItem(`likeCount${index + 1}`, likeCount.toString());
        document.querySelector(`.like-count:nth-child(${index + 1})`).textContent = likeCount;
    });
});

document.querySelectorAll('.comment-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const commentInput = document.querySelector(`.comment-input:nth-child(${index + 1})`);
        const commentList = document.querySelector(`.comment-list:nth-child(${index + 1})`);
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            const commentItem = document.createElement('li');
            commentItem.textContent = commentText;
            commentList.appendChild(commentItem);
            commentInput.value = ''; 

            
            const comments = JSON.parse(localStorage.getItem(`comments${index + 1}`)) || [];
            comments.push(commentText);
            localStorage.setItem(`comments${index + 1}`, JSON.stringify(comments));
        }
    });

    const comments = JSON.parse(localStorage.getItem(`comments${index + 1}`)) || [];
    const commentList = document.querySelector(`.comment-list:nth-child(${index + 1})`);
    comments.forEach(commentText => {
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        if (e.target.textContent.trim() === "Blog" || e.target.textContent.trim() === "CV") {
            return; 
        }

        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        let offset = 60; // Default offset value
        if (window.matchMedia('(max-width: 1030px)').matches) {
            offset = 200; // Change offset value when viewport width is under 1030 pixels
        }

        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const getInTouchButton = document.querySelector('.GetInTouch');
    const iconsSection = document.querySelector('.Logo');

    getInTouchButton.addEventListener('click', scrollToIconsSection);

    function scrollToIconsSection() {
       
        const sectionOffsetTop = iconsSection.offsetTop;
        window.scrollTo({
            top: sectionOffsetTop,
            behavior: 'smooth'
        });

        
        iconsSection.classList.add('flash-background');

       
        setTimeout(() => {
            iconsSection.classList.remove('flash-background');
        }, 1500); 
    }
});