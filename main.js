import { gsap } from 'gsap';

function navbarAnimation() {
    // Store the timeline reference globally so we can access it from both event handlers
    let activeTimeline = null;

    document
        .querySelector('#nav-options')
        .addEventListener('mouseenter', () => {
            // Kill any existing timeline to prevent conflicts
            if (activeTimeline) {
                activeTimeline.kill();
            }

            // Create a new timeline
            activeTimeline = gsap.timeline();

            // Add animations to the timeline
            activeTimeline
                .to('.nav-elem', {
                    height: '11rem',
                    duration: 0.4,
                })
                .to('.nav-elem span', {
                    y: 0,
                    stagger: 0.1,
                    duration: 0.2,
                });
        });

    document
        .querySelector('#nav-options')
        .addEventListener('mouseleave', () => {
            // Kill any existing timeline to prevent conflicts
            if (activeTimeline) {
                activeTimeline.kill();
            }

            // Create a new timeline for exit animation
            activeTimeline = gsap.timeline();

            // Add exit animations to the timeline
            activeTimeline
                .to('.nav-elem', {
                    height: '2rem',
                    duration: 0.5,
                })
                .to(
                    '.nav-elem span',
                    {
                        y: '100%',
                        duration: 0.2,
                    },
                    '<'
                );
        });
}

function serviceSectionAnimation() {
    const serviceRows = document.querySelectorAll('.service-row');

    serviceRows.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            console.log(row.children[4]);
            gsap.to(row, {
                paddingLeft: '1rem',
                paddingRight: '1rem',
            });
            gsap.to(row.children[3], {
                opacity: 1,
                scale: 1,
                duration: 0.5,
            });
            gsap.to(row.children[4], {
                transform: 'scaleY(1)',
                transformOrigin: 'top',
            });
        });

        row.addEventListener('mousemove', (e) => {
            gsap.to(row.children[3], {
                x: e.x - row.getBoundingClientRect().x - 80,
                y: e.y - row.getBoundingClientRect().y - 90,
                duration: 0.5,
            });
        });

        row.addEventListener('mouseleave', () => {
            console.log(row.children[4]);
            gsap.to(row, {
                paddingLeft: '0rem',
                paddingRight: '0rem',
            });
            gsap.to(row.children[3], {
                opacity: 0,
                scale: 0,
                duration: 0.5,
            });
            gsap.to(row.children[4], {
                transform: 'scaleY(0)',
                transformOrigin: 'bottom',
            });
        });
    });
}

// Call the functions
navbarAnimation();
serviceSectionAnimation();
