const wrapper = document.querySelector(".wrapper");
// const signUpLink = document.querySelector(".signUp-link");
// const signInLink = document.querySelector(".signIn-link");

// signUpLink.addEventListener("click", () => {
//   wrapper.classList.add("animate-signIn");
//   wrapper.classList.remove("animate-signUp");
// });

// signInLink.addEventListener("click", () => {
//   wrapper.classList.add("animate-signUp");
//   wrapper.classList.remove("animate-signIn");
// });

function sendLoginData() {
    const form = document.querySelector('.sign-in form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
      const username = document.querySelector('.sign-in input[type="text"]').value;
      alert(username);
      const password = document.querySelector('.sign-in input[type="password"]').value;
      const accountType = document.querySelector('.sign-in input[name="account_type"]:checked').value;
  
      const data = {
        username,
        password,
        accountType,
      };
  
      fetch('http://localhost:7000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(responseData => {
          const userId = responseData.id; // Assuming the response contains an "id" property
          const hostId = window.location.hostname; // Get the current hostname
  
          let redirectUrl;
  
          switch (accountType) {
            case 'admin':
              redirectUrl = `http://localhost:3030/`;
              break;
            case 'teacher':
              redirectUrl = `http://localhost:${hostId}/teacher/${userId}`;
              break;
            case 'parent':
              redirectUrl = `http://localhost:3031/`;
              break;
            case 'student':
              redirectUrl = `http://localhost:3031/`;
              break;
            default:
              console.error('Invalid account type:', accountType);
              break;
          }
  
          if (redirectUrl) {
            window.location.href = redirectUrl; // Redirect to appropriate URL
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  }
  
  window.addEventListener('DOMContentLoaded', sendLoginData);
  
