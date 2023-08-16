$(document).on('click', '.sum', function () {
  const value1 = $('.value1').val();
  const value2 = $('.value2').val();

  const sum = +value1 + +value2;

  if (value1 && value2 && sum > 0) {
    $('.value1').val('');
    $('.value2').val('');
    $('.result').text(sum);
  }
});

$(document).on('click', '.sub', function () {
  const value1 = $('.value1').val();
  const value2 = $('.value2').val();

  const sub = +value1 - +value2;

  if (value1 && value2 && sub > 0) {
    $('.value1').val('');
    $('.value2').val('');
    $('.result').text(sub);
  }
});

$(document).on('click', '.mult', function () {
  const value1 = $('.value1').val();
  const value2 = $('.value2').val();
  const mul = +value1 * +value2;

  if (value1 && value2 && mul > 0) {
    $('.value1').val('');
    $('.value2').val('');
    $('.result').text(mul);
  }
});

$(document).on('click', '.div', function () {
  const value1 = $('.value1').val();
  const value2 = $('.value2').val();

  const div = +value1 / +value2;

  if (value1 && value2 && div > 0) {
    $('.value1').val('');
    $('.value2').val('');
    $('.result').text(div);
  }
});
