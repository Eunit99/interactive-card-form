function NameUpdate(elem) {
  elem.classList.remove("error");
  document.querySelector(".card-name").innerHTML = elem.value;
}

function NumberUpdate(elem) {
  let n = cc_format(elem.value);
  elem.classList.remove("error");
  document.querySelector(".card-number").innerHTML = elem.value = n;
}

function MonthUpdate(elem) {
  elem.classList.remove("error");
  let month = elem.value;
  if (month.length === 1) month = `0${month}`;
  document.querySelector(".card-month").innerHTML = month;
}

function YearUpdate(elem) {
  elem.classList.remove("error");
  let year = elem.value;
  if (year.length === 1) year = `0${year}`;
  document.querySelector(".card-year").innerHTML = year;
}

function CodeUpdate(elem) {
  elem.classList.remove("error");
  let code = elem.value;
  if (code.length === 1) code = `0${code}`;
  if (code.length === 2) code = `0${code}`;
  document.querySelector(".card-code").innerHTML = code;
}

function cc_format(value) {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];

  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function checkDigit(event) {
  var code = event.which ? event.which : event.keyCode;

  if ((code < 48 || code > 57) && code > 31) {
    return false;
  }

  return true;
}

function OnSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  let errors;
  for (var name of formData.keys()) {
    if (formProps[name].length < 1) {
      document.getElementById(name).classList.add("error");
      errors = true;
    }
  }
  if (errors) return;
  event.target.classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
}

function checkLength(elem, n) {
  if (elem.value.length >= n) {
    return false;
  }
  return true;
}
