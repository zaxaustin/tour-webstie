const site = (() => {
    const locationTimes = {
        'Lincoln Center': 45,
        'Fifth Avenue': 60,
        'Rockefeller Center': 60,
        'Bryant Park Winter Village': 50,
        "Macy's Herald Square": 35,
        'Times Square': 30,
        'Grand Central Terminal': 30,
        'Brooklyn Bridge': 45,
        'Chinatown': 40,
        'Wall Street & Financial District': 35,
        '9/11 Memorial': 35,
        'Battery Park & Statue Views': 25
    };

    const state = {
        selectedLocations: []
    };

    const setActiveNavigation = () => {
        const pathSegments = window.location.pathname.split('/');
        const rawFile = pathSegments[pathSegments.length - 1] || '';
        const currentFile = rawFile.split('#')[0].split('?')[0];
        const normalizedCurrent = currentFile === '' ? 'index.html' : currentFile;

        document.querySelectorAll('.nav-links a').forEach((link) => {
            const linkPath = link.getAttribute('href') || 'index.html';
            const normalizedLink = (linkPath === '/' || linkPath === './')
                ? 'index.html'
                : linkPath.replace(/^\.\//, '').split('#')[0];

            if (normalizedLink === normalizedCurrent || (normalizedLink === 'index.html' && normalizedCurrent === 'index.html')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    };

    const updateTourEstimate = () => {
        const selectedList = document.getElementById('selectedLocations');
        const estimateDetails = document.getElementById('estimateDetails');
        const timeTarget = document.getElementById('estimatedTime');
        const costTarget = document.getElementById('estimatedCost');
        const lunchNote = document.getElementById('lunchNote');

        if (!selectedList || !estimateDetails || !timeTarget || !costTarget) {
            return;
        }

        if (state.selectedLocations.length === 0) {
            selectedList.innerHTML = '<p class="text-muted">Select locations to see your custom tour details.</p>';
            estimateDetails && estimateDetails.classList.add('is-hidden');
            lunchNote && lunchNote.classList.add('is-hidden');
            return;
        }

        selectedList.innerHTML = state.selectedLocations
            .map((loc) => `
                <div class="selected-item">
                    <span>${loc}</span>
                    <span class="text-muted">${Math.round(locationTimes[loc])} min</span>
                </div>
            `)
            .join('');

        let totalMinutes = state.selectedLocations.reduce((sum, loc) => sum + locationTimes[loc], 0);
        if (state.selectedLocations.length > 1) {
            totalMinutes += (state.selectedLocations.length - 1) * 15;
        }

        const totalHours = Math.ceil(totalMinutes / 60);
        const displayHours = totalMinutes < 60
            ? `${Math.round(totalMinutes)} minutes`
            : `${Math.floor(totalMinutes / 60)}-${Math.ceil(totalMinutes / 60)} hours`;

        const minCost = totalHours * 60;
        const maxCost = totalHours * 75;

        timeTarget.textContent = displayHours;
        costTarget.textContent = `$${minCost}-${maxCost}`;
        estimateDetails.classList.remove('is-hidden');

        if (lunchNote) {
            if (totalHours >= 4) {
                lunchNote.classList.remove('is-hidden');
            } else {
                lunchNote.classList.add('is-hidden');
            }
        }
    };

    const attachLocationListeners = () => {
        const checkboxContainer = document.querySelectorAll('.location-checkbox input[type="checkbox"]');
        if (!checkboxContainer.length) {
            return;
        }

        checkboxContainer.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                state.selectedLocations = Array.from(checkboxContainer)
                    .filter((input) => input.checked)
                    .map((input) => input.value);
                updateTourEstimate();
            });
        });

        updateTourEstimate();
    };

    const scrollToTarget = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const wireButtons = () => {
        const builderButton = document.getElementById('customTourButton');
        if (builderButton) {
            builderButton.addEventListener('click', () => {
                if (!state.selectedLocations.length) {
                    window.alert('Please select at least one location for your tour.');
                    return;
                }
                scrollToTarget('#builderContactForm');
                const locationsField = document.getElementById('desiredLocations');
                const tourTypeField = document.getElementById('tourType');
                if (locationsField) {
                    locationsField.value = state.selectedLocations.join(', ');
                }
                if (tourTypeField) {
                    tourTypeField.value = 'private';
                }
            });
        }

        document.querySelectorAll('[data-scroll-target]').forEach((trigger) => {
            const target = trigger.getAttribute('data-scroll-target');
            trigger.addEventListener('click', (event) => {
                event.preventDefault();
                scrollToTarget(target);
            });
        });
    };

    const handleContactForm = () => {
        const form = document.querySelector('form[data-contact-form]');
        if (!form) {
            return;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name') || 'there';
            const tourType = formData.get('tourType');
            const messageParts = [
                `Thank you, ${name}, for your ${tourType || 'holiday'} tour inquiry!`,
                'We will be in touch within 24 hours to confirm availability and personalize your itinerary.'
            ];
            if (tourType === 'group') {
                messageParts.push('Group tour confirmations are sent after we match you with your preferred date.');
            }
            window.alert(messageParts.join(' '));
            form.reset();
        });
    };

    const handleGuideModal = () => {
        const modal = document.getElementById('guideModal');
        if (!modal) {
            return;
        }

        const closeModal = () => modal.classList.remove('active');
        const openButtons = document.querySelectorAll('[data-open-guide-modal]');
        const closeButtons = modal.querySelectorAll('[data-close-modal]');
        const downloadForm = modal.querySelector('form');

        openButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                modal.classList.add('active');
            });
        });

        closeButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                closeModal();
            });
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        if (downloadForm) {
            downloadForm.addEventListener('submit', (event) => {
                event.preventDefault();
                window.alert('Check your email for the free NYC Holiday Tour Guide. Happy exploring!');
                closeModal();
            });
        }
    };

    const enableFaqAccordion = () => {
        document.querySelectorAll('.faq-item').forEach((item) => {
            const toggle = item.querySelector('.faq-question');
            if (!toggle) {
                return;
            }

            toggle.addEventListener('click', () => {
                const expanded = item.classList.toggle('active');
                toggle.setAttribute('aria-expanded', expanded);
            });
        });
    };

    const init = () => {
        setActiveNavigation();
        attachLocationListeners();
        wireButtons();
        handleContactForm();
        handleGuideModal();
        enableFaqAccordion();
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', site.init);
