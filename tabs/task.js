let tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

function clickTabs(e) {
  document.querySelector('.tab_active').classList.remove('tab_active');
  e.target.classList.add('tab_active');
};

tabs.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    document.querySelector('.tab_active').classList.remove('tab_active');
    document.querySelector('.tab__content_active').classList.remove('tab__content_active');
    e.target.classList.add('tab_active');
    tabsContent[index].classList.add('tab__content_active');
  });
});

