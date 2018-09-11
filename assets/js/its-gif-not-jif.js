
$(document).ready(function) {

    var topics = ["cats", "dogs", "pigs", "horses"]

    for (var = i; i < topics.length; i++) {
        var topicBtn = $("<button>");
        topicBtn.addClass("btn btn-lg p-2 mx-1");
        $("#buttons-display").append(topicBtn)
    }

}