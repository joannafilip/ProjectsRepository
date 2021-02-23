import './styles.scss';

function addEuro(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return `€ ${value}`;
}
function singleOrPl(value) {
  if (value === '1') {
    return `${value} person`;
  }
  return `${value} people`;
}
function updateCalc() {
  const bill = Number(document.querySelector('#bill').value);
  const tipPercent = document.querySelector('#tipInput').value;
  const split = document.querySelector('#splitInput').value;
  const tipValue = bill * (tipPercent / 100);
  const tipEach = tipValue / split;
  const newBillEachPers = (bill + tipValue) / split;

  document.querySelector('#tipValue').innerHTML = addEuro(tipValue);
  document.querySelector('#tipPercent').innerHTML = `${tipPercent}%`;
  document.querySelector('#totalWithTip').innerHTML = addEuro(bill + tipValue);
  document.querySelector('#splitVal').innerHTML = singleOrPl(split);
  document.querySelector('#billEachPers').innerHTML = addEuro(newBillEachPers);
  document.querySelector('#tipEach').innerHTML = addEuro(tipEach);
}

const main = document.getElementById('main');
main.addEventListener('input', updateCalc);
