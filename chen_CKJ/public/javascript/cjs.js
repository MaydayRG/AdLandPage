~(function(){
    if( window.Cjs ){ console.error('命名空间冲突, window.Cjs'); return false; }
    var Cjs = {}
    window.Cjs = Cjs;
})();

// url extend

Cjs.url = function(){
    var that = this;
    this.getParamByName = function(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
    this.getParams = function(names){
        if( !names.isArray() ){ return null; }
        var value = {};
        names.map(function(key, idx){
            value[key] = that.getParamByName(names[idx]);
        });
        return value;
    }
    return this;
}();