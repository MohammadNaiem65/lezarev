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

navbarAnimation();
