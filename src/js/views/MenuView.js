class MenuView {

    constructor(parent){
        this.parent = parent;

        this.mainDOM = $('<div>');
        this.mainDOM.addClass('container-fluid hidden').attr('id', 'menu');

        this.closeMenu = $('<i class="fas fa-times"></i>');
        this.closeMenu.attr('id', 'closeMenu');
        this.headerDOM = $('<div>');
        this.headerDOM.html('<h1>MENY</h1>').addClass('container bg bg-dark').attr('id', 'menuHeader')
        this.mainDOM.append(this.headerDOM);

        this.buttonsLowerDOM = $('<div>');
        this.buttonsLowerDOM.addClass('lowerMenubuttons')
        this.homebutton = new ButtonView(this.buttonsLowerDOM, 'HEM', 'home', 'primary' );
        this.homebutton.buttonDOM.addClass('mt-2');
        this.signoutbutton = new ButtonView(this.buttonsLowerDOM, 'LOGGA UT', 'sign-out-alt', 'danger' );
        this.signoutbutton.buttonDOM.addClass('mt-2');


        this.mainDOM.append(this.closeMenu, this.buttonsLowerDOM);
        this.parent.append(this.mainDOM);

        $(this.signoutbutton.buttonDOM).on('click', () => {
            this.parent.empty();
            let homescreen = new ApplicationView(this.parent);
            alert('Du har loggats ut');
        });
        $(this.homebutton.buttonDOM).on('click', () => {
            this.parent.empty();
            let homescreen = new ApplicationView(this.parent).login();
        });

    }

    _createOptions(text, icon){
        let buttonDOM = $('<div>');
        buttonDOM.addClass(`container border cta-button`);
        buttonDOM.html(`<h1>${text}</h1><i class="fas fa-${icon}">`);
        return buttonDOM;
    }
}