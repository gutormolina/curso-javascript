// -------------- Navegação por Tabs ------------

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    const activeClass = 'ativo';

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });

            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    };
}

initTabNav();

// ---------------- Accordion List ---------------

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    
    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initAccordion();

// ------- Scroll Suave dos Links Internos --------

function initSoftScroll() {
    const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    if(internalLinks.length) {
        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // forma alternativa
            // const top = section.offsetTop;
            // window.scrollTo({
            //     top: top,
            //     behavior: 'smooth',
            // });
        }

        internalLinks.forEach((link) => {
            link.addEventListener('click', scrollToSection);
        });
    };
}

initSoftScroll();

// --------- Animação ao Scroll ----------

function initScrollAnim() {
    const sections = document.querySelectorAll('.js-scroll');
    const windowHalf = window.innerHeight * 0.6;
    const activeClass = 'ativo';

    if(sections.length) {
        function animateScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowHalf) < 0;
                if(isSectionVisible) {
                    section.classList.add(activeClass);
                } else {
                    section.classList.remove(activeClass);
                }
            });
        }

        animateScroll();

        window.addEventListener('scroll', animateScroll);
    }
}

initScrollAnim();