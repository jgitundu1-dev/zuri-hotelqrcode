// The URL guests will access after scanning the QR code
const hotelURL = "https://zuri-hotel-rho.vercel.app";

// Create the QR code
const qrCode = new QRCode(document.getElementById("qrcode"), {
    text: hotelURL,
    width: 190,
    height: 190,
    colorDark: "#102820",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

// Download QR code as an image
document.getElementById("downloadBtn").addEventListener("click", function () {

    const qrImage = document.querySelector("#qrcode img");

    if (!qrImage) {
        alert("QR code is not ready yet.");
        return;
    }

    const link = document.createElement("a");

    link.href = qrImage.src;
    link.download = "zuri-hotel-qr-code.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
