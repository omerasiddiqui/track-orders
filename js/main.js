var sourceSystem = $("#sourceSystem"),
    orderNumber = $("#orderNumber"),
    submitBtn = $("#submitBtn"),
    modalWindow = $("#modalWindow"),
    modalOpen = $("#moreDetailsBtn"),
    modalClose = $("#modal-close"),
    deleteRow = $(".deleteRow"),
    addRow = $(".addRow");

    const addInputRow = () => {
        var item = `<li id="1" class="moreInfo" style="display: flex; justify-content: center; margin-top: 3px"><div class="add-delete"><button class="deleteRow"><img src="assets/delete-icon.png" alt="delete button"></button><button class="addRow"><img src="assets/add-icon.png" alt="add button"></button></div><select name="product"id="product"><option value="test1">test1</option><option value="test2">test2</option><option value="test3">test3</option><option value="test4">test4</option></select><select name="bandwidth"id="bandwidth"><option value="MBPS">MBPS</option><option value="GBPS">GBPS</option></select><select name="activity"id="activity"><option value="new">New</option><option value="change">Change</option><option value="modify">Modify</option></select><select name="onNet"id="onNet"><option value="onNet">On Net</option><option value="offNet">Off Net</option></select><div id="wiringCheckbox"><input type="checkbox"id="insideWiring"name="insideWiring"value="insideWiring"><label for="subscribeNews">Inside wiring?</label></div></li></ul>`;
        $(".additionalInputs").append(item);
    }

    $(".additionalInputs").on("click", "li .deleteRow", function(e) {
        e.stopPropagation();
        $(this).parent().parent().addClass("animated fadeOutLeft").fadeOut("slow");
    })

    let id = 2;

    $(".additionalInputs").on("click", "li .addRow", function(e) {
        e.stopPropagation();
        var item = `<li id=${id} class="moreInfo animated fadeInDown" style="display: flex; justify-content: center; margin-top: 3px"><div class="add-delete"><button class="deleteRow"><img src="assets/delete-icon.png"alt="delete button"></button><button class="addRow"><img src="assets/add-icon.png"alt="add button"></button></div><select name="product"id="product"><option value="test1">test1</option><option value="test2">test2</option><option value="test3">test3</option><option value="test4">test4</option></select><select name="bandwidth"id="bandwidth"><option value="MBPS">MBPS</option><option value="GBPS">GBPS</option></select><select name="activity"id="activity"><option value="new">New</option><option value="change">Change</option><option value="modify">Modify</option></select><select name="onNet"id="onNet"><option value="onNet">On Net</option><option value="offNet">Off Net</option></select><div id="wiringCheckbox"><input type="checkbox"id="insideWiring"name="insideWiring"value="insideWiring"><label for="subscribeNews">Inside wiring?</label></div></li></ul>`;
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


