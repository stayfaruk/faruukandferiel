document.querySelectorAll('.butterfly').forEach((butterfly, index) => {
    butterfly.style.animationDelay = `${index * 2}s`;
});
