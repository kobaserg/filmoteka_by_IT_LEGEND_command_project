const refs = {
    watched: document.querySelector('.watched'),
    queue: document.querySelector('.queue'),
    enLang: document.querySelector('.en'),
    ukLang: document.querySelector('.uk')
}

refs.enLang.addEventListener('click', ()=>{
  refs.enLang.classList.add('activeLang');
  refs.ukLang.classList.remove('activeLang');
});

refs.ukLang.addEventListener('click', ()=>{
  refs.ukLang.classList.add('activeLang');
  refs.enLang.classList.remove('activeLang');
});


try {
    refs.watched.addEventListener('click', () => {
      refs.watched.classList.add('active');
      refs.queue.classList.remove('active');
    });
  } catch (eror) {
    console.log(eror);
  }
  
  try {
    refs.queue.addEventListener('click', () => {
      refs.queue.classList.add('active');
      refs.watched.classList.remove('active');
    });
  } catch (eror) {
    console.log(eror);
  }
