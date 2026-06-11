import { useEffect, useState } from "react";

function AnimatedNumber({ value, startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let current = 0;

    const timer = setInterval(() => {
      current++;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [startAnimation, value]);

  return <>{count}+ </>;
}

export default AnimatedNumber;