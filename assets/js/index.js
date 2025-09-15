document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("qrForm");
  const input = document.getElementById("urlInput");
  const output = document.getElementById("qrOutput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const url = input.value.trim();

    if (!url) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a URL before generating!",
      });
      return;
    }

    const isValidUrl =
      /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/.test(
        url
      );
    if (!isValidUrl) {
      Swal.fire({
        icon: "warning",
        title: "Invalid URL",
        text: "That doesn't look like a valid URL. Try including 'https://' or 'www.'",
      });
      return;
    }

    output.innerHTML = "";

    new QRCode(output, {
      text: url,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    Swal.fire({
      icon: "success",
      title: "QR Code Generated!",
      text: "Your QR code is now displayed below the title.",
      timer: 1500,
      showConfirmButton: false,
    });
  });
});
