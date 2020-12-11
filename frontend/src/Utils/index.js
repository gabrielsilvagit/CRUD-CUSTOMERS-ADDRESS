import { includes, some } from 'lodash';

export const filterString = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

export function normalizeString(str) {
  const strAccents = str.split('');
  const strAccentsOut = new Array();

  const strAccentsLen = strAccents.length;

  for (let y = 0; y < strAccentsLen; y++) {
    if (!some(['ä', 'ü', 'ö'], el => includes(strAccents[y], el))) {
      strAccentsOut[y] = strAccents[y].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    } else {
      strAccentsOut[y] = strAccents[y];
    }
  }

  const newString = strAccentsOut.join('').replace('ß', 'ss');
  return newString;
}

export function formatPhone(phoneNumber) {
  const phone = phoneNumber.replace(/[|&;$%@"<>()+,]/g, '');
  let output;

  if (!phone) {
    return null;
  }
  const realPhone = phone.slice(2);
  const phoneLength = realPhone.length;

  if (phoneLength == 9) {
    output = ['(' + phone.slice(0, 2) + ') ' + realPhone.slice(0, 5) + '-' + realPhone.slice(phoneLength - 4)];
  } else {
    output = ['(' + phone.slice(0, 2) + ') ' + realPhone.slice(0, 4) + '-' + realPhone.slice(phoneLength - 4)];
  }

  return output;
}

export function dynamicFormatPhone(v) {
  v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, '$1-$2'); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

export function dynamicCost(valor) {
  const v = ((valor.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');

  const m = v[0]
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g);

  for (let i = 0; i < m.length; i++)
    m[i] =
      m[i]
        .split('')
        .reverse()
        .join('') + '.';

  const r = m.reverse().join('');

  return r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
}

export function validateCpf(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  var result = true;
  [9, 10].forEach(function(j) {
    var soma = 0,
      r;
    cpf
      .split(/(?=)/)
      .splice(0, j)
      .forEach(function(e, i) {
        soma += parseInt(e) * (j + 2 - (i + 1));
      });
    r = soma % 11;
    r = r < 2 ? 0 : 11 - r;
    if (r != cpf.substring(j, j + 1)) result = false;
  });
  return result;
}
