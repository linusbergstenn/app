class DayDatamodel{
    constructor(day){
        this.days = [{Name: 'Mån', activities: [{Activity: 'Frukost', Time: '07:45', src: '../img/breakfast.jpg'}, {Activity: 'Badhuset', Place: 'Sundstabadet', Time: '17:00', Transport: 'Cykel', TransportTime: (Math.round(Math.random()* 60))  + 'min', src: '../img/sundstavadet.jpg'}]}, {Name: 'Tis', activities: [{Activity: 'Frukost', Time: '07:45', src: '../img/breakfast.jpg'}]},
        {Name: 'Ons', activities: [{Activity: 'Frukost', Time: '07:45', src: '../img/breakfast.jpg'},{Activity: 'Innebandy', Place: 'Kil', Time: '12.15', Transport: 'Bil', TransportTime: (Math.round(Math.random()* 60))  + 'min', src: '../img/innebandy.jpg'}, {Activity: 'Hockey', Place: 'Löfbergs Ice Arena', Time: '19:00', Transport: 'Buss', TransportTime: (Math.round(Math.random()* 60))  + 'min', src: '../img/hockey.jpg'}]}, {Name: 'Tors', activities: [{Activity: 'Frukost', Time: '07:45', src: '../img/breakfast.jpg'}]},
        {Name: 'Fre', activities: [{Activity: 'Frukost', Time: '07:45', src: '../img/breakfast.jpg'}]}, {Name: 'Lör', activities: [{Activity: 'Frukost', Time: '09:45', src: '../img/breakfast.jpg'}]}, {Name: 'Sön', activities: [{Activity: 'Frukost', Time: '09:45', src: '../img/breakfast.jpg'}]}]
        this.day = this.days[day];
        this.dayArray = this.day;
    }
}   