document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('.signup-form');
  const ordinateurSection = document.getElementById('ordinateurs');

  if (signupForm && ordinateurSection) {
    signupForm.addEventListener('submit', event => {
      event.preventDefault();
      ordinateurSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});