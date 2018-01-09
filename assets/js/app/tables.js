var numShown = 5; // Initial rows shown & index
var numMore = 5;  // Increment

var $table = $('table.hidden_rows').find('tbody');  // tbody containing all the rows
var numRows = $table.find('tr').length; // Total # rows

$(function () {
    // Hide rows and add clickable div
    $table.find('tr:gt(' + (numShown - 1) + ')').hide().end()
        .after('<tbody id="more"><tr><td colspan="' +
               $table.find('tr:first td').length + '"><div>Show <span>' +
               numMore + '</span> More</div</tbody></td></tr>');

    $('#more').click(function() {
        numShown = numShown + numMore;
        // no more "show more" if done
        if (numShown >= numRows) {
            $('#more').remove();
        }
        // change rows remaining if less than increment
        if (numRows - numShown < numMore) {
            $('#more span').html(numRows - numShown);
        }
        $table.find('tr:lt(' + numShown + ')').show();
    });
    $('#all').click(function() {
        numShown = numRows;
        // no more "show more" if done
        if (numShown >= numRows) {
            $('#all').remove();
        }
        $table.find('tr:lt(' + numShown + ')').show();
    });

});
