<template>
    <div class="expenses-wrapper">
      <div class="expenses-container">
        <!-- Header -->
        <div class="expenses-header">
          <h1>📘 Expenses Overview</h1>
          <button @click="showModal = true">➕ Add Expense</button>
        </div>
  
        <!-- Table -->
        <div class="expenses-table-card">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Reason</th>
                <th>Amount</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(expense, index) in expenses"
                :key="index"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ expense.reason }}</td>
                <td>₹{{ expense.amount }}</td>
                <td>
                  <a v-if="expense.fileUrl" :href="expense.fileUrl" target="_blank">View</a>
                  <span v-else class="no-file">None</span>
                </td>
              </tr>
              <tr v-if="expenses.length === 0">
                <td colspan="4" class="empty-row">No expenses added yet.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h2>Add New Expense</h2>
          <form @submit.prevent="addExpense">
            <label>
              Reason
              <input type="text" v-model="newExpense.reason" required placeholder="e.g., Maintenance fee" />
            </label>
  
            <label>
              Amount (₹)
              <input type="number" v-model.number="newExpense.amount" required placeholder="e.g., 1500" />
            </label>
  
            <label>
              Upload Receipt
              <input type="file" @change="handleFileUpload" />
            </label>
  
            <div class="modal-actions">
              <button type="button" class="cancel-btn" @click="closeModal">Cancel</button>
              <button type="submit" class="save-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  definePageMeta({
    layout: 'mainlayout'
  })
  
  const showModal = ref(false)
  
  const newExpense = ref({
    reason: '',
    amount: null,
    file: null,
    fileUrl: null
  })
  
  const expenses = ref([])
  
  function handleFileUpload(e) {
    const file = e.target.files[0]
    if (file) {
      newExpense.value.file = file
      newExpense.value.fileUrl = URL.createObjectURL(file)
    }
  }
  
  function addExpense() {
    expenses.value.push({ ...newExpense.value })
    closeModal()
  }
  
  function closeModal() {
    showModal.value = false
    newExpense.value = {
      reason: '',
      amount: null,
      file: null,
      fileUrl: null
    }
  }
  </script>
  
  <style scoped>
  .expenses-wrapper {
    min-height: 100vh;
    background: linear-gradient(to right, #e8f0fe, #f1f8e9);
    padding: 40px 20px;
    font-family: 'Segoe UI', Tahoma, sans-serif;
  }
  
  .expenses-container {
    max-width: 960px;
    margin: 0 auto;
  }
  
  .expenses-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .expenses-header h1 {
    font-size: 30px;
    color: #2d3748;
  }
  
  .expenses-header button {
    background-color: #4f46e5;
    color: white;
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
  }
  
  .expenses-header button:hover {
    background-color: #4338ca;
  }
  
  .expenses-table-card {
    background: white;
    border-radius: 12px;
    overflow-x: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background-color: #e0e7ff;
    color: #3730a3;
  }
  
  th, td {
    padding: 14px 20px;
    text-align: left;
  }
  
  tbody tr {
    border-bottom: 1px solid #f3f4f6;
  }
  
  tbody tr:hover {
    background-color: #f9fafb;
  }
  
  .no-file {
    color: #a0aec0;
    font-style: italic;
  }
  
  .empty-row {
    text-align: center;
    color: #a0aec0;
    padding: 20px;
  }
  
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 40;
  }
  
  .modal-content {
    background: white;
    padding: 30px;
    border-radius: 16px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  .modal-content h2 {
    font-size: 22px;
    margin-bottom: 20px;
    color: #1a202c;
  }
  
  .modal-content label {
    display: block;
    margin-bottom: 15px;
    color: #4a5568;
  }
  
  .modal-content input[type="text"],
  .modal-content input[type="number"],
  .modal-content input[type="file"] {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    margin-top: 6px;
  }
  
  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }
  
  .cancel-btn {
    background-color: #edf2f7;
    padding: 8px 14px;
    border-radius: 6px;
    color: #4a5568;
  }
  
  .save-btn {
    background-color: #4f46e5;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: bold;
    transition: 0.2s ease;
  }
  
  .save-btn:hover {
    background-color: #4338ca;
  }
  </style>
  