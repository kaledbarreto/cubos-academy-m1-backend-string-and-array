function imprimirData(dia, mes, ano) {
  const diaString = `${dia}`;
  const mesString = `${mes}`;
  const anoString = `${ano}`;
  console.log(`${diaString.padStart(2, '0')}/${mesString.padStart(2, '0')}/${anoString.padStart(4, '0')}`);
}

imprimirData(1, 1, 2001);
imprimirData(31, 1, 2001);
imprimirData(1, 11, 2001);