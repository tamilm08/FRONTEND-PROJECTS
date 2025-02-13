document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ticket-form").addEventListener("submit", function (e) {
        e.preventDefault();

        
        // Gather user input
        var name = document.getElementById("name").value;
        var seat = document.getElementById("seat").value;
        var date = document.getElementById("date").value;
        var fromLocation = document.getElementById("from").value;
        var toLocation = document.getElementById("to").value;

        var ticketId = "T" + Math.floor(Math.random() * 10000);

        // Add ticket details to the history table
        var tableBody = document.getElementById("history-table-body");
        var newRow = tableBody.insertRow();
        newRow.innerHTML = `
          <td>${ticketId}</td>
          <td>${name}</td>
          <td>${seat}</td>
          <td>${date}</td>
          <td>${fromLocation}</td>
          <td>${toLocation}</td>
          <td><button class="delete-btn bg-red-500 text-white px-2 py-1 rounded">Delete</button></td>
        `;

        alert("Ticket with ID " + ticketId + " has been booked successfully.");
        document.getElementById("ticket-form").reset();
    });

    // ✅ Fix: Show ticket history when "View History" button is clicked
    document.getElementById("view-history-btn").addEventListener("click", function () {
        var historySection = document.getElementById("ticket-history");
        historySection.classList.toggle("hidden"); // Toggle visibility
    });

    // ✅ Fix: Properly handle delete button clicks
    document.getElementById("ticket-history").addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            e.target.closest("tr").remove();
            alert("Ticket deleted successfully.");
        }
    });
});
