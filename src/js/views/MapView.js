class MapView {

    constructor(parent, destination){
        this.parent = parent;
        this.mainDOM = $('<div id="map">');
        this.parent.append(this.mainDOM);
    }
}
  