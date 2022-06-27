const path = require('path')
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js', // 入口
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径 绝对路径
    filename: 'main.js', // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      filename: 'index.html', // 生成文件的名称
    }),
    new CleanWebpackPlugin(), // 删除的是ouput path 里配置的那个输出文件的文件夹// 默认情况下dist
  ],
  devServer: {
    port: 3000, // 端口号
    open: true,
  },
  module: {
    // loader 加载器 配置在这儿
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // loader 执行的顺序： use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/, // 匹配执行类型的文件
        // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
        // 执行的顺序 less-loader css-loader style-loader
        // less-loader 先把less代码转换成css
        // css-loader 再把css代码转换成webpack 可以识别的js代码
        // style-loader 在把css代码插入到 dom中
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        // 图片文件的配置(仅适用于webpack5版本)
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset', // 在导出一个 data URI 和发送一个单独的文件之间自动选择
        parser: {
          // 解析器 规则
          dataUrlCondition: {
            // dataUrl的情况
            maxSize: 10 * 1024,
            // maxSize 限制最大值
          },
        },
        generator: {
          //生成器：对直接复制过去的图片名字长度进行处理
          filename: '[hash:6][ext]', //资源文件处理之后 输出的文件名 ext文件扩展名
        },
      },
      {
        // 字体图标 不配置也可以  css loader 也会处理的
        test: /\.(eot|svg|ttf|woff|woff2)$/, // 匹配所有的字体图标的文件
        type: 'asset', // 文件直接输出
        generator: {
          // 生产器
          filename: 'font-[name].[hash:6][ext]',
        },
        parser: {
          // 解析器 规则
          dataUrlCondition: {
            // dataUrl的情况
            maxSize: 1 * 1024,
            // maxSize 限制最大值
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
            }
        }
    }
    ],
  },
}
