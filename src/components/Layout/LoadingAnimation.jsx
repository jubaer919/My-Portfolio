import React, { useState, useEffect } from 'react';
import '../../App.css';

function LoadingAnimation() {
  const [isHexagonVisible, setIsHexagonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHexagonVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="section-isloading">
      <div>
        {isHexagonVisible && (
          <svg class="hexagon-svg" viewBox="0 0 100 100">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
            <text className="text-animation" x="30" y="60" fill="#64ffda" fontFamily="Arial">JM</text>
          </svg>
        )}
      </div>
    </div>
  );
}

export default LoadingAnimation;
