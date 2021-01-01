// simplificadores de funciones
const print = console.log; //Console Log

//simplifica querySelector
const selectElement = (id) => {
    return element = document.querySelector(id) || false;
}


//Clase kidy || Magia
const $ = (domElement) => {
    return new kidy(domElement);
}

const kidy = function(element) {
    this.el = selectElement(element);
}

kidy.prototype.text = function(string) {
    this.el.textContent = string;
}

kidy.prototype.on = function(eventType, callback) {
    if ((typeof this.el) !== 'object') {
        return;
    }
    this.el.addEventListener(eventType, callback);
}

kidy.prototype.showmethis = function() {
    print(this);
}
kidy.prototype.show = function(status = true) {
    if (!this.el) {
        return;
    }

    if (status === false)
        this.el.style.display = 'none';
}