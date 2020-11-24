let passages = [
  {
    title: 'sources of sadness',
    author: 'Sigmund Freud',
    source: 'Civilization and Its Discontents',
  }, {
    title: 'saying bye to Japhy',
    author: 'Jack Kerouac',
    source: 'The Dharma Bums',
  }, {
    title: 'a prophecy',
    author: 'William Blake',
    source: 'The Marriage of Heaven and Hell',
  },
];

function getAll() {
  return passages;
}

module.exports = {
  getAll: getAll,
};