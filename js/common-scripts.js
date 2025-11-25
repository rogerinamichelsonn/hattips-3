window.onload = function(){
  if(localStorage.theme !== 'light' && localStorage.theme !== 'dark'){
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', localStorage.theme);
  } else{
    document.documentElement.setAttribute('data-theme', localStorage.theme);
  }

  window.addEventListener('beforeunload', function(e){
    sessionStorage.setItem('scrollpos', document.getElementById('main').scrollTop);
  });

  var scrollpos = sessionStorage.getItem('scrollpos');
    if (scrollpos){document.getElementById('main').scrollTo(0, scrollpos);}
}

function themeToggle(){
  if(localStorage.theme){
    localStorage.theme = String(localStorage.theme) === 'light' ? 'dark': 'light'
  }
  document.documentElement.setAttribute('data-theme', localStorage.theme)
}

function collapseContent(){
  var collapse = document.getElementsByClassName('collapsible');
  var c;
  for (c = 0; c < collapse.length; c++){
    collapse[c].addEventListener('click', function(){
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else{
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
}
