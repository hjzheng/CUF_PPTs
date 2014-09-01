(function(window,undefined){
    var hello = 123;

    var helloTest = function(){
        console.log('test');
    };
    window.test2 = {
        hello:hello,
        helloTest222:helloTest
    }

})(window)

