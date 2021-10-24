const bars = document.querySelector('#bars')
const menu = document.querySelector('#menu')


// Get all the elements you want to show on scroll
const targets = document.querySelectorAll(".js-show-on-scroll");

// Callback for IntersectionObserver
const callback = function(entries) {
  entries.forEach(entry => {

    // Is the element in the viewport?
    if (entry.isIntersecting) {

      // Add the fadeIn class:
      entry.target.classList.add("motion-safe:animate-fadeIn");
    } else {

      // Otherwise remove the fadein class
      entry.target.classList.remove("motion-safe:animate-fadeIn");
    }
  });
};

// Set up a new observer
const observer = new IntersectionObserver(callback);

// Loop through each of the target
targets.forEach(function(target) {
  // Hide the element
  target.classList.add("opacity-0");

  // Add the element to the watcher
  observer.observe(target);
});

bars.addEventListener('click', () => {
    if (menu.classList.contains('hidden') && window.innerWidth < 768) {
        menu.classList.remove('hidden');
        menu.classList.add(
            'flex',
            'flex-col',
            'text-center',
            'bg-white',
            'w-full',
            'absolute',
            'top-16'
        );
    } else {
        menu.classList.add('hidden')
    }
})

menu.addEventListener('click', () => {
    menu.add('hidden');
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.add('hidden');
        menu.classList.remove(
            'flex',
            'flex-col',
            'text-center',
            'bg-white',
            'w-full',
            'absolute',
            'top-16'
        );
    }
})

