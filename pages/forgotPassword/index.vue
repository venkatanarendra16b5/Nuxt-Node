<template>
    <div class="container">
      <div class="overlay">
        <div class="forgot-box">
          <h2 class="title">Forgot Password</h2>
          <form @submit.prevent="submitEmail">
            <div class="input-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Enter your registered email"
              />
            </div>
  
            <div class="action-group">
              <button type="submit" class="reset-btn">Send Reset Link</button>
            </div>
  
            <p class="back-login">
              Remembered your password?
              <router-link to="/login">Go to Login</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  
  const submitEmail = () => {
    console.log('Reset password link sent to:', email.value)
    // You can add actual API logic here
  }
  </script>
  
  <style scoped>
  .container {
    min-height: 100vh;
    background: url('/backgroundImage.png') no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    border-radius: 12px;
    backdrop-filter: blur(4px);
    width: 100%;
    max-width: 420px;
  }
  
  .forgot-box {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 12px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group label {
    font-size: 14px;
    color: #555;
    margin-bottom: 0.25rem;
    display: block;
  }
  
  .input-group input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
  }
  
  .reset-btn {
    width: 100%;
    background-color: #16a34a;
    color: white;
    font-weight: 600;
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .reset-btn:hover {
    background-color: #15803d;
  }
  
  .back-login {
    text-align: center;
    font-size: 14px;
    margin-top: 1rem;
  }
  
  .back-login a {
    color: #2563eb;
    text-decoration: none;
  }
  
  .back-login a:hover {
    text-decoration: underline;
  }
  </style>
  