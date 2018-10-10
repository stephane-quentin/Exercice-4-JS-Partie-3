function verification(){
  var pwd = document.getElementById('password').value;
  var confirm = document.getElementById('confirmPassword').value;
  if (!isNaN(pwd) || !isNaN(confirm) || pwd < 0 || confirm < 0) {
    alert('Veuillez mettre au moins une lettre');
  } else if (pwd == confirm){
    document.getElementById('confirmPassword').style.border = 'green 3px solid';
    document.getElementById('password').style.border = 'green 3px solid';
  }
    else {
      document.getElementById('confirmPassword').style.border = 'red 3px solid';
      document.getElementById('password').style.border = 'red 3px solid';
    }
}
