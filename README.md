# 🚀 Vue3-Express-TodoList

一个基于 Vue3 前端 + Express 后端 + MongoDB 的全栈待办事项管理应用，支持任务增删改查和状态管理。



## 🌟 功能特性
- **任务管理**  
  ✅ 添加/删除任务  
  ✅ 标记任务完成状态  
  ✅ 编辑任务内容  
  ✅ 任务状态持久化存储

- **技术栈**  
  **前端**：Vue3 + Vite + Axios  
  **后端**：Express.js + MongoDB + CORS  
  **工具链**：Node.js + npm

## 🛠️ 快速启动

### 前置条件
- Node.js ≥ 16.x
- MongoDB ≥ 5.x (本地或 Atlas 云服务)

### 后端服务配置
```bash
# 进入后端目录
cd backend/express-demo

# 安装依赖
npm install express mongoose cors dotenv

# 创建环境文件
echo "PORT=3000
MONGODB_URI=mongodb://localhost:27017/todolist" > .env

# 启动服务
node app.js
```

### 前端服务配置
```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器（默认端口 5173）
npm run dev
```

## 📂 项目结构
```text
vue-node-todolist/
├── frontend/              # 前端应用
│   ├── src/
│   │   └── App.vue       # 主组件（含业务逻辑）
│   └── package.json      # 前端依赖
└── backend/
    └── express-demo/     # 后端服务
        ├── routes/       # API 路由
        ├── app.js        # Express 主程序
        └── package.json  # 后端依赖
```

## 📄 接口文档
```markdown
### Todo 相关接口
| 方法   | 路径          | 功能         |
|--------|---------------|--------------|
| GET    | /todos        | 获取所有任务 |
| POST   | /todos        | 创建新任务   |
| PUT    | /todos/:id    | 更新任务状态 |
| DELETE | /todos/:id    | 删除任务     |

请求示例：
```json
// POST /todos
{
  "value": "Buy milk",
  "isCompleted": false
}
```

## 🔧 数据库配置
1. 安装 MongoDB 社区版
2. 启动 MongoDB 服务：
```bash
mongod --dbpath=/data/db
```
3. 在 `.env` 文件中配置连接字符串：
```env
MONGODB_URI=mongodb://localhost:27017/todolist
```

## 🚨 常见问题
1. **CORS 错误**：确保后端已启用 cors 中间件
2. **数据库连接失败**：检查 MongoDB 服务状态和连接字符串
3. **端口冲突**：修改 `.env` 中的 PORT 配置

## 📄 License
MIT © [Your Name]
```

---

### 补充建议：
1. 在 `backend/express-demo` 中创建 `db` 目录存放 MongoDB 连接逻辑
2. 添加数据模型示例：
```javascript
// models/Todo.js
import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  value: String,
  isCompleted: Boolean
});

export default mongoose.model('Todo', TodoSchema);
```
