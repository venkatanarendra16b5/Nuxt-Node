<template>
    <div class="container">
      <div class="overlay">
        <div class="register-box">
          <h2 class="title">Register</h2>
          <form @submit.prevent="register">
            <div class="input-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="Enter your name" />
            </div>
  
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="Enter your email" />
            </div>
  
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="form.password" placeholder="Create password" />
            </div>
  
            <div class="input-group">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" v-model="form.confirmPassword" placeholder="Confirm password" />
            </div>
  
            <div class="action-group">
              <button type="submit" class="register-btn">Register</button>
            </div>
  
            <p class="login-link">
              Already have an account?
              <a href="/login">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const register = () => {
    console.log('Register form:', form)
    // Add your registration logic here
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
  
  .register-box {
    background-color: rgba(255, 255, 255, 0.9);
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
  
  .register-btn {
    width: 100%;
    background-color: #1e40af;
    color: white;
    font-weight: 600;
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .register-btn:hover {
    background-color: #1d4ed8;
  }
  
  .login-link {
    text-align: center;
    font-size: 14px;
    margin-top: 1rem;
  }
  
  .login-link a {
    color: #2563eb;
    text-decoration: none;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  </style>
  