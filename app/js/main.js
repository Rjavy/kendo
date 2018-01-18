$(document).ready(function() {

    var  items =[
      {
        "Id":"878637-010",
        "Name":"ZOOM KD 9 ELITE HYPER ORANGE",
        "Category":"Basketball",
        "Stock":15,
        "Price":2899.00,
        "Availability":true
      },
      {
        "Id":"852405-004",
        "Name":"LEBRON XIV",
        "Category":"Basketball",
        "Stock":10,
        "Price":3699.00,
        "Availability":true
      },
      {
        "Id":"881465-120",
        "Name":"JORDAN FORMULA 23",
        "Category":"Basketball",
        "Stock":5,
        "Price":2399.00,
        "Availability":true
      },
      {
        "Id":"852422-601",
        "Name":"ZOOM REV 2017",
        "Category":"Basketball",
        "Stock":0,
        "Price":1999.00,
        "Availability":false
      },
      {
        "Id":"852473-600",
        "Name":"MAMBA INSTINCT",
        "Category":"Basketball",
        "Stock":0,
        "Price":1799.00,
        "Availability":false
      },
      {
        "Id":"917391-010",
        "Name":"PLAYERA DRY KD",
        "Category":"Shirts",
        "Stock":20,
        "Price":549,
        "Availability":true
      },
      {
        "Id":"843130-477",
        "Name":"PLAYERA AIR JORDAN 23",
        "Category":"Shirts",
        "Stock":40,
        "Price":549.00,
        "Availability":true
      },
      {
        "Id":"831348-100",
        "Name":"SHORT ULTIMATE FLIGHT",
        "Category":"Shorts",
        "Stock":10,
        "Price":899.00,
        "Availability":true
      },
      {
        "Id":"836277-457",
        "Name":"SHORT FT GX FRANCHISE",
        "Category":"Shorts",
        "Stock":10,
        "Price":849,
        "Availability":true
      },
      {
        "Id":"1281295-002",
        "Name":"SHORT SC30 TOP GUN",
        "Category":"Shorts",
        "Stock":5,
        "Price":799,
        "Availability":true,

      }
    ];

    var dataSource = new kendo.data.DataSource({
        data: items,
    });

    var listView = $("#listView").kendoListView({
        dataSource: dataSource,
        template: kendo.template($("#items-template").html())
    }).data("kendoListView");

    //init kendo button to use disabled options in the view;

    //stock validation 
    $('.stock').on('change', function (event) {
        //Get the current value in the input
        var stock = parseInt(this.value);
        if (stock === 0) {
            messages("error",  "Cannot delete more items, the stock is currently 0");
        } else {
            messages("success",  "Item stock increase!");
        }
    });

   //Try to add to car 
    $('.addToCar').on('click', function () {

        var canAdd = (this.getAttribute('item-availability') === "true");
        var stock = this.getAttribute('item-stock');

        if (!canAdd) {
            messages('error',  'Items in not available');
            return;
        } else {
            messages('error', 'Item added is not implemented yet :(')
        }

    });
    //function to display messages
    function messages(type, message) {
        if (type === 'success') {
            alertify.success(message);
        } else {
            alertify.error(message);
        }
    }
});

