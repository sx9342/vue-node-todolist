// routes/todoRoutes.js
import express from "express";
const router = express.Router();

// 示例数据存储（正式项目需连接数据库）
let todos = [];



// GET /todos - 获取所有待办
router.get("/", (req, res) => {
  res.json(todos);
});

// POST /todos - 创建待办
// routes/todoRoutes.js
router.post('/', (req, res) => {
  // 必须有此处理逻辑
  const newTodo = {
    _id: Date.now().toString(),
    value: req.body.value,
    isCompleted: false
  }
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

// PUT /todos/:id - 更新待办状态
router.put("/:id", (req, res) => {
  const todo = todos.find((t) => t._id === req.params.id);
  if (todo) {
    todo.isCompleted = req.body.isCompleted;
    res.json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

// DELETE /todos/:id - 删除待办
router.delete("/:id", (req, res) => {
  const index = todos.findIndex((t) => t._id === req.params.id);
  if (index >= 0) {
    todos.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send("Todo not found");
  }
});

export default router;
