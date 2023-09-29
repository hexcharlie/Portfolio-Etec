const cord1 = document.querySelectorAll('.cord1');
const cord2 = document.querySelectorAll('.cord2');

cord1.forEach(header => {
  header.addEventListener('click', () => {
    const index = Array.from(cord1).indexOf(header);

    if (cord2[index].style.display === 'none') {
      cord2[index].style.display = 'block';
    } else {
      cord2[index].style.display = 'none';
    }

  });
});