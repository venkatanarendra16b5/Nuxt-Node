<template>
    <div class="login-container">
      <div class="branding">
        <h1>Hyderabad HOSTEL MANAGEMENT</h1>
      </div>
      <div class="login-box">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label>
              <img src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" alt="Email" />
              <input type="email" placeholder="Email" v-model="email" required />
            </label>
          </div>
          <div class="input-group">
            <label>
              <img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="Password" />
              <input type="password" placeholder="Password" v-model="password" required />
            </label>
          </div>
          <div class="forgot-password">
            <a href="/forgotPassword">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <p class="register-link">
          Don't have an account?
          <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  function handleLogin() {
    router.push('/dashboard')
    //console.log('Login clicked with', email.value, password.value)
    // Add your login logic here
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  .login-container {
    background: url('/backgroundImage.png') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
  }
  
  .branding h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  .login-box {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 2rem;
    border-radius: 20px;
    max-width: 400px;
    width: 100%;
    color: white;
    backdrop-filter: blur(10px);
  }
  
  .login-box h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group label {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    padding: 0.6rem 0.8rem;
  }
  
  .input-group img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  
  .input-group input {
    border: none;
    outline: none;
    width: 100%;
    background: transparent;
    font-size: 1rem;
    color: #333;
  }
  
  .forgot-password {
    text-align: right;
    margin: 0.5rem 0 1rem;
  }
  
  .forgot-password a {
    color: #00c0ff;
    text-decoration: none;
    font-size: 0.9rem;
  }
  
  .forgot-password a:hover {
    text-decoration: underline;
  }
  .register-link {
    text-align: center;
    font-size: 14px;
    margin-top: 1rem;
  }
  .register-link a {
    color: #00c0ff;
    text-decoration: none;
    font-size: 0.9rem;
  }
  .register-link a:hover {
    text-decoration: underline;
  }
  
  button {
    background-color: #113e96;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    padding: 0.75rem 0;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  button:hover {
    background-color: #0b2f7b;
  }
  
  @media (max-width: 768px) {
    .login-container {
      flex-direction: column;
      padding: 2rem;
    }
  
    .branding {
      margin-bottom: 2rem;
    }
  
    .branding h1 {
      font-size: 2rem;
    }
  
    .login-box {
      max-width: 100%;
    }
  }
  </style>
  
