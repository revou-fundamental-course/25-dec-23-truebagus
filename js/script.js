function hitungLuas() {
    // Mendapatkan nilai dari input field
    var panjangAlas = parseFloat(document.getElementById("inputPanjangAlas").value) || 0;
    var tinggi = parseFloat(document.getElementById("inputTinggi").value) || 0;

    // Melakukan perhitungan luas segitiga
    var luas = 0.5 * panjangAlas * tinggi;

    // Menampilkan hasil perhitungan
    document.getElementById("sisiValue1").innerText = panjangAlas;
    document.getElementById("sisiValue2").innerText = tinggi;
    document.getElementById("luas").innerText = luas.toFixed(2); // Menampilkan luas dengan 2 angka desimal
}

function resetLuas() {
    // Mereset nilai input field dan hasil perhitungan
    document.getElementById("inputPanjangAlas").value = "";
    document.getElementById("inputTinggi").value = "";
    document.getElementById("sisiValue1").innerText = "0";
    document.getElementById("sisiValue2").innerText = "0";
    document.getElementById("luas").innerText = "0";
}

function hitungKeliling() {
    // Mendapatkan nilai dari input field
    var sisiA = parseFloat(document.getElementById("sisiA").value) || 0;
    var sisiB = parseFloat(document.getElementById("sisiB").value) || 0;
    var sisiC = parseFloat(document.getElementById("sisiC").value) || 0;

    // Melakukan perhitungan keliling segitiga
    var keliling = sisiA + sisiB + sisiC;

    // Menampilkan nilai-nilai S1, S2, S3
    document.getElementById("keliling1").innerText = sisiA.toFixed(2);
    document.getElementById("keliling2").innerText = sisiB.toFixed(2);
    document.getElementById("keliling3").innerText = sisiC.toFixed(2);

    // Menampilkan hasil perhitungan keliling
    document.getElementById("kelilingResult").innerText = keliling.toFixed(2);
}

function resetKeliling() {
    // Mereset nilai input field dan hasil perhitungan
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("keliling1").innerText = "0";
    document.getElementById("keliling2").innerText = "0";
    document.getElementById("keliling3").innerText = "0";
    document.getElementById("kelilingResult").innerText = "0";
}

