import {TweenMax, Expo} from 'gsap';

const NavIndicator = ({nav, elem, dir}) => {
// Sets initial Item to active.
  const dom = {
    $nav: nav,
    $elem: elem,
  };

  dir ? setLeft(0) : setTop(0);

  function animate( stats ) {
    TweenMax.to( nav, 0.3, {ease: Expo.easeOut, ...stats});
  }

  function setLeft( ind = 0) {
    animate( {
      left: $( dom.$elem[ind] ).position().left,
      width: $( dom.$elem[ind] ).width(),
    });
  }

  function setTop( ind = 0 ) {
    animate( {
      top: $( dom.$elem[ind] ).position().top,
      height: $( dom.$elem[ind] ).height(),
    });
  }

  function reset( active = 0, bool = true ) {
    $(nav).removeAttr('style');
    bool ? setLeft(active) : setTop(active);
  }

  return {
    setLeft,
    setTop,
    reset,
  };
};

export default NavIndicator;
