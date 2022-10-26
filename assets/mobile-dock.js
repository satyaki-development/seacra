class MobileDock extends HTMLElement {
  constructor() {
    super();

    this.isAction = false;

    this.header = document.querySelector('sticky-header');

    this.querySelectorAll('.dock__item[data-action]').forEach((button) => {
      button.addEventListener('click', this.onButtonClick.bind(this));
    });
    document.addEventListener('menudrawer:close', this.hideStickyHeader.bind(this));
    document.addEventListener('searchmodal:close', this.hideStickyHeader.bind(this));

    this.init();
  }

  init() {
    const delay = Shopify && Shopify.designMode ? 1 : parseInt(this.dataset.delay);

    setTimeout(() => {
      this.classList.add('is-active');
      document.documentElement.style.setProperty('--mobile-dock-height', `${this.offsetHeight}px`);
    }, delay * 1000);
  }

  onButtonClick(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const delay = this.waitStickyHeader();

    switch (target.dataset.action) {
      case 'cart':
        this.isAction = true;

        const miniCart = document.querySelector('mini-cart');
        setTimeout(() => {
          miniCart.open();
          document.activeElement.blur();
        }, delay);
        break;

      case 'menu':
        this.isAction = true;

        const headerDrawer = document.querySelector('header-drawer');
        setTimeout(() => {
          headerDrawer.querySelector('summary').click();
          document.activeElement.blur();
        }, delay);
        break;

      case 'search':
        this.isAction = true;
        
        document.querySelectorAll('search-modal').forEach((searchModal) => {
          const style = window.getComputedStyle(searchModal);
          if (style.display === 'none') {
            return;
          }

          setTimeout(() => {
            searchModal.querySelector('summary').click();
            
            searchModal.querySelector('input:not([type="hidden"])').focus();
            console.log(searchModal.querySelector('input:not([type="hidden"])'));
          }, delay);
        });
        break;
    }
  }

  hideStickyHeader() {
    if (theme.config.mqlSmall && this.isAction && this.header.sticky()) {
      setTimeout(() => {
        this.header.hide();
        this.isAction = false;
      }, 500);
    }
  }

  waitStickyHeader() {
    if (this.header && !this.header.sticky() && !this.isElementVisible(this.header)) {
      this.header.hide();
      setTimeout(() => this.header.reveal());

      return 250;
    }

    return 0;
  }

  isElementVisible(element) {
    const rect = element.getBoundingClientRect(),
        width  = window.innerWidth || document.documentElement.clientWidth,
        height = window.innerHeight || document.documentElement.clientHeight,
        efp    = function (x, y) { return document.elementFromPoint(x, y) };

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 || rect.left > width || rect.top > height) {
      return false;
    }

    // Return true if any of its four corners are visible
    return (
      element.contains(efp(rect.left,  rect.top))
      || element.contains(efp(rect.right, rect.top))
      || element.contains(efp(rect.right, rect.bottom))
      || element.contains(efp(rect.left,  rect.bottom))
      || element.parentNode.contains(efp(rect.left,  rect.top))
      || element.parentNode.contains(efp(rect.right, rect.top))
      || element.parentNode.contains(efp(rect.right, rect.bottom))
      || element.parentNode.contains(efp(rect.left,  rect.bottom))
    );
  }
}
customElements.define('mobile-dock', MobileDock);
