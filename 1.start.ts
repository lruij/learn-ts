
/**
 * > 运行前准备
 * npm install -g typescript
 * npm install -g ts-node
 * PS: ts-node version > 8.5.4 ? npm install -g tslib @types/node
 *
 * > 运行命令
 * 分解运行：tsc 文件名.ts & node 文件名.js
 * 合并运行：ts-node 文件名.ts
 *
 * > 生成配置文件 tsconfig.json
 *  tsc --init
 */

const a: number = 1

console.log(a);
