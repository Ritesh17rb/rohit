var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "I":
                var song2 = new Audio("sounds/song-2.mp3");
                song2.play();
                break;

            case "A":
                var song2 = new Audio("sounds/song-2.mp3");
                song2.play();
                break;

            case "S":
                var song2 = new Audio("sounds/song-2.mp3");
                song2.play();
                break;

            case "M":
                var song2 = new Audio("sounds/song-2.mp3");
                song2.play();
                break;

            case "O":
                var song2 = new Audio("sounds/song-2.mp3");
                song2.play();
                break;

            case "D":
                var song2 = new Audio("sounds/song-2.mp3");
                song2.play();
                break;

            case "I":
                var song1 = new Audio("sounds/song-1.mp3");
                song1.play();
                break;

            default:
                console.log(buttonInnerHTML);
        }
    });
}