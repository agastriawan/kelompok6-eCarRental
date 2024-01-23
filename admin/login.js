function Login() {
  let ussername = document.getElementById("ussername").value;
  let password = document.getElementById("password").value;

  if (ussername === "kelompok6@gmail.com" && password === "123456") {
    alert("Login Berhasil");

    window.location.href = "admin.html";
  } else {
    alert("Login Gagal");
  }
}
