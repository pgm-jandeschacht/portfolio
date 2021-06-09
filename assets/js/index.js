(() => {

  const app = {

    initialize() {
      this.cacheElement();
      this.registersListeners();
      this.changeLinkState();
      this.getYear();
    },

    cacheElement() {
      this.$links = document.querySelectorAll('.nav-link a');
      this.$linksMobile = document.querySelectorAll('.nav-link-mobile a');
      this.$mobile = document.querySelector('.nav__mobile__list');
      this.$sections = document.querySelectorAll('.linking');
      this.$year = document.querySelector('.year');
      this.$burger = document.querySelector('.hamburger');
      this.$logoLink = document.querySelector('.nav__container__logo');
    },
    
    registersListeners() {
      window.addEventListener('scroll', ev => {
        this.changeLinkState();
      });
      
      if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        window.location.replace('http://localhost:8080/portfolio/');
      };
      
      this.$burger.addEventListener('click', ev => {
        this.$burger.classList.toggle('is-active');
        this.$mobile.classList.toggle('appear');
        // this.disableScroll();
        // this.$active = document.querySelector('.is-active');
        if(Array.from(this.$burger.classList).includes('is-active')) {
          this.disableScroll();
        } else {
          this.enableScroll();
        }
      });
      
      this.$logoLink.addEventListener('click', ev => {
        this.$burger.classList.remove('is-active');
        this.$mobile.classList.remove('appear');
        this.enableScroll();
      });
      
      this.$linksMobile.forEach(link => {
        link.addEventListener('click', ev => {
          this.$burger.classList.remove('is-active');
          this.$mobile.classList.remove('appear');
          this.enableScroll();
        });
      })
    },
    
    changeLinkState() {
      let index = this.$sections.length;
      
      while(--index && window.scrollY + 50 < this.$sections[index].offsetTop) {};
      
      this.$links.forEach((link) => link.classList.remove('active'));
      this.$links[index].classList.add('active');

      this.$linksMobile.forEach((link) => link.classList.remove('active'));
      this.$linksMobile[index].classList.add('active');
    },

    getYear() {
      const date = new Date();
      const year = date.getFullYear();
    
      this.$year.innerHTML = year;
    },

    disableScroll() {
      // Get the current page scroll position
      scrollTop = 
        window.pageYOffset || document.documentElement.scrollTop;
      scrollLeft = 
        window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
    },

    enableScroll() {
      window.onscroll = function() {};
    }


  }

  app.initialize();

})();
