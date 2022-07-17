

/**
 * 控制台 tsc 命令不指定文件时 会根据配置文件进行编译
 *
 *
 * 配置文件 [tsconfig.json]  [https://www.tslang.cn/docs/handbook/tsconfig-json.html]
 *  去除注释  removeComments: true
 *  只编译的文件 include: ["./8.hot.js"]
 *  排除编译文件 exclude: []
 *  输出目录 outDir: "./build"
 *  编译根目录 rootDir: "./"
 */
const san: string = 'hot'
