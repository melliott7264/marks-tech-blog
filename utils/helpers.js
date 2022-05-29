module.exports = {
  // formats date to MM/DD/YYYY
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  // formats words as either singular or plural
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },

  // formats url to remove non-essential components
  format_url: (url) => {
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0];
  },
};
