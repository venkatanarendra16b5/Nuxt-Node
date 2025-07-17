<template>
    <div class="dashboard">
      <div class="dashboard-container">
        <h1 class="title">🏠 Hostel Dashboard</h1>
  
        <!-- KPI Cards -->
        <div class="kpi-grid">
          <!-- Pie Chart -->
          <div class="kpi-card">
            <h3>Room Occupancy</h3>
            <!-- <canvas ref="roomChart" width="100" height="100"></canvas> -->
          </div>
  
          <!-- Hostel Capacity -->
          <div class="kpi-card">
            <h3>Hostel Capacity</h3>
            <p class="value">120 / 150</p>
          </div>
  
          <!-- Financial Summary -->
          <div class="kpi-card">
            <h3>Financial Summary</h3>
            <p>Revenue: ₹85,000</p>
            <p>Expenditures: ₹30,000</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  definePageMeta({
    layout: 'mainlayout'
  })
//   import Chart from 'chart.js/auto'
  
  const roomChart = ref(null)
  
  onMounted(() => {
    // new Chart(roomChart.value, {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['Filled', 'Vacant'],
    //     datasets: [{
    //       data: [120, 30],
    //       backgroundColor: ['#4CAF50', '#E0E0E0'],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     cutout: '60%',
    //     plugins: {
    //       legend: {
    //         position: 'bottom'
    //       }
    //     }
    //   }
    // })
  })
  </script>
  
  <style scoped>
  .dashboard {
    min-height: 100vh;
    background: linear-gradient(to right, #e0f7fa, #f1f8e9);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 40px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .dashboard-container {
    max-width: 1000px;
    width: 90%;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #2c3e50;
  }
  
  .kpi-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .kpi-card {
    flex: 1 1 300px;
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  }
  
  .kpi-card h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
  }
  
  .value {
    font-size: 24px;
    font-weight: bold;
    color: #4CAF50;
  }
  </style>
  