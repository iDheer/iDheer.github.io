// Function to increment likes and store the count in local storage
function incrementLikes() {
    let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    likeCount++;
    localStorage.setItem('likeCount', likeCount);
    document.getElementById('like-count').textContent = likeCount;
}

// Function to add a comment and store the comments in local storage
function addComment() {
    let commentInput = document.getElementById('comment-input');
    let commentText = commentInput.value.trim();
    if (commentText !== '') {
        let commentList = JSON.parse(localStorage.getItem('commentList')) || [];
        commentList.push(commentText);
        localStorage.setItem('commentList', JSON.stringify(commentList));
        displayComments();
        commentInput.value = ''; // Clear the input field after adding comment
    }
}

// Function to display comments from local storage
function displayComments() {
    let commentList = JSON.parse(localStorage.getItem('commentList')) || [];
    let commentListElement = document.getElementById('comment-list');
    commentListElement.innerHTML = ''; // Clear previous comments
    commentList.forEach(comment => {
        let li = document.createElement('li');
        li.textContent = comment;
        commentListElement.appendChild(li);
    });
}

// Load initial like count and comments when the page loads
window.onload = function () {
    document.getElementById('like-count').textContent = localStorage.getItem('likeCount') || 0;
    displayComments();
};

// Event listener for the like button
document.getElementById('like-button').addEventListener('click', function () {
    incrementLikes();
});
