/**满减活动,优惠政策价格处理 **/
function manjianF(price){
	if(manjian === undefined || manjian.length == 0){
        return;
    }
	//循环判断
	var product_discounts = 0;
    //循环匹配
    for(var i in manjian){
    	if(price >= manjian[i].sprice && price <= manjian[i].price){
    		product_discounts = manjian[i].discount_price;
    	}
    	break;
    }

    if(product_discounts > 0 ){
       $("input[name='product_disaccounts']").val(product_discounts);  
    }
}

//商城运费收取
function freightF(price){
    if(website_freight === undefined || website_freight.length == 0){
        return;
    }
    //循环判断
    var freight = 0;
    //循环匹配
    for(var i in website_freight){
        if(price >= website_freight[i].sprice && price <= website_freight[i].price){
            freight = website_freight[i].discount_price;
        }
        break;
    }

    if(freight > 0 ){
       $("input[name='freight']").val(freight);  
    }
}
