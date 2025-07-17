<template>
    <div class="main-layout">
      <!-- Top Navigation Bar -->
      <header class="top-nav">
        <div class="logo">🏠</div>
  
        <nav class="nav-actions">
          <div class="nav-links">
            <NuxtLink to="/dashboard" class="nav-link" active-class="active">Dashboard</NuxtLink>
            <NuxtLink to="/rooms" class="nav-link" active-class="active">Rooms</NuxtLink>
            <NuxtLink to="/expenses" class="nav-link" active-class="active">Expenses</NuxtLink>
          </div>
  
          <!-- Profile Icon with Dropdown -->
          <div class="profile-container" @click="toggleDropdown">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" class="profile-icon" />
            <div class="dropdown" v-if="showDropdown">
              <button @click="logout" class="dropdown-item">Logout</button>
            </div>
          </div>
        </nav>
      </header>
  
      <!-- Page Content -->
      <main class="main-content">
        <slot />
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  
  const showDropdown = ref(false)
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
  }
  
  const logout = () => {
    // Clear session/token if required
    router.push('/login')
  }
  </script>
  
  <style scoped>
  .main-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .top-nav {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #2c3e50;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    font-size: 1.3rem;
    font-weight: bold;
  }
  
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  
  .nav-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-link {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #00cec9;
  }
  
  .active {
    border-bottom: 2px solid #00cec9;
  }
  
  .profile-container {
    position: relative;
    cursor: pointer;
  }
  
  .profile-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  
  .dropdown {
    position: absolute;
    right: 0;
    top: 40px;
    background: white;
    color: #333;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    overflow: hidden;
    z-index: 10;
  }
  
  .dropdown-item {
    padding: 10px 15px;
    background: white;
    width: 100%;
    text-align: left;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }
  
  .dropdown-item:hover {
    background-color: #f0f0f0;
  }
  
  .main-content {
    flex-grow: 1;
    padding: 2rem;
    background: #f4f6f8;
  }
  </style>
  