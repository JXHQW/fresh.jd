$(function(){
    // 全选状态
    $(".toggle-checkboxes_up").click(function(){
        if($(this).is(':checked'))
        {
            $(".cart-item-check input").attr("checked",true);
            
        }else{
            $(".cart-item-check input").attr("checked",false);
        }
    });
    $(".cart-list").on("click",".increment",function(){
        
        let txtNum = $(".itxt-num").val();
        txtNum++
        $(".itxt-num").val(txtNum);
    });
    $(".cart-list").on("click",".decrement",function(){
        let txtNum = $(".itxt-num").val();
        if(txtNum == 1){
            txtNum = 1;
            $(".decrement").css("cursor","no-drop");
         }else{
            txtNum--
            $(".itxt-num").val(txtNum);
            $(".decrement").css("cursor","pointer");
         }
       
        
        
    });
})