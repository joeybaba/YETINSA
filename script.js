// Modern script - Referenced from Cursor and Trae websites

document.addEventListener('DOMContentLoaded', () => {
    // Create floating shapes (bubble effect) - Cancelled use
    /*
    const createFloatingShapes = () => {
        const floatingShapes = document.createElement('div');
        floatingShapes.className = 'floating-shapes';
        
        // Reduce bubble quantity to 10, reduce webpage burden
        const numShapes = 10;
        
        for (let i = 0; i < numShapes; i++) {
            const shape = document.createElement('div');
            shape.className = 'shape';
            
            // Random size - Further increase size, minimum from 20px to 50px
            const size = Math.random() * 120 + 50; // 50px to 170px between
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            
            // Random position
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            shape.style.left = `${left}%`;
            shape.style.top = `${top}%`;
            
            // Random opacity - Increase minimum opacity to make bubbles brighter
            const opacity = Math.random() * 0.15 + 0.1; // 0.1 to 0.25 between
            shape.style.opacity = opacity;
            
            // Increase random delay to make bubble animation more dispersed
            const delay = Math.random() * 8;
            shape.style.animationDelay = `${delay}s`;
            
            // Increase animation duration to reduce CPU usage
            const duration = Math.random() * 10 + 12; // 12-22 seconds
            shape.style.animationDuration = `${duration}s`;
            
            // Random color - Add some colored bubbles
            if (Math.random() > 0.6) {
                // 40% of bubbles have color
                const hue = Math.random() > 0.5 ? '35' : '220'; // Orange or blue
                const saturation = Math.floor(Math.random() * 40 + 60); // 60-100%
                const lightness = Math.floor(Math.random() * 20 + 70); // 70-90%
                shape.style.background = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
                shape.style.boxShadow = `0 0 10px hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity * 0.8})`;
            } else {
                // Add glow effect
                shape.style.boxShadow = `0 0 15px rgba(255, 255, 255, ${opacity * 0.8})`;
            }
            
            floatingShapes.appendChild(shape);
        }
        
        const heroHeader = document.querySelector('.hero-header');
        if (heroHeader) {
        heroHeader.appendChild(floatingShapes);
        }
    };
    
    createFloatingShapes();
    */
    
    // Create modern light spot effect
    const createLightSpots = () => {
        const heroHeader = document.querySelector('.hero-header');
        if (!heroHeader) return;
        
        // Create light spot container
        const lightSpotsContainer = document.createElement('div');
        lightSpotsContainer.className = 'light-spots-container';
        lightSpotsContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 2;
            pointer-events: none;
        `;
        
        // Add 5-8 light spots
        const numSpots = Math.floor(Math.random() * 4) + 5; // 5-8 light spots
        
        for (let i = 0; i < numSpots; i++) {
            const spot = document.createElement('div');
            
            // Random size (100-300px)
            const size = Math.floor(Math.random() * 200) + 100;
            
            // Random position
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            
            // Random color (Orange or purple-blue series)
            const hue = Math.random() > 0.6 ? '30' : '240';
            const saturation = Math.floor(Math.random() * 40) + 60; // 60-100%
            const opacity = (Math.random() * 0.08) + 0.02; // 0.02-0.1
            
            // Random animation delay and duration
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 15; // 15-25 seconds
            
            // Set style
            spot.style.cssText = `
                position: absolute;
                left: ${left}%;
                top: ${top}%;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: radial-gradient(circle at center, hsla(${hue}, ${saturation}%, 60%, ${opacity * 2}) 0%, hsla(${hue}, ${saturation}%, 50%, 0) 70%);
                filter: blur(20px);
                animation: float-spot ${duration}s ease-in-out infinite;
                animation-delay: -${delay}s;
                will-change: transform;
                pointer-events: none;
            `;
            
            lightSpotsContainer.appendChild(spot);
        }
        
        // Add keyframe animation
        if (!document.querySelector('#spot-animations')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'spot-animations';
            styleSheet.textContent = `
                @keyframes float-spot {
                    0% {
                        transform: translate(0, 0) scale(1);
                        opacity: ${Math.random() * 0.5 + 0.5};
                    }
                    25% {
                        transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(${Math.random() * 0.3 + 0.9});
                    }
                    50% {
                        transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(${Math.random() * 0.3 + 0.9});
                        opacity: ${Math.random() * 0.5 + 0.5};
                    }
                    75% {
                        transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(${Math.random() * 0.3 + 0.9});
                    }
                    100% {
                        transform: translate(0, 0) scale(1);
                        opacity: ${Math.random() * 0.5 + 0.5};
                    }
                }
            `;
            document.head.appendChild(styleSheet);
        }
        
        heroHeader.appendChild(lightSpotsContainer);
    };
    
    // Create particle effect
    const createParticles = () => {
        const heroHeader = document.querySelector('.hero-header');
        if (!heroHeader) return;
        
        // Create particle container
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 2;
            pointer-events: none;
        `;
        
        // Add 15-25 particles
        const numParticles = Math.floor(Math.random() * 10) + 15;
        
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            
            // Random size (2-4px)
            const size = Math.random() * 2 + 2;
            
            // Random position
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            
            // Random color (Orange or white)
            const isOrange = Math.random() > 0.7;
            const color = isOrange ? 'rgba(255, 133, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
            
            // Random animation delay and duration
            const delay = Math.random() * 5;
            const duration = Math.random() * 20 + 30; // 30-50 seconds
            
            // Set style
            particle.style.cssText = `
                position: absolute;
                left: ${left}%;
                top: ${top}%;
                width: ${size}px;
                height: ${size}px;
                background-color: ${color};
                border-radius: 50%;
                filter: blur(1px);
                box-shadow: 0 0 ${size * 2}px ${color};
                animation: float-particle ${duration}s linear infinite;
                animation-delay: -${delay}s;
                will-change: transform;
                pointer-events: none;
            `;
            
            particlesContainer.appendChild(particle);
        }
        
        // Add keyframe animation
        if (!document.querySelector('#particle-animations')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'particle-animations';
            styleSheet.textContent = `
                @keyframes float-particle {
                    0% {
                        transform: translate(0, 0);
                        opacity: 0;
                    }
                    10% {
                        opacity: ${Math.random() * 0.4 + 0.1};
                    }
                    90% {
                        opacity: ${Math.random() * 0.4 + 0.1};
                    }
                    100% {
                        transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 200 + 100}px, ${Math.random() > 0.5 ? '-' : ''}${Math.random() * 200 + 100}px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(styleSheet);
        }
        
        heroHeader.appendChild(particlesContainer);
    };
    
    // Initialize modern effect
    createLightSpots();
    createParticles();
    
    // Add scroll animation
    const handleScrollAnimation = () => {
        const elements = document.querySelectorAll('.feature-card, .product-card, .subcategory-card, .section-header');
        
        elements.forEach(element => {
            // Add reveal class to all elements
            if (!element.classList.contains('reveal')) {
                element.classList.add('reveal');
            }
            
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    };
    
    // Initialize running once to display initial screen elements
    handleScrollAnimation();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimation);
    
// Smooth scroll function
function smoothScroll(target, duration = 800) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop - 80; // Subtract navigation bar height
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Navigation link click event handling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (!targetSection) return;
        
        // Find target section title
        const sectionHeader = targetSection.querySelector('.section-header');
        if (!sectionHeader) return;
        
        // Calculate scroll position - Precisely to title position
        const navHeight = document.querySelector('.main-nav').offsetHeight;
        
        // Get exact position of title
        const headerRect = sectionHeader.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const headerTop = headerRect.top + scrollTop;
        
        // Adjust scroll position to ensure title is just below navigation bar
        const scrollPosition = headerTop - navHeight;
        
        // Smooth scroll to calculated position
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });

            // Update activity status
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        
        // Delay a little time to update title status after scroll is completed
        setTimeout(() => {
            if (window.updateStickyHeaders) {
                window.updateStickyHeaders(targetId);
            }
        }, 300); // Increase delay time to ensure scroll is completed
        });
    });
    
    // Listen for scroll to update navigation activity status
    const sections = document.querySelectorAll('section[id]');
    
    function navHighlighter() {
        // Get current scroll position
        let scrollY = window.pageYOffset;
        
        // Loop through all sections
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', navHighlighter);
    
    // Use a smoother method to implement title fixed - Optimized version
    function setupStickyHeaders() {
        // Get all titles
        const headers = document.querySelectorAll('.section-header');
        if (!headers.length) return; // If no title found, return directly
        
        // Initialize title position array
        const headerPositions = [];
        
        // Offset for triggering fixed effect (pixels)
        const triggerOffset = 10; // Reduce offset to ensure title fixed more accurately
        
        // Get navigation bar height
        const navHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
        
        // Create fixed title container
        const stickyHeaderContainer = document.createElement('div');
        stickyHeaderContainer.className = 'sticky-header-container';
        stickyHeaderContainer.style.position = 'fixed';
        stickyHeaderContainer.style.top = '0';
        stickyHeaderContainer.style.left = '0';
        stickyHeaderContainer.style.width = '100%';
        stickyHeaderContainer.style.zIndex = '1000';
        stickyHeaderContainer.style.display = 'none'; // Initially hidden
        stickyHeaderContainer.style.transition = 'opacity 0.3s ease'; // Add transition effect
        stickyHeaderContainer.style.opacity = '0'; // Initially transparent
        document.body.appendChild(stickyHeaderContainer);
        
        // Record each title status and cloned title
        const headerStates = {};
        
        // Add unique ID to each title and record position
        headers.forEach((header, index) => {
            // Add unique ID
            header.id = header.id || `header-${index}`;
            
            // Create a clone for fixed display for each title
            const clonedHeader = header.cloneNode(true);
            clonedHeader.id = `sticky-${header.id}`;
            clonedHeader.classList.add('sticky');
            clonedHeader.style.display = 'none'; // Initially hidden
            clonedHeader.style.opacity = '0';
            clonedHeader.style.transition = 'opacity 0.3s ease';
            
            // Add cloned title to fixed container
            stickyHeaderContainer.appendChild(clonedHeader);
            
            // Record title status
            headerStates[header.id] = {
                isSticky: false,
                clonedHeader: clonedHeader,
                element: header,
                sectionId: header.closest('section') ? header.closest('section').id : null
            };
        });
        
        // Record last active title ID
        let lastActiveHeaderId = null;
        
        // Update all title position information function
        function updateHeaderPositions() {
            headerPositions.length = 0; // Clear array
            
            // Recalculate all title positions
            headers.forEach((header) => {
            const rect = header.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offsetTop = rect.top + scrollTop;
            
            headerPositions.push({
                id: header.id,
                offsetTop: offsetTop,
                height: rect.height,
                element: header
                });
            });
            
            // Sort by offsetTop to ensure order from top to bottom
            headerPositions.sort((a, b) => a.offsetTop - b.offsetTop);
        }
        
        // Initialize title position calculation
        updateHeaderPositions();
        
        // Extract update sticky state logic to separate function for reuse
        function updateStickyState() {
            // Get current scroll position
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Find which title should be displayed as fixed
            let activeHeaderId = null;
            
            // Determine which title should be fixed
            for (let i = headerPositions.length - 1; i >= 0; i--) {
                const pos = headerPositions[i];
                const nextPos = i < headerPositions.length - 1 ? headerPositions[i + 1] : null;
                
                const headerTop = pos.offsetTop - triggerOffset - navHeight;
                const headerBottom = nextPos ? nextPos.offsetTop - navHeight : Infinity;
                
                // If current scroll position is within this title range
                if (scrollTop >= headerTop && scrollTop < headerBottom) {
                    activeHeaderId = pos.id;
                    break;
                }
            }
            
            // If no active title found but scroll position is above first title
            if (!activeHeaderId && headerPositions.length > 0 && scrollTop < headerPositions[0].offsetTop - triggerOffset - navHeight) {
                // Do not display any title
                activeHeaderId = null;
            }
            
            // If no active title found but scroll position is below last title
            if (!activeHeaderId && headerPositions.length > 0 && scrollTop >= headerPositions[headerPositions.length - 1].offsetTop - triggerOffset - navHeight) {
                // Display last title
                activeHeaderId = headerPositions[headerPositions.length - 1].id;
            }
            
            // Only update DOM when active title changes
            if (activeHeaderId !== lastActiveHeaderId) {
                console.log(`Updating sticky state: ${lastActiveHeaderId} -> ${activeHeaderId}`);
                
                // Hide all cloned titles
                for (const id in headerStates) {
                    const headerState = headerStates[id];
                    if (headerState && headerState.clonedHeader) {
                        headerState.clonedHeader.style.display = 'none';
                        headerState.clonedHeader.style.opacity = '0';
                        headerState.isSticky = false;
                    }
                }
                
                // Display active cloned title
                if (activeHeaderId) {
                    const headerState = headerStates[activeHeaderId];
                    
                    if (headerState && headerState.clonedHeader) {
                        // First set style, then display
                        stickyHeaderContainer.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                        stickyHeaderContainer.style.backdropFilter = 'blur(10px)';
                        stickyHeaderContainer.style.webkitBackdropFilter = 'blur(10px)';
                        stickyHeaderContainer.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
                        stickyHeaderContainer.style.borderBottom = 'none'; // Ensure no border
                        
                        // Display fixed title container
                        stickyHeaderContainer.style.display = 'block';
                        
                        // Display current active cloned title
                        headerState.clonedHeader.style.display = 'block';
                        
                        // Immediately set opacity, do not wait for next frame
                        stickyHeaderContainer.style.opacity = '1';
                        headerState.clonedHeader.style.opacity = '1';
                        
                        headerState.isSticky = true;
                    }
                } else {
                    // Immediately hide fixed title container
                    stickyHeaderContainer.style.opacity = '0';
                    stickyHeaderContainer.style.display = 'none';
                }
                
                // Update last active title ID
                lastActiveHeaderId = activeHeaderId;
            }
        }
        
        // Use Intersection Observer API to detect title visibility
        const observerOptions = {
            rootMargin: `-${navHeight}px 0px 0px 0px`,
            threshold: [0, 0.1, 0.5, 1]
        };
        
        const headerObserver = new IntersectionObserver((entries) => {
            // Force update title position and status
            updateHeaderPositions();
            updateStickyState();
        }, observerOptions);
        
        // Observe all titles
        headers.forEach(header => {
            headerObserver.observe(header);
        });
        
        // Scroll handling function - Use debounce and throttle combination
        let scrollTimeout;
        let lastScrollTime = 0;
        const scrollThrottle = 100; // Scroll throttle time (milliseconds)
        
        function handleScroll() {
            const now = Date.now();
            
            // Clear previous timeout
            clearTimeout(scrollTimeout);
            
            // If distance since last execution exceeds throttle time, execute immediately
            if (now - lastScrollTime > scrollThrottle) {
                updateStickyState();
                lastScrollTime = now;
            }
            
            // Set debounce, ensure execution once after scroll stops
            scrollTimeout = setTimeout(() => {
                updateStickyState();
            }, 50);
        }
        
        // Use passive option to improve scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Listen for window size change, recalculate title position
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateHeaderPositions();
                updateStickyState();
            }, 200);
        });
        
        // Add helper function, for navigation link click to set title status
        window.updateStickyHeaders = function(sectionId) {
            // Delay execution to ensure scroll is completed
            setTimeout(() => {
                // Force update title position and status
                updateHeaderPositions();
                updateStickyState();
                
                // Check again to ensure status correct
                setTimeout(() => {
                    updateHeaderPositions();
                    updateStickyState();
                }, 100);
            }, 50);
        };
        
        // Initialize running once to set initial status
        updateStickyState();
        
        // Again update after page load to ensure position correct
        window.addEventListener('load', () => {
            updateHeaderPositions();
            updateStickyState();
        });
        
        // Regularly check title position to prevent any unexpected situation
        setInterval(() => {
            updateHeaderPositions();
            updateStickyState();
        }, 2000);
    }
    
    // Initialize after page load
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(setupStickyHeaders, 100);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(setupStickyHeaders, 100);
        });
    }
    
    // Handle feature card hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            featureCards.forEach(c => c.classList.remove('hover'));
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });

    // Handle solution link click
    const solutionLinks = document.querySelectorAll('.solution-link');
    solutionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const card = link.closest('.subcategory-card');
            const title = card.querySelector('h4').textContent;
            const description = card.querySelector('p').textContent;

            // Create modal
            const modal = document.createElement('div');
            modal.className = 'solution-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>${title}</h3>
                    <div class="modal-description">${description}</div>
                    <div class="modal-details">
                        <h4>Core Advantages</h4>
                        <ul>
                            <li>High Performance: Latest LED chip generation for excellent display effect</li>
                            <li>Energy Saving and Environmental Protection: Low power consumption design, meeting green energy standards</li>
                            <li>Stable and Reliable: Strict quality control, ensuring product long-term stable operation</li>
                            <li>Smart Control: Supports smart dimming and scene linkage</li>
                        </ul>
                        <h4>Technical Parameters</h4>
                        <ul>
                            <li>Brightness: 800-1200 nits</li>
                            <li>Contrast Ratio: 3000:1</li>
                            <li>Viewing Angle: 160°(H) / 160°(V)</li>
                            <li>Refresh Rate: 3840Hz</li>
                        </ul>
                        <div class="modal-contact">
                            <p>Learn more details, please contact our technical consultant</p>
                            <a href="mailto:contact@example.com" class="btn btn-primary">Contact Us</a>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);
            
            // Prevent scrolling
            document.body.style.overflow = 'hidden';

            // Add close button event
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                modal.style.opacity = '0';
                setTimeout(() => {
                modal.remove();
                    document.body.style.overflow = '';
                }, 300);
            });

            // Click outside modal to close
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.opacity = '0';
                    setTimeout(() => {
                    modal.remove();
                        document.body.style.overflow = '';
                    }, 300);
                }
            });
        });
    });

    // Add CTA button to hero area
    const addHeroCTA = () => {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;
        
        const ctaDiv = document.createElement('div');
        ctaDiv.className = 'hero-cta';
        ctaDiv.innerHTML = `
            <a href="#products" class="btn btn-primary">Explore Products</a>
            <a href="#about" class="btn btn-secondary">Learn About Us</a>
        `;
        
        // Check if CTA button already exists
        if (!heroContent.querySelector('.hero-cta')) {
            heroContent.appendChild(ctaDiv);
        }
    };
    
    addHeroCTA();
    
    // Add container to main section
    const wrapSectionsWithContainer = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            // Check if container already exists
            if (section.querySelector('.container')) return;
            
            // Get original content
            const content = section.innerHTML;
            
            // Clear content
            section.innerHTML = '';
            
            // Create container and add original content
            const container = document.createElement('div');
            container.className = 'container';
            container.innerHTML = content;
            
            // Add container to section
            section.appendChild(container);
        });
    };
    
    wrapSectionsWithContainer();

    // Add text reading effect
    const setupReadingEffect = () => {
        const introContent = document.querySelector('.intro-content');
        if (!introContent) return;
        
        // Process all paragraph and list item texts
        const textElements = introContent.querySelectorAll('.intro-paragraph, .tech-list li, .number-label');
        
        // Fix irregular space issues, protect specific words from being split
        const protectedWords = ['YETINSA', 'LED', 'RGB', 'MLED'];
        
        // Preprocess protected words, replace them with temporary markers
        function preprocessText(text) {
            let processedText = text;
            protectedWords.forEach((word, index) => {
                const placeholder = `__PROTECTED_${index}__`;
                const regex = new RegExp(word, 'g');
                processedText = processedText.replace(regex, placeholder);
            });
            return processedText;
        }
        
        // Restore protected words
        function postprocessText(text) {
            let processedText = text;
            protectedWords.forEach((word, index) => {
                const placeholder = `__PROTECTED_${index}__`;
                const regex = new RegExp(placeholder, 'g');
                processedText = processedText.replace(regex, word);
            });
            return processedText;
        }
        
        // Add space between connected words in paragraph
        textElements.forEach(element => {
            // Only process text elements without child elements
            if (element.querySelector('.highlight, .tech-item')) {
                // If contains highlight element, only process text nodes
                Array.from(element.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        // Add space between connected words in text node
                        let text = node.textContent;
                        // Protect specific words
                        text = preprocessText(text);
                        // Use regular expression to match connected words and add space
                        text = text.replace(/([a-z])([A-Z])/g, '$1 $2');
                        // Replace continuous spaces with single space
                        text = text.replace(/\s+/g, ' ');
                        // Restore protected words
                        text = postprocessText(text);
                        node.textContent = text;
                    }
                });
            } else {
                // Directly process text of entire element
                let text = element.innerText;
                // Protect specific words
                text = preprocessText(text);
                // Use regular expression to match connected words and add space
                text = text.replace(/([a-z])([A-Z])/g, '$1 $2');
                // Replace continuous spaces with single space
                text = text.replace(/\s+/g, ' ');
                // Restore protected words
                text = postprocessText(text);
                element.innerText = text;
            }
        });
        
        // Re-get text node inside highlight element and process
        const highlightElements = introContent.querySelectorAll('.highlight, .tech-item');
        highlightElements.forEach(element => {
            let text = element.innerText;
            // Protect specific words
            text = preprocessText(text);
            // Use regular expression to match connected words and add space
            text = text.replace(/([a-z])([A-Z])/g, '$1 $2');
            // Replace continuous spaces with single space
            text = text.replace(/\s+/g, ' ');
            // Restore protected words
            text = postprocessText(text);
            element.innerText = text;
        });
    };
    
    // Initialize after DOM load
    setTimeout(setupReadingEffect, 1000); // Delay 1 second to ensure page fully loaded

    // Product card scroll animation
    function animateProductCards() {
        const productCards = document.querySelectorAll('.product-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        productCards.forEach(card => {
            card.classList.add('fade-in');
            observer.observe(card);
        });
    }

    // Execute after page load
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize navigation menu
        initNavMenu();
        
        // Initialize product card animation
        animateProductCards();
        
        // Other initialization code...
    });

    // Navigation menu initialization
    function initNavMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }
    }

    // Listen for scroll, add animation effect
    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Get all product cards and observe
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        productObserver.observe(card);
    });

    // Create Intersection Observer to observe elements of company introduction section
    const companyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    // Get company introduction section elements and observe
    const companyElements = document.querySelectorAll('.data-item, .position-item, .culture-item');
    companyElements.forEach(element => {
        companyObserver.observe(element);
    });
});

// Add easing function to make transition more natural
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}