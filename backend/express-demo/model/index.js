import mongoose from "mongoose";

async function main() {
    await mongoose.connect("mongodb://localhost:27017/todoList");
}

main()
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error)
    });

const todo = mongoose.model("Todo", todoSchema)
export default todo;