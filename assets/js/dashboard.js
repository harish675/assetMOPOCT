$(document).ready(function () {
    // Delete Selected Records
    $("#deleteSelected").click(function () {
        var selectedRecords = [];

  
        $(".record-checkbox:checked").each(function () {
            selectedRecords.push($(this).val());
        });

        if (selectedRecords.length === 0) {
            alert("Select at least one record to delete.");
        } else {
          
            $.ajax({
                type: "POST",
                url: "/user/record/delete-many", 
                data: { recordIds: selectedRecords },
                success: function (response) {
                  
                    alert(response.message);
                    
                    location.reload(); 
                },
                error: function (error) {
                 
                    console.error("Error deleting records:", error);
                    alert("An error occurred while deleting records.");
                }
            });
        }
    });

   
    $("#searchButton").click(function () {
        var searchText = $("#searchInput").val().toLowerCase();

      
        $(".record-item").each(function () {
            var recordName = $(this).find(".record-name").text().toLowerCase();

            if (recordName.includes(searchText)) {
               
                $(this).show();
            } else {
               
                $(this).hide();
            }
        });
    });
});
