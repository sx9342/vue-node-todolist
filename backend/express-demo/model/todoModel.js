import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    value: {
        type: String,
        required: [true, "待办事项不能为空"],
        trim: true //去除首尾空格
    },
    isCompleted: {
        type: Boolean,
        default: false //默认未完成
    },
    createdAt: {
        type: Date,
        default: Date.now //默认当前时间
    }
})

todoSchema.index({ createdAt: -1, isCompleted: 1 });

export default mongoose.model("Todo", todoSchema);