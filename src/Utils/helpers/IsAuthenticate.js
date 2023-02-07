function checkAuthenticate() {
  const token = localStorage.getItem("token");
  if (token === null) {
    window.location.href = "/register";
    return true;
  }
  return true;
}

export default checkAuthenticate;
