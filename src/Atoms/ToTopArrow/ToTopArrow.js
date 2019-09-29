import React, {useEffect} from 'react';
import './ToTopArrow.scss';

const ToTopArrow = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll());
    return () => {
      window.removeEventListener('scroll', handleScroll());
    };
  }, []);

  const handleScroll = e => {
    let scrollpos = window.scrollY;
    const root = document.getElementById('root');

    function add_class_on_scroll() {
      root.classList.add('show');
    }

    function remove_class_on_scroll() {
      root.classList.remove('show');
    }
    window.addEventListener('scroll', function() {
      scrollpos = window.scrollY;
      if (scrollpos > 450) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <span className='to-top-arrow' onClick={handleClick}>
      <i className='arrow'/>
    </span>
  )
}

export default ToTopArrow;