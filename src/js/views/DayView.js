class DayView{

    constructor(parent, daydata){
        this.data = daydata;
        this.dayName = this.data.dayArray.Name;
        this.activities = this.data.dayArray.activities;
        this.parent = parent;
        this.mainDOM = $('<div>');
        this.mainDOM.addClass('dayview');
        console.log(this.dayName);
        this.headerDOM = $('<h2>');
        this.headerDOM.text(this.dayName + 'dag');

        this.listDOM = $('<ul>');
        this.listDOM.attr('id', 'aktivitetsvy').addClass('list-group list-group-flush');
        this.mainDOM.append(this.headerDOM, this.listDOM);

        this.infoDOM = $('<div>');
        this.infoHeader = $('<h3>');
        this.infoHeader.text('HANTERA AKTIVITETER');
        this.buttonsDOM = $('<div>');
        this.buttonsDOM.attr('id', 'hanteraknappar');
        this.addActivityButton = new ButtonView(this.buttonsDOM, 'Lägg till aktivitet', 'plus', 'success');
        this.removeActivityButton = new ButtonView(this.buttonsDOM, 'Ta bort en aktivitet', 'minus', 'danger');
        this.infoDOM.append(this.infoHeader, this.buttonsDOM);
        this.mainDOM.append(this.infoDOM);
        

        console.log(this.activities);
        this.createActivityList();
        this.parent.append(this.mainDOM);
        $(this.addActivityButton.buttonDOM).on('click', () => {
            this.addActivity();
        });
    }
    createActivityList(){
        for(let i=0; i < this.activities.length; i++){
            console.log(this.activities[i]);
            let liDOM = $('<li>');
            liDOM.addClass('list-group-item flex-wrap');
            let information = this.activities[i];
            let content = `<p>${information.Activity}</p><p>${information.Place}</p><p>${information.Time}</p><p>${information.TransportTime}</p>`;
            liDOM.html(content);
            this.listDOM.append(liDOM);
        }
        if(this.activities.length <= 0){
            let liDOM = $('<li>');
            liDOM.addClass('list-group-item align center').html('<h1>INGA AKTIVITETER PÅ SCHEMAT</h1>');
            this.listDOM.append(liDOM);
            this.removeActivityButton.buttonDOM.addClass('hidden');
        }else{
            this.removeActivityButton.buttonDOM.removeClass('hidden');
        }
    }

    addActivity(){
        console.log('tömde mainDOM');
        this.mainDOM.empty();
        let addActivity = new AddActivityView(this.mainDOM);
    }
}