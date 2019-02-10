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
        this.listDOM.attr('id', 'aktivitetsvy').addClass('container-fluid border');
        this.mainDOM.append(this.headerDOM, this.listDOM);

        this.infoDOM = $('<div>');
        this.infoHeader = $('<h3>');
        this.infoHeader.text('HANTERA AKTIVITETER');
        this.buttonsDOM = $('<div>');
        this.buttonsDOM.attr('id', 'hanteraknappar')
        this.addActivityButton = new ButtonView(this.buttonsDOM, 'Lägg till aktivitet', 'plus', 'success');
        this.removeActivityButton = new ButtonView(this.buttonsDOM, 'Ta bort en aktivitet', 'minus', 'danger');
        this.infoDOM.append(this.infoHeader, this.buttonsDOM);
        this.mainDOM.append(this.infoDOM);
        

        console.log(this.activities);
        this.createActivityList();
        this.parent.append(this.mainDOM);
        $(this.addActivityButton.buttonDOM).on('click', () => {
            this.addActivity(daydata);
        });
        $(this.removeActivityButton.buttonDOM).on('click', () => {
            $('.remove-item').toggleClass('hidden');
        });
        //Custom scroll
        $(this.listDOM).mCustomScrollbar({
            theme:"rounded-dark",
            autoHideScrollbar: true
      
          });
    }
    createActivityList(){
        for(let i=0; i < this.activities.length; i++){
            console.log(this.activities[i]);
            let liDOM = $('<li>');
            liDOM.addClass('container border-bottom');
            let information = this.activities[i];
            let content = `<time>${information.Time}</time><h5>${information.Activity}</h5><span><div><div><p id="place">${information.Place || ' '}</p><p>${information.TransportTime || ''}</p></div></span><img class="activity-pic" alt="help-picture" src="${information.src}"></div>`;
            console.log(content);
            liDOM.html(content);
            let mapButtonDOM = $('<i class="showOnMap fas fa-map">');
            let closeBTN = $('<i class="remove-item fas fa-times hidden">');
            liDOM.append(closeBTN,mapButtonDOM);
            this.listDOM.append(liDOM);

            $(closeBTN).on('click', () => {
               let yn = confirm('Vill du ta bort');
               if(yn){
                   $(liDOM).remove();
                }else{
                    console.log('Avbröt!');
                }
                
            });
            $(mapButtonDOM).on('click', () => {
                this.mainDOM.empty();
                let map = new MapView(this.mainDOM);
                console.log('clicked');
            });
        }
        if(this.activities.length <= 0){
            let liDOM = $('<li>');
            liDOM.addClass('container').html('<h1>INGA AKTIVITETER PÅ SCHEMAT</h1>');
            this.listDOM.append(liDOM);
            this.removeActivityButton.buttonDOM.addClass('hidden');
        }else{
            this.removeActivityButton.buttonDOM.removeClass('hidden');
        }
    }

    addActivity(daydata){
        this.mainDOM.empty();
        let addActivity = new AddActivityView(this.mainDOM, daydata);
    }
}