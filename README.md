# Easy Lite Minecraft Launcher

基于 Electron+Vue+TypeScript（`electron-vite` 模板） 的 MC 启动器！目前处于早期开发阶段，还没有启动游戏的功能。<small>（学生党，只能周末做了啊555）</small>

## TODO

- 实现 Minecraft 周边资源获取、下载
- Java 环境配置
- Java 进程守护
- 离线登录、皮肤站登录
- 多档案管理
- 启动游戏
- 设置界面
- 模组加载器安装
- 模组、资源包等安装
- 游戏管理
- 存档、模组等内容嗅探
- 启动器自制成就系统
- 成就嗅探

**以下是幻想时刻：**
- 云账户
- 游戏账户数据同步、游戏实例同步还原
- 聊天室、好友系统
- 联机

## IDE 设置

本人实际使用 `Jetbrains WebStorm` 进行开发，但模板推荐的开发环境是 [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## 参与贡献

### 初始化项目

```bash
$ yarn
```

### 启动调试模式（代码热更新）

```bash
$ yarn dev
```

### 构建打包

```bash
# windows
$ yarn build:win

# macOS
$ yarn build:mac

# Linux
$ yarn build:linux
```
