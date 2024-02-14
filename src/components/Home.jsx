import React, { useState, useEffect } from 'react';
import LoadingAnimation from './Layout/LoadingAnimation';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 6000);
  });

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <h1>hello from home</h1>
      )}
    </div>
  )
}

export default Home;
