let scrollcontainer = document.querySelector('.card-container')
let rightscroll=document.getElementById("right-arrow")
let leftscroll=document.getElementById("left-arrow")

rightscroll.addEventListener('click', () => {
    scrollcontainer.style.scrollBehavior='smooth'
    scrollcontainer.scrollLeft += 1100; // Adjust scroll amount as needed
});

leftscroll.addEventListener('click', () => {
    scrollcontainer.style.scrollBehavior='smooth'
    scrollcontainer.scrollLeft -= 1100; // Adjust scroll amount as needed
});
document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs and hide all tab contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate clicked tab and show its content
            tab.classList.add('active');
            const activeTabContent = document.getElementById(tab.dataset.tab);
            activeTabContent.classList.add('active');
        });
    });

    // Update text based on dropdown selection
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const citySelect = document.getElementById('city');

    const updateText = (selectElement, selector, text) => {
        const selectedOption = selectElement.options[selectElement.selectedIndex].text;
        document.querySelector(selector).textContent = `${selectedOption}, ${text}`;
    };

    fromSelect.addEventListener('change', () => {
        updateText(fromSelect, '.from .code', 'Delhi Airport India');
    });

    toSelect.addEventListener('change', () => {
        updateText(toSelect, '.to .code', 'Bengaluru International Airport');
    });

    citySelect.addEventListener('change', () => {
        const selectedOption = citySelect.options[citySelect.selectedIndex].text;
        document.querySelector('.city .code').textContent = selectedOption;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const signinButton = document.getElementById('signin');
    const modal = document.getElementById('login-modal');
    const closeModal = document.getElementById('close-modal');

    signinButton.addEventListener('click', function () {
        modal.style.display = 'flex'; // Show modal
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide modal
    });

    // Optional: Close modal if user clicks outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
