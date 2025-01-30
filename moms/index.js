"use strict";
function momsbeloeb(beloeb, moms = 25) {
  moms = (beloeb / 100) * moms;
  console.log(beloeb + moms);
}

function momsbeloeb2(beloeb, moms = 25) {
  console.log(beloeb * (1 + moms / 100));
}

momsbeloeb2(200);
momsbeloeb(20);
momsbeloeb(200, 50);
