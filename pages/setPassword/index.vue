<template>
    <div class="container">
      <div class="overlay">
        <div class="set-box">
          <h2 class="title">Set New Password</h2>
          <form @submit.prevent="submitPassword">
            <div class="input-group">
              <label for="new-password">New Password</label>
              <input
                type="password"
                id="new-password"
                v-model="newPassword"
                placeholder="Enter new password"
                required
              />
            </div>
  
            <div class="input-group">
              <label for="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                v-model="confirmPassword"
                placeholder="Confirm new password"
                required
              />
            </div>
  
            <div class="action-group">
              <button type="submit" class="reset-btn">Set Password</button>
            </div>
  
            <p v-if="error" class="error-text">{{ error }}</p>
  
            <p class="back-login">
              Go back to <router-link to="/login">Login</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const newPassword = ref('')
  const confirmPassword = ref('')
  const error = ref('')
  
  const submitPassword = () => {
    if (newPassword.value !== confirmPassword.value) {
      error.value = 'Passwords do not match.'
      return
    }
  
    error.value = ''
    console.log('Password successfully set:', newPassword.value)
    // Add your API integration here
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
  
  .set-box {
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
    background-color: #1e3a8a;
    color: white;
    font-weight: 600;
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .reset-btn:hover {
    background-color: #1e40af;
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
  
  .error-text {
    color: red;
    text-align: center;
    font-size: 14px;
    margin-top: 0.5rem;
  }
  </style>
  