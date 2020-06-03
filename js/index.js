function myClick() {
  
  if (userName.value.length === 0 || textMessage.value.length === 0) {
    alert('Input inncorect');
    return false;
  }

  let newComment = document.createElement('div');
  let newTop = document.createElement('div');
  let newTitle = document.createElement('div');
  let newDate = document.createElement('div');
  let newDescription = document.createElement('div');

  newComment.classList.add('comment');
  newTop.classList.add('top');
  newDate.classList.add('date');
  newDescription.classList.add('description');

  newTitle.innerHTML = userName.value;
  newDescription.innerHTML = textMessage.value;

  let tmpDate = new Date();
  let tmpHours = tmpDate.getHours();
  let tmpMinutes = tmpDate.getMinutes();
  let tmpSeconds = tmpDate.getSeconds();
  let tmpDay = tmpDate.getDay();
  let tmpMonth = tmpDate.getMonth() + 1;
  let tmpYear = tmpDate.getFullYear();

  if (tmpHours < 10) {
    tmpHours = '0' + tmpHours;
  }

  if (tmpMinutes < 10) {
    tmpMinutes = '0' + tmpMinutes;
  }

  if (tmpSeconds < 10) {
    tmpSeconds = '0' + tmpSeconds;
  }

  if (tmpDay < 10) {
    tmpDay = '0' + tmpDay;
  }

  if (tmpMonth < 10) {
    tmpMonth = '0' + tmpMonth;
  }

  newDate.innerHTML = `${tmpHours}:${tmpMinutes}:${tmpSeconds}  ${tmpDay}:${tmpMonth}:${tmpYear}`;

  newTop.appendChild(newTitle);
  newTop.appendChild(newDate);
  newComment.appendChild(newTop);
  newComment.appendChild(newDescription);
  commentBlock.appendChild(newComment);

  textMessage.value = '';
  userName.value = '';
}
