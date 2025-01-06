function main() {
    
    window.addEventListener('load', function() {
        document.querySelectorAll('.preloader').forEach(function(element) {
            element.classList.add('preloader-deactivate');
        });
    });
}

main();