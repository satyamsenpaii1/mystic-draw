
import React from 'react';

const Stars = () => {
  const starCount = 100;
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${2 + Math.random() * 3}s`,
      animationDelay: `${Math.random() * 5}s`,
    };
    stars.push(<div key={i} className="absolute rounded-full bg-primary/80 animate-pulse" style={style} />);
  }

  // A bit of styling for the stars
  const starStyle = `
    .star {
      width: 2px;
      height: 2px;
    }
  `;

  return (
    <>
      <style>{starStyle}</style>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        {stars.map((star, i) => (
          <div key={i} className="star absolute rounded-full bg-primary/70 animate-pulse" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${1 + Math.random()}px`,
            height: `${1 + Math.random()}px`,
          }} />
        ))}
      </div>
    </>
  );
};

export default Stars;
