class CalendarView{

    constructor(parent){
        this.parent = parent;

        this.mainDOM = $('<div>');
        this.mainDOM.addClass('mt-3 container border border-secondary');
        this.headerDOM = $('<h2>');
        this.headerDOM.addClass('p-4');
        this.calendarDOM = $('<div>');
        this.calendarDOM.addClass('container d-flex').attr('id', 'calender-container');

        this.date = new Date();
        this.headerDOM.text((`Din vecka (v${this.date.getWeek()})`));
        this.createWeek();
        this.mainDOM.append(this.headerDOM, this.calendarDOM);

        this.parent.append(this.mainDOM);
    }

    createWeek(){
        let dayDIV;
        let activityDOM;
        let activityCount;
        for(let i = 0; i < 7; i++){
            let model = new DayDatamodel(i);
            dayDIV = $('<div>');
            activityDOM = $('<div>');
            let pDOM = $('<p>');

            pDOM.addClass('border-bottom border-dark capital-letter');
            if(this.date.getDayStringOf(i) === this.date.getDayString()){
                pDOM.removeClass('border-dark');
                pDOM.addClass('active border-primary');
            }
            dayDIV.attr('id', 'weekDay' + i);
            dayDIV.append(pDOM, activityDOM);
            pDOM.text(this.date.getDayStringOf(i));
            let activities = $('<p>');
            activities.text(`${model.days[i].activities.length}`);
            activityDOM.append(activities);
            this.calendarDOM.append(dayDIV);

            if(model.days[i].activities.length < Config.exhaustLevel){
                activities.addClass('badge badge-success badge-pill');
            }else{
                activities.addClass('badge badge-danger badge-pill');
            }

            $(dayDIV).on( 'click', () => {
                this.showDayView(model);
            });
        }
        
    }
    showDayView(model){
        this.parent.empty();
        let header = new HeaderView(this.parent, 'Dagvy', 'primary', true, 'calendar-alt');
        let view = new DayView(this.parent, model);
    }
}