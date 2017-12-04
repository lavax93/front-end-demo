[JSDoc文档](http://www.jianshu.com/p/b86cc11112bd)

# 安装JSDoc 

       npm i jsdoc -g    
          
# JSDoc命令行参数

       -c, --configure 指定configuration file
       -d, --destination 指定输出路径，默认./out
       -e, --encoding 设定encoding，默认utf8
       -p, --private 将private注释输出到文档，默认不输出
       -P, --package 指定package.json file
       -r, --recurse 查询子目录
       -t, --template 指定输出文档template
       -u, --tutorials 指定教程路径，默认无 
       
# JSDoc配置文件

       {
           "tags": {
               "allowUnknownTags": true, // 允许使用自定义tag
               "dictionaries": ["jsdoc","closure"] // 定义tag集
           },
           "source": {
               "includePattern": ".+\\.js(doc)?$", // 将以.js, .jsdoc结尾的文件作为源文件
               "excludePattern": "(^|\\/|\\\\)_" // 忽略以_开头的文件夹及文件
           },
           "plugins": [],
           "templates": {
               "cleverLinks": false,
               "monospaceLinks": false
           }
       }
# Tags

       JSDoc中将tag分为两类，Block tag和Inline tag。
       Block tag: 在JSDoc中是最高级别的注释，通常用来提供代码的详细信息。它以@开头，除了位于注释最后的Block                 tag，其他Block tag必须紧跟换行符
       Inline tag: 通常是Block tag的文字内容或描述，它用一对{}包裹。
       