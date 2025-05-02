// src/components/layout/animated-background.tsx

export function AnimatedBackground() {
  // Create an array with 15 elements (or more if needed)
  const squares = Array.from({ length: 15 });

  return (
    <ul className="background-squares" aria-hidden="true">
      {squares.map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
}
