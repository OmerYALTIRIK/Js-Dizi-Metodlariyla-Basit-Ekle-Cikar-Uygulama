const parcalar = ["Anakart", "Ram", "Ekran Kartı"];
var degisim = document.getElementsByClassName("degisim")[0];
var ekle = document.getElementById("ekle");
var ekle1 = document.getElementById("ekle1");
var ekle_btn = document.getElementById("ekle_btn");
var ekle_btn1 = document.getElementById("ekle_btn1");
var kaldir = document.getElementById("kaldir");
var kaldir1 = document.getElementById("kaldir1");

parcalar.forEach((eleman, index) => {
  //console.log(`${index} - ${eleman}`);
  degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
});

ekle_btn.addEventListener("click", function () {
  parcalar.push(ekle.value);
  degisim.innerHTML = "";
  parcalar.forEach((eleman, index) => {
    //console.log(`${index} - ${eleman}`);
    degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
  });
});

kaldir.addEventListener("click", () => {
  parcalar.pop();
  degisim.innerHTML = "";
  parcalar.forEach((eleman, index) => {
    //console.log(`${index} - ${eleman}`);
    degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
  });
});

ekle_btn1.addEventListener("click", function () {
  parcalar.unshift(ekle1.value);
  degisim.innerHTML = "";
  parcalar.forEach((eleman, index) => {
    //console.log(`${index} - ${eleman}`);
    degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
  });
});

kaldir1.addEventListener("click", () => {
  parcalar.shift();
  degisim.innerHTML = "";
  parcalar.forEach((eleman, index) => {
    //console.log(`${index} - ${eleman}`);
    degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
  });
});
