const ul = document.querySelector('.navLinksList');
        const nav = document.querySelector('nav');
        const btnMenuNav = document.querySelector('.menu');
        const btnImage = document.querySelector('.menu img');
        const currentSrc = btnImage.getAttribute('src');
        const newSrc = currentSrc === 'images/icon-menu.svg' ? 'images/icon-close-menu.svg' : 'images/icon-menu.svg';
        const isUlVisible = localStorage.getItem('isUlVisible') === 'false';
          btnMenuNav.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAttribute(btnImage,'src', currentSrc , newSrc);
            ul.classList.toggle('d-none');
        });

        function toggleAttribute(element, attributeName, currentValue,newValue) {
        if (element.getAttribute(attributeName) === newValue) {
          element.setAttribute(attributeName, currentValue);
        } else {
          element.setAttribute(attributeName, newValue);
        }
      }
      const arrowsDown=document.querySelectorAll('.menuArrow');  
      arrowsDown.forEach((arrowDown)=>{
        arrowDown.addEventListener('click',()=>{
          const arrowDownImg=arrowDown.querySelector('img');
          const currentArrowSrc=arrowDownImg.getAttribute('src');
          const newArrowDownSrc=currentArrowSrc === 'images/icon-arrow-down.svg'?'images/icon-arrow-up.svg' :'images/icon-arrow-down.svg';
         toggleAttribute(arrowDownImg,'src',currentArrowSrc,newArrowDownSrc);
         arrowDown.nextElementSibling.classList.toggle('d-none');
         arrowDown.previousSibling.classList.toggle('active');
         arrowDown.classList.toggle('active');
      })
      })  
