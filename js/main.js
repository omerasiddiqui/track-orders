var sourceSystem = $("#sourceSystem"),
    orderNumber = $("#orderNumber"),
    submitBtn = $("#submitBtn"),
    modalWindow = $("#modalWindow"),
    modalOpen = $("#moreDetailsBtn"),
    modalClose = $("#modal-close"),
    additionalInputs = $(".additionalInputs"),
    deleteRow = $(".deleteRow"),
    addRow = $(".addRow");

    // to add the first row with an ID of 1
    const addInputRow = () => {
        var item = `<li id="1" class="moreInfo" style="display: flex; justify-content: center; margin-top: 3px">
        <div class="add-delete"><button class="deleteRow"><img src="assets/delete-icon.png" alt="delete button"></button><button
                class="addRow"><img src="assets/add-icon.png" alt="add button"></button></div>
        <div class="additionalInputsTopRow">
            <div class="inputItem">
                <label for="product">Product: </label>
                <select name="product" id="product">
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                    <option value="test4">test4</option>
                </select>
            </div>
            <div class="inputItem">
                <label for="bandwidth">Bandwidth: </label>
                <select name="bandwidth" id="bandwidth">
                    <option value="MBPS">MBPS</option>
                    <option value="GBPS">GBPS</option>
                </select>
            </div>
        </div>
        <div class="additionalInputsBottomRow">
            <div class="inputItem">
                <label for="activity">Activity: </label>
                <select name="activity" id="activity">
                    <option value="new">New</option>
                    <option value="change">Change</option>
                    <option value="modify">Modify</option>
                </select>
            </div>
            <div class="inputItem">
                <label for="net">Net: </label>
                <select name="onNet" id="onNet">
                    <option value="onNet">On Net</option>
                    <option value="offNet">Off Net</option>
                </select>
            </div>
        </div>
        <div id="wiringCheckbox"><input type="checkbox" id="insideWiring" name="insideWiring" value="insideWiring"><label
                for="subscribeNews">Inside wiring?</label></div>
        <h4 class="locationId">Location #1</h4>
    </li>`;
        additionalInputs.append(item);
    }

    // to delete individual rows of additional inputs
    additionalInputs.on("click", "li .deleteRow", function(e) {
        e.stopPropagation();
        $(this).parent().parent().addClass("animated fadeOutLeft").fadeOut("slow");
    })

    

    // to add additional rows with incrementing numbers for each row's ID
    let id = 2;

    additionalInputs.on("click", "li .addRow", function(e) {
        e.stopPropagation();
        var item = `<li id=${id} class="moreInfo animated fadeInDown" style="display: flex; justify-content: center; margin-top: 3px">
        <div class="add-delete"><button class="deleteRow"><img src="assets/delete-icon.png" alt="delete button"></button><button
                class="addRow"><img src="assets/add-icon.png" alt="add button"></button></div>
        <div class="additionalInputsTopRow">
            <div class="inputItem">
                <label for="product">Product: </label>
                <select name="product" id="product">
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                    <option value="test4">test4</option>
                </select>
            </div>
            <div class="inputItem">
                <label for="bandwidth">Bandwidth: </label>
                <select name="bandwidth" id="bandwidth">
                    <option value="MBPS">MBPS</option>
                    <option value="GBPS">GBPS</option>
                </select>
            </div>
        </div>
        <div class="additionalInputsBottomRow">
            <div class="inputItem">
                <label for="activity">Activity: </label>
                <select name="activity" id="activity">
                    <option value="new">New</option>
                    <option value="change">Change</option>
                    <option value="modify">Modify</option>
                </select>
            </div>
            <div class="inputItem">
                <label for="net">Net: </label>
                <select name="onNet" id="onNet">
                    <option value="onNet">On Net</option>
                    <option value="offNet">Off Net</option>
                </select>
            </div>
        </div>
        <div id="wiringCheckbox"><input type="checkbox" id="insideWiring" name="insideWiring" value="insideWiring"><label
                for="subscribeNews">Inside wiring?</label></div>
        <h4 class="locationId">Location #${id}</h4>
    </li>`;
        additionalInputs.append(item);
        id++;
    })




    //   document ready
    $(document).ready(function() {

        // more details pop up
        modalWindow.hide();

        modalOpen.on("click", function() {
            modalWindow.show();
        })

        modalClose.on("click", function() {
            modalWindow.hide();
        })


        // if source system is not supported, provide additional fields
        sourceSystem.change(function(){
            if(!($(this).val() == 'supported' || $(this).val() == "")) {
              addInputRow();
              additionalInputs.css("border", "1px solid rebeccapurple");
              // System Message is error message
              $("#systemMessage").text("Order Not Available").css("color", "red");
            }
        });

        // if source system is supported or empty, empty additional inputs field
        sourceSystem.change(function(){
            if(($(this).val() == 'supported' || $(this).val() == "")) {
              $("#systemMessage").text("Order Found").css("color", "green");
              additionalInputs.empty();
            }
        });
            
    })


