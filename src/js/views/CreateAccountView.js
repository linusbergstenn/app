class CreateAccountView {
    constructor(parent){


        this.mainDOM = $('<div>');
        this.mainDOM.addClass('form-holder');

        this.header = new HeaderView(parent, 'Appnamn');

        this.headerDOM = $('<h1>');
        this.headerDOM.text('Skapa Konto');

        this.formDOM = $('<form>');

        this.usernameGropuDOM = $('<div>');
        this.usernameGropuDOM.addClass('form-group');
        this.userLabelDOM = $('<label>');
        this.userLabelDOM.text('Användarnamn:');
        this.userInputDOM = $('<input type="text" class="form-control" placeholder="Användarnamn">');
        this.usernameGropuDOM.append(this.userLabelDOM, this.userInputDOM);

        this.passwordGropuDOM = $('<div>');
        this.passwordGropuDOM.addClass('form-group');
        this.passwordLabelDOM = $('<label>');
        this.passwordLabelDOM.text('Lösenord:');
        this.passwordInputDOM = $('<input type="password" class="form-control" placeholder="Lösenord">');
        this.passwordGropuDOM.append(this.passwordLabelDOM, this.passwordInputDOM);
        
        this.formDOM.append(this.usernameGropuDOM, this.passwordGropuDOM);

        this.elseDOM = $('<div>');
        this.elseDOM.addClass('else-container');
        this.elesHeaderDOM = $('<h1>');
        this.elesHeaderDOM.text('eller');
        this.elseDOM.append(this.elesHeaderDOM);
        this.ForwardButton = new ButtonView(this.elseDOM, 'Logga in', 'arrow-right', 'primary');

        this.mainDOM.append(this.header, this.headerDOM , this.formDOM);
        this.ForwardButton2 = new ButtonView(this.mainDOM, 'Gå vidare', 'arrow-right', 'success', 1);
        parent.append(this.mainDOM, this.elseDOM);
    }

}