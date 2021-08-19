$.ajaxPrefilter(function (options) {
    // console.log(options.url);
    options.url='http://ajax.fronted.itheima.net'+options.url
})