const renderList = (list) => {
  const container = document.querySelector('.list ul');
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<li>NO SCORES YET</li>';
    return;
  }
  let counter = 0;
  list
    .sort((a, b) => b.score - a.score)
    .forEach((score, index) => {
      const li = document.createElement('li');

      li.id = index;
      const user = document.createElement('span');
      user.className = 'user';
      user.textContent = `${score.user}`;
      const order = document.createElement('span');
      order.className = 'order';
      order.textContent = `${(counter += 1)}`;
      const span = document.createElement('span');
      span.className = 'score';
      span.textContent = `${score.score}`;
      li.appendChild(order);
      li.appendChild(user);
      li.appendChild(span);
      container.append(li);
    });
};

export default renderList;
