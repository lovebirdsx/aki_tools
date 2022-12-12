# Aki相关的工具

## UpdateUeType.bat

可以将所有UE的声明文件合并成一个
从而可以方便进行ts-watch的操作

注意,需要将Perforce上的Typing目录克隆至此目录
`git p4 clone //aki/development/Source/Client/TypeScript/Typing/`

## 针对编辑器代码watch的方法

- 在Aki的Source/Client/TypeScript目录下新建Tool目录
- 拷贝以下四个文件到该目录
    - Watch.bat
    - send_editor_command.js
    - package.json
    - on_watch_success.bat
- 运行Source/Client/TypeScript/Tool/Watch.bat
