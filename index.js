window.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button')
    const collapsible = document.getElementById('collapsible')
    
    toggleButton.addEventListener('click', () => {
        collapsible.classList.toggle('active')
    })
    
})