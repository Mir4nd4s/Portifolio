function opened() {
  document.getElementById('list').classList.add('collapse');
  
  document.getElementsByClassName('exit').style.display == 'none';
  document.getElementsByClassName('menu').style.background == 'red';
}

/* function closed() {
  const close = document.querySelector('exit');
  close.classList.remove('exit');

}
 */


document.querySelector('.ball').addEventListener('click', (e)=>{
  e.target.classList.toggle('ball-move');
  document.body.classList.toggle('dark');
  const collapse = document.querySelector('.collapse');
  collapse.classList.toggle('dark');
});

