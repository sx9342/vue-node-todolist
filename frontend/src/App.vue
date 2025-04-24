<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const list = ref([])
const value = ref('')

async function getList() {
  const res = await axios.get('/todos') // 路径修正
  list.value = res.data
}

async function add() {
  if (!value.value.trim()) return
  
  try {
    await axios.post('/todos', {
      value: value.value,
      isCompleted: false
    })
    await getList()
    value.value = ''
  } catch (error) {
    console.error('添加失败:', error.response?.data || error.message)
    alert('添加失败，请检查控制台')
  }
}

async function update(id) {
  try {
    // 获取当前待办项的索引
    const index = list.value.findIndex(item => item._id === id)
    if (index === -1) return

    // 创建新对象保持响应性
    const updatedItem = {
      ...list.value[index],
      isCompleted: !list.value[index].isCompleted
    }

    // 发送更新请求
    const { data } = await axios.put(`/todos/${id}`, {
      isCompleted: updatedItem.isCompleted
    })

    // 直接更新本地数据
    list.value.splice(index, 1, data)
  } catch (error) {
    console.error('更新失败:', error.response?.data || error.message)
    alert('状态更新失败')
  }
}

async function del(id) {
  await axios.delete(`/todos/${id}`) // 路径修正
  getList()
}
</script>
<template>
  <div class="todo-app">
    <div class="title">Todo App</div>

    <div class="todo-form">
      <input
        v-model="value"
        type="text"
        class="todo-input"
        placeholder="Add a todo"
      />
      <div @click="add" class="todo-button">Add Todo</div>
    </div>

    <div
      v-for="(item, index) in list"
      :class="[item.isCompleted ? 'completed' : 'item']"
    >
      <div>
        <input
          @click="update(item._id)"
          v-model="item.isCompleted"
          type="checkbox"
        />
        <span class="name">{{ item.value }}</span>
      </div>

      <div @click="del(item._id)" class="del">del</div>
    </div>
  </div>
</template>

<style scoped>
.todo-app {
  box-sizing: border-box;
  margin-top: 40px;
  margin-left: 1%;
  padding-top: 30px;
  width: 98%;
  height: 500px;
  background: #ffffff;
  border-radius: 5px;
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}

.todo-form {
  display: flex;
  margin: 20px 0 30px 20px;
}

.todo-button {
  width: 100px;
  height: 52px;
  border-radius: 0 20px 20px 0;

  text-align: center;
  background: linear-gradient(
    to right,
    rgb(113, 65, 168),
    rgba(44, 114, 251, 1)
  );
  color: #fff;
  line-height: 52px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
}

.todo-input {
  padding: 0px 15px 0px 15px;
  border-radius: 20px 0 0 20px;
  border: 1px solid #dfe1e5;
  outline: none;
  width: 60%;
  height: 50px;
}

.item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
}

.del {
  color: red;
}

.completed {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
  text-decoration: line-through;
  opacity: 0.4;
}
</style>
