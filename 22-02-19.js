/*function Slider (w, h, imgs) {
    this.currentPosition = 0;
    this.width = w;
    this.height = h;
    this.images = imgs;
    this.next = function () {
        console.log(this.images[++this.currentPosition]);
        //console.log(Slider.images[++Slider.currentPosition])
    };
    this.previous = function () {
        console.log(this.images[--this.currentPosition]);
        //console.log(Slider.images[--Slider.currentPosition])
    };
    function abs() {
        console.log(this)
    };
    abs()
}

var images =['/imgs/1.jpg','/imgs/2.jpg','/imgs/3.jpg','/imgs/4.jpg','/imgs/5.jpg','/imgs/6.jpg'];
var slide = new Slider(600, 300, images);
console.log(slide);*/

/***********************************************************************/
var categories = [
    {
        category: 'Laptop',
        link: '#laptop',
        subcategories: [
            {
                category: 'Asus',
                link: '#asus',
                subcategories: [
                    {
                        category: 'A500',
                        link: '#a500',
                        subcategories: []
                    },
                    {
                        category: 'A300',
                        link: '#a300',
                        subcategories: []
                    },
                    {
                        category: 'A600',
                        link: '#a600',
                        subcategories: []
                    },
                ]
            },
            {
                category: 'Acer',
                link: '#acer',
                subcategories: [
                    {
                        category: 'SX50',
                        link: '#sx50',
                        subcategories: []
                    },
                    {
                        category: 'L400',
                        link: '#l400',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        category: 'Smartphone',
        link: '#smartphone',
        subcategories: [
            {
                category: 'XIAOMI',
                link: '#xiaomi',
                subcategories: [
                    {
                        category: 'X4 Note',
                        link: '#x4_note',
                        subcategories: []
                    }
                ]
            },
            {
                category: 'Samsung',
                link: '#samsun',
                subcategories: [
                    {
                        category: 'G7',
                        link: '#g7',
                        subcategories: []
                    },
                    {
                        category: 'G9',
                        link: '#g9',
                        subcategories: []
                    }
                ]
            }
        ]
    }
];

var html = "";
function showCategories(categories) {
    html += '<ul>'
        for (var i = 0; i < categories.length; i++) {
        html += '<li>';
        html += '<a href="' + categories[i].link + '">' + categories[i].category + '</a>'
            if (categories.length > 0) {
            showCategories(categories[i].subcategories);
        }
        html += '</li>'
    }
        html += '</ul> '
};


showCategories(categories);

document.getElementById("categories").innerHTML = html;