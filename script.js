const open = document.getElementById('open');
const close = document.getElementById('close');
const model = document.getElementById('model');
const menuItem1 = document.getElementById('menuItem1');
const menuItem2 = document.getElementById('menuItem2');
const menuItem3 = document.getElementById('menuItem3');

open.onclick = function () {
  model.style.display = 'block';
};

close.onclick = function () {
  model.style.display = 'none';
};

menuItem1.onclick = function () {
  model.style.display = 'none';
};
menuItem2.onclick = function () {
  model.style.display = 'none';
};
menuItem3.onclick = function () {
  model.style.display = 'none';
};
