import React from 'react';

export default function useEndScroll() {
  const [final, setFinal] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setFinal(true);
      } else setFinal(false);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return final;
}
