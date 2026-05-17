/* bubbles */ 
for (let i = 0; i < 24; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 18 + 6;
    bubble.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 12 + 10}s;
        animation-delay: ${Math.random() * 16}s;
    `;
    document.body.appendChild(bubble);
}