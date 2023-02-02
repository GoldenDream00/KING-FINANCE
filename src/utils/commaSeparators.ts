export const commaSeparators = (num: number | string) => {
      const numParts = num.toString().split('.');
      numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return numParts.join('.');
};