var sourceSystem = $("#sourceSystem"),
    orderNumber = $("#orderNumber"),
    submitBtn = $("#submitBtn"),
    modalWindow = $("#modalWindow"),
    modalOpen = $("#moreDetailsBtn"),
    modalClose = $("#modal-close"),
    deleteRow = $(".deleteRow"),
    addRow = $(".addRow");

    const addInputRow = () => {
        var item = `<li id="1" class="moreInfo" style="display: flex; justify-content: center; margin-top: 3px"><div class="add-delete"><button class="deleteRow"><img src="assets/delete-icon.png" alt="delete button"></button><button class="addRow"><img src="assets/add-icon.png" alt="add button"></button></div><input placeholder="City" type="text"><input placeholder="State" type="text"><input placeholder="Location ID" type="text"><input type="submit"></li>`;
        $(".additionalInputs").append(item);
    }

    $(".additionalInputs").on("click", "li .deleteRow", function(e) {
        e.stopPropagation();
        $(this).parent().parent().addClass("animated fadeOutLeft").fadeOut("slow");
    })

    let id = 2;

    $(".additionalInputs").on("click", "li .addRow", function(e) {
        e.stopPropagation();
        var item = `<li id=${id} class="moreInfo animated fadeInDown" style="display: flex; justify-content: center; margin-top: 3px"><div class="add-delete"><button class="deleteRow"><img src="assets/delete-icon.png" alt="delete button"></button><button class="addRow"><img src="assets/add-icon.png" alt="add button"></button></div><input placeholder="City" type="text"><input placeholder="State" type="text"><input placeholder="Location ID" type="text"><input type="submit"></li>`;
        $(".additionalInputs").append(item);
        id++;
    })




    //   document ready
    $(document).ready(function() {

        modalWindow.hide();

        modalOpen.on("click", function() {
            modalWindow.show();
        })

        modalClose.on("click", function() {
            modalWindow.hide();
        })

        sourceSystem.change(function(){
            if(!($(this).val() == 'supported' || $(this).val() == "")) {
              addInputRow();
              $("#systemMessage").text("Order Not Available").css("color", "red");
            }
        });

        sourceSystem.change(function(){
            if(($(this).val() == 'supported' || $(this).val() == "")) {
              $("#systemMessage").text("Order Found").css("color", "green");
              $(".additionalInputs").empty();
            }
        });
            
    })