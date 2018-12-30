class HeaderView{
    constructor(parent, title, bootstrapColor, menuToggler, icon){
        
        this.mainDOM = $('<header>');
        this.absDOM = $('<div>');
        this.absDOM.addClass('flex-container d-flex inline-flex');
        this.headerDOM = $('<h1>');
        this.headerDOM.text(title);

        this.menuToggler = $('<i><img src="../svg/MenuBar.svg">');
        this.menuToggler.addClass('menu-toggler');
        this.mainDOM.append(this.headerDOM);

        if(bootstrapColor){
            this.mainDOM.addClass('bg bg-' + bootstrapColor)
        }
        if(menuToggler){
            this.absDOM.append(this.menuToggler);
        }
        if(icon){
            this.IconDOM  = $('<span><i class=" pt-4 pr-3 fas fa-' + icon + '"></span>');
            this.absDOM.append(this.IconDOM);
        }
       this.mainDOM.append(this.absDOM);
        parent.append(this.mainDOM);

        $(this.menuToggler).on('click', () => {
            console.log('menuToggle clicked');
        })
    }
}