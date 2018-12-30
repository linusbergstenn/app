class DayDatamodel{
    constructor(day){
        this.days = [{Name: 'Mån', activities: [{Activity: 'Badhuset', Place: 'Sundstabadet', Time: '17:00', Transport: 'Cykel', TransportTime: (Math.round(Math.random()* 60))  + 'min'}]}, {Name: 'Tis', activities: []},
        {Name: 'Ons', activities: [{Activity: 'Innebandy', Place: 'Kil', Time: '12.15', Transport: 'Bil', TransportTime: (Math.round(Math.random()* 60))  + 'min'}, {Activity: 'Hockey', Place: 'Löfbergs Ice Arena', Time: '19:00', Transport: 'Buss', TransportTime: (Math.round(Math.random()* 60))  + 'min'}]}, {Name: 'Tors', activities: []},
        {Name: 'Fre', activities: []}, {Name: 'Lör', activities: []}, {Name: 'Sön', activities: []}]
        this.day = this.days[day];
        this.dayArray = this.day;
    }
}   