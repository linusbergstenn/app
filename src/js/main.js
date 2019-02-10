$(document).ready( () => {
    console.log('I\'m running ')
    Config.parent = $('#app-body');

    let app = new ApplicationView(Config.parent);
});
