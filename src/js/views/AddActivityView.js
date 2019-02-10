class AddActivityView {

    constructor(parent){
        let date = new Date();
        this.parent = parent
        this.mainDOM = $('<div>');
        this.mainDOM.addClass('container-fluid mt-2');
        this.headerDOM = $('<h3>');
        this.headerDOM.text('LÄGG TILL AKTIVITET').addClass('center mb-3');

        this.inputContainer = $('<div>');
        this.inputHeader = $('<h5>');
        this.inputHeader.text('VAD VILL DU GÖRA?')
        this.inputDOM = $('<input>');
        this.inputDOM.attr('type', 'text').attr('placeholder', 'SÖK EFTER AKTIVITET');
        this.inputContainer.append(this.inputHeader, this.inputDOM);

        this.timeContainer = $('<div>');
        this.timeContainer.addClass('pt-4 pb-4');
        this.tCHeader = $('<h5>');
        this.tCHeader.text('vilken tid sker aktiviteten?').addClass('capital-letter');
        this.timeInputDOM = $('<input>');
        this.timeInputDOM.attr('type', 'time').attr('value', this._sliderValue(date));

        this.transportDOM = $('<div>');
        this.transportTitle = $('<h5>');
        this.transportTitle.text('HUR TAR DU DIG DIT?')
        this.optionContainer = $('<div>');
        this.optionContainer.addClass('d-flex justify-content-center');
        this.walkOption = this._createRadioOption('walking');
        this.bikeOption = this._createRadioOption('bicycle');
        this.busOption = this._createRadioOption('bus');
        this.optionContainer.append(this.walkOption, this.bikeOption, this.busOption);
        this.transportDOM.append(this.transportTitle, this.optionContainer);

        this.timeContainer.append(this.tCHeader, this.timeInputDOM);

        

        this.mainDOM.append(this.headerDOM, this.inputContainer, this.timeContainer, this.transportDOM);
        this.addActivityButton = new ButtonView(this.mainDOM, 'Lägg till aktivitet', 'plus', 'primary');
        this.addActivityButton.buttonDOM.addClass('mt-4');
        this.parent.append(this.mainDOM);
    }
    _sliderValue(date){
        if(date.getHours() < 10){
            return '0'+(date.getHours() + 1 )+ ':' + date.getMinutes();
        }else{
            if (date.getHours() == 23){
                return '00' + ':' + date.getMinutes();
            }else{
                return (date.getHours() + 1 ) + ':' + date.getMinutes();
            }
        }
    }
    _createRadioOption(icon){
    return `<input type="radio" name="transportation"><i class="fas fa-${icon}"><i/>`;
    }
}