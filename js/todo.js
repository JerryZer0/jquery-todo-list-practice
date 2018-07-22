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

        const todoList = [];
        let todoListfilterType = "all"

        const buildTodoItem = (element) => `<li id=${element.id} class="${element.complete ? "checked" : ""}">
        <input name="done-todo" ${element.complete ? "checked" : ""}  type="checkbox" class="done-todo"> ${element.name} </li>`

        $("#button").click(function () {
            //console.log($("input.input-text").val());
            add()
        })

        function add() {
            const inputText = $("input.input-text").val()
            if (inputText) {
                todoList.push({ id: generateUUID(), name: inputText, complete: false })
            }
            renderTodoList();
            $("input.input-text").val("");
        }

        function renderTodoList() {
            const filterExecute = (element) => [
                {
                    filter: "all",
                    return: true
                }, {
                    filter: "active",
                    return: !element.complete
                }, {
                    filter: "complete",
                    return: element.complete
                }
            ].find(element => element.filter === todoListfilterType).return;
            const newHtml = todoList.filter(filterExecute).map(element => buildTodoItem(element))
                .reduce((element1, element2) => element1 + element2, "");
            $("ol").html(newHtml);
        }

        $("input.input-text").keyup(function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                add();
            }
        })

        $(document).on("click", "input.done-todo", function (event) {

            //let currentClass = $(this).attr("class");
            //console.log(currentClass);
            //console.log($(this).parent().attr("class"))
            $(this).parent().toggleClass("checked")
            todoList.find(element => element.id === $(this).parent()[0].id).complete = $(this).parent().hasClass("checked")
            //console.log(currentClass);
            renderTodoList()
        })

        $("#filters li a").click(function (event) {
            //console.log("sadf")
            event.preventDefault()
            const filterType = $(this).data("filter");
            todoListfilterType = filterType
            renderTodoList()
            $("#filters li a ").parent().removeClass("checked")
            //console.log( $("#filters li a "))
            $(this).addClass("checked")
        })
        $(document).on("click", "input.done-todo", function () {
            $(this).parent().toggleClass("checked")
        })

        $(document).on("dblclick", "li", function () {
            // console.log(4543534)
            $(this).attr("contentEditable", "true").focus().keypress(function (event) {
                console.log(111111)
                let keyCode = (event.keyCode ? event.keyCode : event.which)
                
                if (keyCode === 13) {
                    // console.log("getEnter")
                    // console.log("keyCode="+keyCode)
                    event.target.blur()
                    // console.log(222222)
                    $(this).attr("contentEditable", "false")
                    todoList.find(element => element.id === $(this)[0].id).name = $(this).text()
                }
            })
        })

    });


