function verification(){
  var pwd = document.getElementById('password').value;
  var confirm = document.getElementById('confirmPassword').value;
  if (!isNaN(pwd) || !isNaN(confirm) || !pwd || !confirm) { //! devant une variable vérifie que la variable n'est pas vide mais pas que (null, undefined, false, 0 et NaN), à utiliser avec précaution
    alert('Veuillez mettre au moins une lettre');
  } else if (pwd.length <= 5){ // vérifie que la variable pwd fait au moins 6 caractères de long
    alert('Le mot de passe est trop court, au moins 6 caractères');
  } else if (pwd == confirm){
    document.getElementById('confirmPassword').style.border = 'green 3px solid';
    document.getElementById('password').style.border = 'green 3px solid';
    document.getElementById('bravo').innerHTML = 'Les mots de passe sont identiques';
  }
  else {
    document.getElementById('confirmPassword').style.border = 'red 3px solid';
    document.getElementById('password').style.border = 'red 3px solid';
    document.getElementById('bravo').innerHTML = 'Les mots de passe sont différents';
  }
}
