function update(object) {
  localStorage.setItem('favorites', JSON.stringify(object));
}

function get() {
  const favorites = localStorage.getItem('favorites');
  if (favorites === null) {
    localStorage.setItem('favorites', JSON.stringify({}));
    return {};
  }
  return JSON.parse(favorites);
}

function has(id) {
  const favorites = get();
  return id in favorites;
}

function add(id, object) {
  if (has(id)) return false;

  const favorites = get();
  favorites[id] = object;

  console.log(id);

  update(favorites);
  return true;
}

function remove(id) {
  if (!has(id)) return false;
  const favorites = get();

  delete favorites[id];
  update(favorites);
  return true;
}

export default {
  remove,
  add,
  has,
  get,
};
