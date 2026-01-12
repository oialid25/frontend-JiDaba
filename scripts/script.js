

login = false
let counter = 1
let burgers_stor = {}
let ids = ['ingredients-meat', 'ingredients-vegetables', 'ingredients-cheeses', 'ingredients-sources']
let cal = 0
let loading = 0
let Billitems = {}

let go_home=false;

function Order_popup_enable() {
    const a = document.getElementById("Order-popup");

    a.style.display = ""

}
function Order_popup_disable() {
    const a = document.getElementById("Order-popup");
    a.style.display = "none"
}
function Open_menu() {
    window.location.href = "./menu.html";
}
function Open_maker() {
    window.location.href = "./maker.html";
}
function add_burger(name, price) {
    document.getElementById("counter").innerHTML = counter
    counter++
    if (name in burgers_stor) {
        burgers_stor[name] += price;
    }
    else {
        burgers_stor[name] = price;
    }
    console.log(burgers_stor[name])
}

function add_to_bar() {
    
    let a = document.getElementById("complet");
    let b = document.getElementById("loading-bar").style.width;
    let c = document.getElementById("complet-pourcentage");


    if (loading <= 2) {
        console.log(loading);
        document.getElementById(ids[loading]).style.display = 'none'

        loading++
        document.getElementById(ids[loading]).style.display = 'flex'
        
        a.style.width = 33 * loading + '%';
        c.textContent = 33 * loading + '%';
    }
    else if(loading == 3) {
        console.log(loading);
        a.style.width = 100 + '%';
        c.textContent = 100 + '%';
        const brad = document.createElement('div');
        brad.style.height = '12%'
        brad.style.width = '48%'
        brad.style.background = 'linear-gradient(to top, #fcead6 5%, #e6be8a 60%, #c69c6d 95%)'
        brad.style.borderRadius = '40px 40px 0 0'
        brad.style.border = '3px solid #a67c52'
        brad.style.margin = '0'
        document.getElementById('burger-meaker').appendChild(brad);
        document.getElementById('ingredients-sources').style.display = 'none';
        document.getElementById('Bill').style.display = '';
        document.getElementById('previous').style.display='none';
        document.getElementById('Next').style.display='none';
        document.getElementById("gohome").style.display = "block";
        document.getElementById('ingredients-bottum').style.justifyContent="center";
        
        let your_counter=0;
        loading++;
        document.getElementById('loading-bar').style.display='none';
        for (let i in Billitems) {
            let a = document.createElement('div');

            let name = document.createElement('p');
            let price = document.createElement('p');

            name.innerHTML = i+'\'s' ;
            
            price.innerHTML = Billitems[i]+" DH";
            your_counter +=Billitems[i];

            a.appendChild(name);
            a.appendChild(price);

            document.getElementById('Bill').appendChild(a);
            
        }
        

        document.getElementById('Bill').appendChild(b);
    }
    
}



function remove_from_bar() {
    let a = document.getElementById("complet");
    let b = document.getElementById("loading-bar").style.width;
    let c = document.getElementById("complet-pourcentage");
    if (loading > 0) {
        document.getElementById(ids[loading]).style.display = 'none';
        loading--;
        document.getElementById(ids[loading]).style.display = 'flex';
    }
    console.log(loading)
    a.style.width = 33 * loading + '%';
    c.textContent = 33 * loading + '%';
}






































//-------------------------------------------------//

function Common_patty(div) {

    Bill += 5
    div.style.width = "45%";
    div.style.boxShadow = "0px 3px 5px rgba(0,0,0,0.2)";
}

function add_Beef() {
    const div = document.createElement('div');
    div.id = "beef";
    if('beef' in Billitems){
        Billitems['beef'] += 5;
    }
    else{Billitems['beef'] = 5;}
    cal += 100
    div.style.height = "10%";
    div.style.borderRadius = "10px";
    div.style.background = "repeating-linear-gradient(to bottom, #6d4c41, #6d4c41 10px, #3e2723 10px, #3e2723 15px)";
    div.style.border = "2px solid #3e2723";

    Common_patty(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Chicken() {
    const div = document.createElement('div');
    div.id = "chicken";
    if('beef' in Billitems){
        Billitems['chicken'] += 3;
    }
    else{Billitems['chicken'] = 3;}
    cal += 50
    div.style.height = "10%";
    div.style.borderRadius = "12px";
    div.style.backgroundColor = "#e6b800";

    div.style.border = "2px dashed #b38f00";

    Common_patty(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Vegan() {
    const div = document.createElement('div');
    div.id = "vegan";
    if('beef' in Billitems){
        Billitems['vegan'] += 10;
    }
    else{Billitems['vegan'] = 10;}
    Billitems['vegan'] = 10;
    cal += 10
    div.style.height = "10%";
    div.style.borderRadius = "10px";
    div.style.backgroundColor = "#8d6e63";
    div.style.border = "2px solid #5d4037";

    Common_patty(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Fish() {
    const div = document.createElement('div');
    div.id = "fish";
    if('beef' in Billitems){
        Billitems['fish'] += 10;
    }
    else{Billitems['fish'] = 10;}
    Billitems['fish'] = 10;
    cal += 40
    div.style.height = "10%";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#D7973D";
    div.style.border = "2px dashed #b38f00";

    Common_patty(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Eggs() {
    const div = document.createElement('div');
    div.id = "eggs";
    if('beef' in Billitems){
        Billitems['eggs'] += 2;
    }
    else{Billitems['eggs'] = 2;}
    Billitems['eggs'] = 2;
    cal += 10
    div.style.height = "10%";
    div.style.borderRadius = "15px";
    div.style.border = "1px solid #e0e0e0";
    div.style.background = "radial-gradient(circle, #fdd835 25%, #ffffff 26%)";

    Common_patty(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Beacon() {
    const div = document.createElement('div');
    div.id = "beacon";
    if('beef' in Billitems){
        Billitems['beacon'] += 6;
    }
    else{Billitems['beacon'] = 6;}
    Billitems['beacon'] = 6;
    cal += 60
    div.style.height = "5%";
    div.style.borderRadius = "5px";
    div.style.background = "repeating-linear-gradient(45deg, #d32f2f, #d32f2f 10px, #ffcdd2 10px, #ffcdd2 15px)";
    div.style.border = "1px solid #b71c1c";

    Common_patty(div);
    document.getElementById('burger-meaker').appendChild(div);
}


function setCommonStyles(div) {
    div.style.width = "45%";
    div.style.boxShadow = "0px 3px 5px rgba(0,0,0,0.2)";
    div.style.cursor = "pointer";
    div.style.transition = "transform 0.1s";
}

function add_Ketchup() {
    const div = document.createElement('div');
    div.id = "ketchup";
    if('beef' in Billitems){
        Billitems['ketchup'] += 1;
    }
    else{Billitems['ketchup'] = 1;}
    Billitems['ketchup'] = 1;
    cal += 10
    div.style.height = "4%";
    div.style.borderRadius = "5px";
    div.style.background = "linear-gradient(to right, #b71c1c, #d32f2f, #b71c1c)";
    div.style.border = "1px solid #7f0000";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Mayo() {
    const div = document.createElement('div');
    div.id = "mayo";
    if('beef' in Billitems){
        Billitems['mayo'] += 1;
    }
    else{Billitems['mayo'] = 1;}
    Billitems['mayo'] = 1;
    cal += 15
    div.style.height = "4%";
    div.style.borderRadius = "5px";
    div.style.background = "linear-gradient(to right, #fff9c4, #ffffff, #fff9c4)";
    div.style.border = "1px solid #fbc02d";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_BigMac() {
    const div = document.createElement('div');
    div.id = "bigmac";
    if('beef' in Billitems){
        Billitems['bigmac'] += 2;
    }
    else{Billitems['bigmac'] = 2;}
    Billitems['bigmac'] = 2;
    cal += 15
    div.style.height = "4%";
    div.style.borderRadius = "5px";
    div.style.background = "linear-gradient(to right, #ffcc80, #ffe0b2, #ffcc80)";
    div.style.border = "1px solid #fb8c00";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Hot() {
    const div = document.createElement('div');
    div.id = "hot";
    if('beef' in Billitems){
        Billitems['hot'] += 1;
    }
    else{Billitems['hot'] = 1;}
    Billitems['hot'] = 1;
    cal += 1
    div.style.height = "4%";
    div.style.borderRadius = "5px";
    div.style.background = "linear-gradient(to right, #800000, #a52a2a, #800000)";
    div.style.border = "1px solid #500000";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Mustard() {
    const div = document.createElement('div');
    div.id = "mustard";
    if('beef' in Billitems){
        Billitems['mustard'] += 1;
    }
    else{Billitems['mustard'] = 1;}
    Billitems['mustard'] = 1;
    cal += 10
    div.style.height = "4%";
    div.style.borderRadius = "5px";
    div.style.background = "linear-gradient(to right, #fdd835, #ffeb3b, #fdd835)";
    div.style.border = "1px solid #fbc02d";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_BBQ() {
    const div = document.createElement('div');
    div.id = "bbq";
    if('beef' in Billitems){
        Billitems['bbq'] += 2;
    }
    else{Billitems['bbq'] = 2;}
    Billitems['bbq'] = 2;
    cal += 15
    div.style.height = "4%";
    div.style.borderRadius = "5px";
    div.style.background = "linear-gradient(to right, #3e2723, #5d4037, #3e2723)";
    div.style.border = "1px solid #281815";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Tomatos() {
    const div = document.createElement('div');
    div.id = "tomatos";
    if('beef' in Billitems){
        Billitems['tomatos'] += 1;
    }
    else{Billitems['tomatos'] = 1;}
    Billitems['tomatos'] = 1;
    cal += 5
    div.style.height = "8%";
    div.style.borderRadius = "50px";
    div.style.background = "radial-gradient(circle, #ff5252 30%, #d32f2f 90%)";
    div.style.border = "2px solid #b71c1c";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Pickles() {
    const container = document.createElement('div');
    container.id = "pickles-layer";
    if('beef' in Billitems){
        Billitems['pickles'] += 2;
    }
    else{Billitems['pickles'] = 2;}
    Billitems['pickles'] = 2;
    cal += 5
    container.style.width = "45%";
    container.style.height = "6%";
    container.style.margin = "2px auto";
    container.style.display = "flex";
    container.style.justifyContent = "space-evenly";

    for (let i = 0; i < 2; i++) {
        const slice = document.createElement('div');
        slice.style.width = "40%";
        slice.style.height = "100%";
        slice.style.borderRadius = "8px";
        slice.style.border = "1px solid #33691e";
        slice.style.background = "repeating-linear-gradient(90deg, #689f38, #689f38 5px, #33691e 5px, #33691e 8px)";
        slice.style.boxShadow = "1px 1px 2px rgba(0,0,0,0.2)";

        container.appendChild(slice);
    }

    document.getElementById('burger-meaker').appendChild(container);
}

function add_Onion() {
    const div = document.createElement('div');
    div.id = "onion";
    if('beef' in Billitems){
        Billitems['onion'] += 2;
    }
    else{Billitems['onion'] = 2;}
    Billitems['onion'] = 2;
    cal += 5
    div.style.height = "5%";
    div.style.borderRadius = "50px";
    div.style.background = "repeating-linear-gradient( #f3e5f5, #f3e5f5 2px, #ba68c8 3px, #ba68c8 4px)";
    div.style.border = "2px solid #8e24aa";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Lettuce() {
    const div = document.createElement('div');
    div.id = "lettuce";
    if('beef' in Billitems){
        Billitems['lettuce'] += 2;
    }
    else{Billitems['lettuce'] = 2;}
    Billitems['lettuce'] = 2;
    cal += 5
    div.style.height = "6%";
    div.style.borderRadius = "15px";
    div.style.background = "linear-gradient(45deg, #aed581 25%, #8bc34a 25%, #8bc34a 50%, #aed581 50%, #aed581 75%, #8bc34a 75%, #8bc34a 100%)";
    div.style.backgroundSize = "20px 20px";
    div.style.border = "1px solid #689f38";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Jalapeno() {
    const container = document.createElement('div');
    container.id = "jalapeno-layer";
    if('beef' in Billitems){
        Billitems['jalapeno'] += 2;
    }
    else{Billitems['jalapeno'] = 2;}
    Billitems['jalapeno'] = 2;
    cal += 5
    container.style.width = "45%";
    container.style.height = "5%";
    container.style.display = "flex";
    container.style.justifyContent = "space-between";

    for (let i = 0; i < 3; i++) {
        const pice = document.createElement('div');
        pice.style.width = "28%";
        pice.style.height = "100%";
        pice.style.border = "1px solid #33691e";
        pice.style.background = "radial-gradient(circle, #c5e1a5 20%, #558b2f 25%, #33691e 90%)";

        container.appendChild(pice);
    }

    document.getElementById('burger-meaker').appendChild(container);
}

function add_Mshrom() {
    const div = document.createElement('div');
    div.id = "mshrom";
    if('beef' in Billitems){
        Billitems['mshrom'] += 5;
    }
    else{Billitems['mshrom'] = 5;}
    Billitems['mshrom'] = 5;
    cal += 10
    div.style.height = "6%";
    div.style.borderRadius = "10px";
    div.style.backgroundColor = "#d7ccc8";
    div.style.border = "2px solid #8d6e63";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Swiss() {
    const div = document.createElement('div');
    div.id = "swiss";
    if('beef' in Billitems){
        Billitems['swiss'] += 2;
    }
    else{Billitems['swiss'] = 2;}
    Billitems['swiss'] = 2;
    cal += 20
    div.style.height = "5%";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#fff9c4";
    div.style.backgroundImage = "radial-gradient(#fbc02d 15%, transparent 16%)";
    div.style.backgroundSize = "20px 20px";
    div.style.border = "1px solid #fbc02d";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Italian() {
    const div = document.createElement('div');
    div.id = "italian";
    if('beef' in Billitems){
        Billitems['italian'] += 2;
    }
    else{Billitems['italian'] = 2;}
    Billitems['italian'] = 2;
    cal += 30
    div.style.height = "5%";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#fffde7";
    div.style.backgroundImage = "repeating-linear-gradient(45deg, transparent, transparent 5px, #f57f17 5px, #f57f17 6px)";
    div.style.border = "1px solid #f9a825";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Creamy() {
    const div = document.createElement('div');
    div.id = "creamy";
    if('beef' in Billitems){
        Billitems['creamy'] += 2;
    }
    else{Billitems['creamy'] = 2;}
    Billitems['creamy'] = 2;
    cal += 10
    div.style.height = "5%";
    div.style.borderRadius = "10px";
    div.style.background = "#ffffff";
    div.style.boxShadow = "inset 0 0 10px #e0e0e0";
    div.style.border = "1px solid #bdbdbd";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Blue() {
    const div = document.createElement('div');
    div.id = "blue";
    if('beef' in Billitems){
        Billitems['blue'] += 3;
    }
    else{Billitems['blue'] = 3;}
    Billitems['blue'] = 3;
    cal += 20
    div.style.height = "5%";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#fff";
    div.style.backgroundImage = "radial-gradient(#455a64 20%, transparent 22%)";
    div.style.backgroundSize = "15px 15px";
    div.style.border = "1px solid #90a4ae";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Cheddar() {
    const div = document.createElement('div');
    div.id = "cheddar";
    if('beef' in Billitems){
        Billitems['cheddar'] += 1;
    }
    else{Billitems['cheddar'] = 1;}
    Billitems['cheddar'] = 1;
    cal += 10
    div.style.height = "5%";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#ffb300";
    div.style.border = "1px solid #ff6f00";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}

function add_Gourmet() {
    const div = document.createElement('div');
    div.id = "gourmet";
    if('beef' in Billitems){
        Billitems['gourmet'] += 3;
    }
    else{Billitems['gourmet'] = 3;}
    Billitems['gourmet'] = 3;
    cal += 20
    div.style.height = "6%";
    div.style.borderRadius = "5px";
    div.style.background = "linear-gradient(to bottom, #f5f5f5 10%, #fff9c4 20%, #fff9c4 80%, #f5f5f5 90%)";
    div.style.border = "1px solid #bdbdbd";
    setCommonStyles(div);
    document.getElementById('burger-meaker').appendChild(div);
}
