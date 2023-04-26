 var addCart_ = 1,AddPaymentInfo_=1,InitiateCheckout_=1,Purchase_=1;
 
function addCartEvent(){
    if(addCart_ <= 0){
        return false;
    }
    fbq('track', 'AddToCart');
    addCart_--;
}
 
function AddPaymentInfo(){
    if(AddPaymentInfo_ <= 0){
        return false;
    }
    fbq('track', 'AddPaymentInfo');
    AddPaymentInfo_--;
}
 
function InitiateCheckout(){
    if(InitiateCheckout_ <= 0){
        return false;
    }
    fbq('track', 'InitiateCheckout');
    InitiateCheckout_--;
}
 
function Purchase(value,currency){
    if(Purchase_ <= 0){
        return false;
    }
    fbq('track', 'Purchase',
        {
            value: value,
            currency: currency,
        });
    Purchase_--;
}
 
function ViewContent(){
    fbq('track', 'ViewContent');
}


//偏远地区运费
function zone_freight(){
    if(further_zone === undefined || further_zone.length == 0){
        return;
    }

    var zone_state='',zone_city='',zone_dis='',zone_address='';
    //一级的下拉选择框
    if($("select[name='city']:visible").length > 0){
        zone_city = $("select[name='city']:visible option:selected").html();
    };
    //二级的下拉选择框
    if($("select[name='district']:visible").length > 0){
        zone_dis = $("select[name='district']:visible option:selected").html();
    };

    //要匹配的字符串
    match_str = zone_city + zone_dis;
    var has_freight = false;
    //循环匹配
    for(var i in further_zone){
        if(match_str.indexOf(further_zone[i].zone) != -1){
            has_freight = true;
            break;
        }
    }

    if(has_freight === true){
       $("input[name='zone_freight']").val(further_zone_freight);      
    }else{
       $("input[name='zone_freight']").val(0);
    }

}