$(document).ready(function() {
    function updateDate() {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        $('#current-date').text(`${hours} :`);
        $('#current-date1').text(`${minutes}`);
    }
    updateDate();
    setInterval(updateDate, 1000);
});