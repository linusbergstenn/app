class ButtonView{
    constructor(parent, msg, symbol, bootstrapColor , hidden){
        this.buttonDOM = $('<div>');
        this.buttonDOM.html('<p> ' + msg + '</p><i class="fas fa-' + symbol + '"></i>');
        
        if(hidden != 1){
            this.buttonDOM.addClass('container-fluid btn btn-' + bootstrapColor);
        }else{
            this.buttonDOM.addClass('hidden container-fluid btn btn-' + bootstrapColor);
        }
        parent.append(this.buttonDOM);
    }
}