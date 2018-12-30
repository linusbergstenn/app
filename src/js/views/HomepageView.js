class HomepageView{
    constructor(parent, headerTitle, icon){
        this.header = new HeaderView(parent, headerTitle, 'primary', true, icon);
        this.calendar = new CalendarView(parent);
    }
}