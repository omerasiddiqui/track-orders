var sourceSystem = $("#sourceSystem"),
    orderNumber = $("#orderNumber"),
    submitBtn = $("#submitBtn"),
    modalWindow = $("#modalWindow"),
    modalOpen = $("#moreDetailsBtn"),
    modalClose = $("#modal-close"),
    deleteRow = $(".deleteRow"),
    addRow = $(".addRow");

    var item = `<div class="moreInfo" style="display: flex; justify-content: center; margin-top: 3px"><div class="add-delete"><button onclick="deleteInputRow();" class="deleteRow"><img src="assets/delete-icon.png" alt="delete button"></button><button onclick="addInputRow()" class="addRow"><img src="assets/add-icon.png" alt="add button"></button></div><input type="text"><input type="text"><input type="text"><input type="submit"></div>`;

    const addInputRow = () => $(".additionalInputs").append(item); 

    const deleteInputRow = () =>{
        $(this).parent().parent().remove();
        console.log(this)
    }


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
            if(!($(this).val() == 'supported')) {
              $('.additionalInputs').append(item);
            }
        });

        // $(".additionalInputs").on("click", $("button .deleteRow"), function(e) {
        //     console.log(e.target);
        //     console.log($(this).children())
        //     console.log($(this).children().last())

        //     $(this).children().last().remove()

        // })
            
    })


    //  if ($(event.target).is('img.theater')){
    //      event.stopPropagation();
    //      return;
    // }
    // $('.theater-wrapper').hide();