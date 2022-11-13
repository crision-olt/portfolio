const themeToggleButton = () => {
  const iconSize = "1.25em";

  // toggleTheme.js will hide/show the correct icon depending on theme mode selected
  return `
    <audio src="/public/switch.mp3" id="switch-sound" preload="auto" hidden></audio>
    <button class="toggleThemeButton mr-4 sm:mr-0 sm:ml-4">
      <!-- Icon Sun -->
      <svg width="${iconSize}" height="${iconSize}" class="icon-sun fill-mint-600 hover:fill-mint-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
        <path d="M30 13.21a3.93 3.93 0 1 1 6.8-3.94L41.86 18a3.94 3.94 0 1 1-6.81 4L30 13.21Zm31.45 13a35.23 35.23 0 1 1-24.93 10.31A35.13 35.13 0 0 1 61.44 26.2ZM58.31 4a3.95 3.95 0 1 1 7.89 0v10.06a3.95 3.95 0 1 1-7.89 0V4Zm29.18 6.1A3.93 3.93 0 1 1 94.3 14l-5.06 8.76a3.93 3.93 0 1 1-6.81-3.92l5.06-8.75ZM109.67 30a3.93 3.93 0 1 1 3.94 6.81l-8.75 5.06a3.94 3.94 0 1 1-4-6.81l8.81-5.06Zm9.26 28.32a3.95 3.95 0 1 1 0 7.89h-10.11a3.95 3.95 0 1 1 0-7.89Zm-6.15 29.18a3.93 3.93 0 1 1-3.91 6.81l-8.76-5.06a3.93 3.93 0 1 1 3.89-6.82l8.75 5.06Zm-19.89 22.17a3.93 3.93 0 1 1-6.81 3.94L81 104.86a3.94 3.94 0 0 1 6.81-4l5.06 8.76Zm-28.32 9.26a3.95 3.95 0 1 1-7.89 0v-10.11a3.95 3.95 0 1 1 7.89 0v10.11Zm-29.18-6.15a3.93 3.93 0 0 1-6.81-3.91l5.06-8.76a3.93 3.93 0 1 1 6.81 3.89l-5.06 8.75ZM13.21 92.89a3.93 3.93 0 1 1-3.94-6.81L18 81a3.94 3.94 0 1 1 4 6.83l-8.76 5.06ZM4 64.57a3.95 3.95 0 1 1 0-7.89h10.06a3.95 3.95 0 1 1 0 7.89Zm6.1-29.18a3.93 3.93 0 1 1 3.9-6.81l8.76 5.06a3.93 3.93 0 1 1-3.92 6.81l-8.74-5.06Z"/>
      </svg>
      
      <!-- Icon Sun Glasses -->
      <svg width="${iconSize}" height="${iconSize}" class="icon-sunglasses fill-blue-600 hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 60.18" xml:space="preserve">
        <path d="M1.27 29.05a5.13 5.13 0 0 1-.74-1.18c-.68-.78-.72-1.95-.05-2.78L14.27 8.17c.11-.13.38-.47.66-.82 2.41-3 4.36-5.42 8.71-6.76C24.9.2 26.19.01 27.48 0c1.27-.01 2.53.15 3.78.46 1.16.28 1.87 1.46 1.58 2.61a2.152 2.152 0 0 1-2.61 1.58c-.93-.23-1.84-.35-2.73-.34-.86.01-1.73.13-2.6.4-3.08.95-4.66 2.91-6.61 5.34-.16.2-.33.41-.68.84L6.89 24.06l.97-.06c13.68-1.83 27.27-.44 40.77 5.14 5.01 2.07 9.93 5.99 15.4 4.56 3.62-.95 8.91-4.45 13.27-6.04 13.43-4.89 25.42-4.91 38.91-3.32l-10.95-13.45c-.35-.43-.52-.64-.68-.84-1.95-2.43-3.53-4.39-6.61-5.34-.87-.27-1.73-.4-2.6-.4-.89-.01-1.8.11-2.73.34-1.16.28-2.33-.42-2.61-1.58-.28-1.16.42-2.33 1.58-2.61C92.87.15 94.13-.01 95.4 0c1.3.01 2.58.2 3.85.59 4.35 1.34 6.29 3.76 8.71 6.76.28.35.56.69.66.82L122.4 25.1c.75.92.61 2.28-.31 3.04-.21.17-.44.29-.68.37-1.33 2.23-4.04 4.8-4.75 5.84-1.57 2.27-2.89 4.92-4.07 7.81-1.71 5.1-3.77 9.16-6.21 12.07-2.32 2.77-4.97 4.5-8 5.14-.4.08-.79.18-1.18.24-5.33.87-15.01.92-20.03-1.02-1.46-.56-2.79-1.43-4-2.49-1.69-1.31-4.3-6.18-6.29-10.57-1.39-3.06-3.82-4.99-5.24-5.05-1.57-.07-4.16 1.72-5.62 4.79-1.12 2.33-2.65 4.55-3.58 6.66-3.11 7.06-10.95 8.29-19.02 8.26-2.18-.01-4.35-.2-6.54-.59-7.9-1.43-10.15-2.39-13.42-9.56C9.33 41.02 8.78 36.2 1.27 29.05z" style="fill-rule:evenodd;clip-rule:evenodd"/>
      </svg>
    </button>
  `;
}

module.exports = { themeToggleButton };
