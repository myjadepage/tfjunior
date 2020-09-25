// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTable').DataTable({
        "searching": false,
        "info": false,
        "lengthChange": false,
        "language": {
            "search": "검색",
            "paginate": {
                "previous": "<",
                "next": ">"
            }
        }
    });
});