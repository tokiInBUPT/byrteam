module.exports = {
    publicPath: './',
    chainWebpack:config =>{
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '北邮人团队'
                return args;
            })
    }
}