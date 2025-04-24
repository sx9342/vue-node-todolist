
import app from './app.js'; // 添加扩展名
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`服务运行在 http://localhost:${PORT}`);
});