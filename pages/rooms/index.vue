<template>
  <div class="rooms-page">
    <!-- Header -->
    <div class="header">
      <h1>🛏️ Rooms Management</h1>
      <div class="actions">
        <button @click="addFloor">➕ Add Floor</button>
        <button @click="openAddRoomModal">➕ Add Room</button>
      </div>
    </div>

    <!-- Floors & Rooms -->
    <div v-for="(floor, floorIndex) in floors" :key="floorIndex" class="floor">
      <!-- Floor Header -->
      <div class="floor-header">
        <div class="floor-title" @click="toggleFloor(floorIndex)">
          <h2>Floor {{ floor.name }}</h2>
          <span>{{ floor.expanded ? '▼' : '▶' }}</span>
        </div>

        <div class="floor-actions">
          <button @click="editFloor(floorIndex)">✏️</button>
          <button @click="deleteFloor(floorIndex)">🗑️</button>
        </div>
      </div>

      <!-- Rooms List -->
      <div v-show="floor.expanded" class="rooms-list">
        <button v-for="room in floor.rooms" :key="room.id" class="room-button" @click="navigateToRoom(room.id)">
          {{ room.name }}
        </button>
      </div>
    </div>

    <!-- Add Room Modal -->
    <div v-if="showAddRoomModal" class="modal-overlay">
      <div class="modal">
        <h3>{{ isEdit?'Edit floor':'Add New Room' }}</h3>

        <label>
          Select Floor:
          <select v-model="selectedFloorIndex">
            <option v-for="(floor, index) in floors" :key="index" :value="index">
              Floor {{ floor.name }}
            </option>
          </select>
        </label>

        <label>
          Select Room Number:
          <select v-model="newRoomNumber">
            <option disabled value="">Select Room</option>
            <option v-for="number in availableRoomNumbers" :key="number" :value="number">
              {{ number }}
            </option>
          </select>
        </label>

        <div class="modal-actions">
          <button @click="saveRoom">Save</button>
          <button class="cancel" @click="closeAddRoomModal">Cancel</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
definePageMeta({
  layout: 'mainlayout'
})
const router = useRouter()
const showAddRoomModal = ref(false)
const isEdit = ref(false)
const selectedFloorIndex = ref(0)
const newRoomNumber = ref('')
const availableRoomNumbers = ref([])
const floors = ref([
  {
    name: '1',
    expanded: true,
    rooms: [
      { id: 101, name: 'Room 101' },
      { id: 102, name: 'Room 102' }
    ]
  },
  {
    name: '2',
    expanded: false,
    rooms: [
      { id: 201, name: 'Room 201' },
      { id: 202, name: 'Room 202' }
    ]
  }
])
const toggleFloor = (index) => {
  floors.value[index].expanded = !floors.value[index].expanded
}
const navigateToRoom = (roomId) => {
  router.push(`/rooms/${roomId}`)
}
const addFloor = () => {
  const nextFloor = floors.value.length + 1
  floors.value.push({
    name: `${nextFloor}`,
    expanded: true,
    rooms: []
  })
}
const editFloor = (index) => {
  selectedFloorIndex.value = index
  showAddRoomModal.value = true
  isEdit.value = true
  if (newName) {
    floors.value[index].name = newName
  }
}
const deleteFloor = (index) => {
  if (confirm(`Are you sure you want to delete Floor ${floors.value[index].name}?`)) {
    floors.value.splice(index, 1)
  }
}
// Modal logic
watch(selectedFloorIndex, () => {
  generateAvailableRoomNumbers()
})

const generateAvailableRoomNumbers = () => {
  const floor = floors.value[selectedFloorIndex.value]
  const floorNumber = floor.name
  const existingRoomNumbers = floor.rooms.map(r => r.name)

  // Generate 101 to 130 for Floor 1, 201 to 230 for Floor 2, etc.
  const start = Number(floorNumber) * 100 + 1
  const end = start + 29

  availableRoomNumbers.value = []

  for (let i = start; i <= end; i++) {
    if (!existingRoomNumbers.includes(`Room ${i}`)) {
      availableRoomNumbers.value.push(`Room ${i}`)
    }
  }
}

const saveRoom = () => {
  if (!newRoomNumber.value) {
    alert("Please select a room number.")
    return
  }

  const roomName = `Room ${newRoomNumber.value}`

  floors.value[selectedFloorIndex.value].rooms.push({
    id: Date.now(),
    name: roomName
  })

  closeAddRoomModal()
}

const openAddRoomModal = () => {
  showAddRoomModal.value = true
  selectedFloorIndex.value = 0
  newRoomNumber.value = ''
  generateAvailableRoomNumbers()
}
const closeAddRoomModal = () => {
  showAddRoomModal.value = false
}

</script>

<style scoped>
.rooms-page {
  max-width: 850px;
  margin: 40px auto;
  padding: 25px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.actions button {
  margin-left: 10px;
  padding: 10px 15px;
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.actions button:hover {
  background-color: #1b5e20;
}

.floor {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.floor-header {
  background-color: #f5f5f5;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.floor-title {
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
}

.floor-actions button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-left: 8px;
}

.floor-actions button:hover {
  color: #d32f2f;
}

.rooms-list {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.room-button {
  padding: 10px 18px;
  background-color: #1565C0;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.room-button:hover {
  background-color: #0d47a1;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 25px 30px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.modal h3 {
  margin-bottom: 20px;
}

.modal label {
  display: block;
  margin-bottom: 15px;
  font-weight: bold;
}

.modal input,
.modal select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.modal-actions button {
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.modal-actions button:first-child {
  background-color: #1976d2;
  color: white;
}

.modal-actions .cancel {
  background-color: #ccc;
}
</style>