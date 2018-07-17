$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented
        $("#button").click(function(){
            console.log($("input.input-text").val());
            if($("input.input-text").val()){
                $("ol").append (`<li id=${generateUUID()} class=""><input name="done-todo" type="checkbox" class="done-todo"> ${$("input.input-text").val()} </li>`);
            }
            $("input.input-text").val("");
        })

        $("ol").on("click","li",function(){
            let currentClass = $(this).attr("class");
            //alert(currentClass);
            if(currentClass == "checked"){
                $(this).removeClass();
            }else {
                $(this).addClass("checked");
            }
            console.log(currentClass);
        })

        $("filters a").click(function(){
            console.log(234);
        })


    });



    /**
     * 
jQuery 元素选择器

jQuery 使用 CSS 选择器来选取 HTML 元素。

$("p") 选取 <p> 元素。

$("p.intro") 选取所有 class="intro" 的 <p> 元素。

$("p#demo") 选取所有 id="demo" 的 <p> 元素。



jQuery 属性选择器

jQuery 使用 XPath 表达式来选择带有给定属性的元素。

$("[href]") 选取所有带有 href 属性的元素。

$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。

$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。

$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。


$("p").css("background-color","red");
     */

    // function getAll(){
    //     //alert("getAll");
    //     //$("#todoList :checkbox").prop("checked", true);
       
    // }

    // function getActive(){
    //     $("p.checked").hide();
    //     //$("#todoList :checkbox[checked]").parent.hide;
    //     //alert("getActive");
    // }

    // function getComplete(){

    //     alert("getComplete");
    // }

    