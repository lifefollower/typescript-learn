//  引入一个包
const path = require('path')
//  引入HTML插件
const HTMLWebpackPugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//  webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    //  指定入口文件
    entry: "./src/index.ts",

    //  指定打包文件所在目录
    output: {
        //  指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //  打包后的文件名
        filename: "bundle.js",
        environment:{
            arrowFunction:false
        }
    },

    //  指定webpack打包时要使用的模块
    module: {
        //  指定要加载的规则
        rules: [{
            //  test指定的是规则生效的文件
            test: /\.ts$/,
            //  要使用的loader
            use: [
                //  配置Babel
                {
                    //  指定加载器
                    loader:"babel-loader",
                    //  设置Babel
                    options:{
                        //  设置预定义的环境
                        presets:[
                            [
                                //  指定环境的插件
                                "@babel/preset-env",
                                //  配置信息
                                {
                                    //  要兼容的目标浏览器
                                    targets:{
                                        "chrome":"58"
                                    },
                                    "corejs":"3",
                                    "useBuiltIns":"usage"
                                }
                            ]
                        ]
                    }
                },
                "ts-loader"
            ],
            //  要排除的文件
            exclude: /node_modules/
        },

        //  设置less文件的处理
        {
            test:/\.less$/,
            use:[
                "style-loader",
                "css-loader",
                {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers:'last 2 versions'
                                    }
                                ]
                            ]
                        }
                    }
                },
                "less-loader"
            ]
        }  

        ]
    },

    //  配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPugin({
            template:"./src/index.html"
        }),
    ],

    //  用来设置引用的模块
    resolve:{
        extensions:['.ts','.js']
    }
}