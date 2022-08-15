const ftoc = function(degree) {

  degree = (degree - 32) * 0.55555555555556;

  return Math.round(degree * 10) / 10

};

const ctof = function(degree) {

  degree = degree * 1.8 + 32;

  return Math.round(degree * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
