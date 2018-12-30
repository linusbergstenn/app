class ApplicationView {
    constructor(parent){
        this.parent = parent;
        this.content;
        
        this.testViews();
    }
    onStart(){
        
        this.content = new CreateAccountView(this.parent);

        $(this.content.userInputDOM).on('click', () => {
            console.log('user clicked');
            this.content.ForwardButton2.buttonDOM.removeClass('hidden');
            this.content.userInputDOM.css(Config.active);

            if(this.content.passwordInputDOM.val().length > 0){
                this.content.passwordInputDOM.css(Config.valid);
            }else if(this.content.passwordInputDOM.val().length = 0){
                this.content.passwordInputDOM.css(Config.notValid);
            }
        });
        $(this.content.passwordInputDOM).on('click', () => {
            console.log('pass clicked');
            this.content.passwordInputDOM.css(Config.active);

            this.content.ForwardButton2.buttonDOM.removeClass('hidden');

            if(this.content.userInputDOM.val().length >= 3){
                this.content.userInputDOM.css(Config.valid);
            }else if(this.content.userInputDOM.val().length < 3){
                this.content.userInputDOM.css(Config.notValid);
            } 
        });

        $(this.content.ForwardButton.buttonDOM).on('click', () =>{
            console.log('Forward2 clicked');
            this.update();
            
        });
    }
    update(){
        this.parent.empty();
        this.content = new HomepageView(this.parent, 'översikt', 'home');
    }

    testViews(){
        this.content = new AddActivityView(this.parent);
    }

}