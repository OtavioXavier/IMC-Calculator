export const Utils = {
  isNotANumber(value) {
    return isNaN(value) || value == "";
  },

  calcIMC(Weight, Heigth) {
    return (Weight / Heigth ** 2).toFixed(2);
  },
};
