// Constants and variables
const Desserts = [
    { name: 'Black Forest trifles', imageUrl: 'https://i.imgur.com/ncTKNvZ.png' },
    { name: 'Sablé', imageUrl: 'https://i.imgur.com/lJl8IoM.png' },
    { name: 'Apple Pie with Ice Cream', imageUrl: 'https://i.imgur.com/8NO3OQU.png' },
    { name: 'Baked Raspberry Cheesecake', imageUrl: 'https://i.imgur.com/zZ926Jc.png' }, 
    { name: 'Chocolate Brownies ', imageUrl: 'https://i.imgur.com/S9Ai7JO.png' }, 
    { name: 'Tiramisu', imageUrl: 'https://i.imgur.com/qQnWIR0.png' },
    { name: 'Chocolate Chip Cookies', imageUrl: 'https://i.imgur.com/6zE8jrn.png' },
    { name: 'Red Velvet Cake', imageUrl: 'https://i.imgur.com/92Jp8bN.png' },
    { name: 'Strawberry Shortcake', imageUrl: 'https://i.imgur.com/3I001Zw.png' },
    { name: 'Lemon Bars', imageUrl: 'https://i.imgur.com/f9fyIjC.png' },
    { name: 'Key Lime Pie', imageUrl: 'https://i.imgur.com/prtPBTl.png' },
    { name: 'Carrot Cake', imageUrl: 'https://i.imgur.com/qlpP1zi.png' },
    { name: 'Banana Bread', imageUrl: 'https://i.imgur.com/xg7mwZB.png' },
    { name: 'Chocolate Mousse', imageUrl: 'https://i.imgur.com/YS3XRhr.png' },
    { name: 'Panna Cotta', imageUrl: 'https://i.imgur.com/dwxLj7r.png' },
    { name: 'Cannoli', imageUrl: 'https://i.imgur.com/aZEiejB.png' },
    { name: 'Rice Pudding', imageUrl: 'https://i.imgur.com/06ZkqgE.png' },
    { name: 'Peanut Butter Cups', imageUrl: 'https://i.imgur.com/vFMkKIs.png' },
    { name: 'Blueberry Cobbler', imageUrl: 'https://i.imgur.com/Pmcvvvk.png' },
    { name: 'Creme Brulée', imageUrl: 'https://i.imgur.com/EPMiZAJ.png' },
    { name: 'Fruit Tart', imageUrl: 'https://i.imgur.com/dbfPuBl.png' },
    { name: 'French Macarons', imageUrl: 'https://i.imgur.com/ol0GBi9.png' },
    { name: 'Pineapple Upside-Down Cake', imageUrl: 'https://i.imgur.com/BC8X0Rk.png' },
    { name: 'Pumpkin Pie', imageUrl: 'https://i.imgur.com/QmtPNlz.png' },
    { name: 'Eclairs', imageUrl: 'https://i.imgur.com/hIcEHsj.png' },
    { name: 'S’mores', imageUrl: 'https://i.imgur.com/UBZwpRf.png' },
    { name: 'Mango Sorbet', imageUrl: 'https://i.imgur.com/GBtBIRc.png' },
    { name: 'Cinnamon Rolls', imageUrl: 'https://i.imgur.com/25jMr6c.png' },
    { name: 'Oreo Cheesecake', imageUrl: 'https://i.imgur.com/RXlfgHj.png' },
    { name: 'Raspberry Sorbet', imageUrl: 'https://i.imgur.com/caZI7Jr.png' },
    { name: 'Bread Pudding', imageUrl: 'https://i.imgur.com/LVTS1Iv.png' },
    { name: 'Peach Cobbler', imageUrl: 'https://i.imgur.com/AOcIQzn.png' },
    { name: 'Coconut Macaroons', imageUrl: 'https://i.imgur.com/l4HWp0Q.png' },
    { name: 'Churros', imageUrl: 'https://i.imgur.com/SHVdoi9.png' },
    { name: 'Pavlova', imageUrl: 'https://i.imgur.com/V8CVmcB.png' },
    { name: 'Chocolate Souffle', imageUrl: 'https://i.imgur.com/NJ74MWf.png' },
    { name: 'Profiteroles (cream puffs)', imageUrl: 'https://i.imgur.com/aAPepvJ.png' },
    { name: 'Cherry Clafoutis', imageUrl: 'https://i.imgur.com/rRYxUNc.png' },
    { name: 'Pistachio Baklava', imageUrl: 'https://i.imgur.com/pNhSwXe.png' },
    { name: 'Strawberry Rhubarb Pie', imageUrl: 'https://i.imgur.com/HBMKm0S.png' },
    { name: 'Lemon Sorbet', imageUrl: 'https://i.imgur.com/3Pr05YB.png' },
    { name: 'Caramel Popcorn', imageUrl: 'https://i.imgur.com/8NRS9PY.png' },
    { name: 'Raspberry Chocolate Torte', imageUrl: 'https://i.imgur.com/1VuzO87.png' },
    { name: 'Chocolate Lava Cake', imageUrl: 'https://i.imgur.com/HWYFxZO.png' },
    { name: 'Strawberry Yogurt Covered Pretzels', imageUrl: 'https://i.imgur.com/HQGC4xH.png' },
    { name: 'Pecan Pie', imageUrl: 'https://i.imgur.com/EF4o2Fj.png' },
    { name: 'Meringue Cookies', imageUrl: 'https://i.imgur.com/D3BYrtK.png' },
    { name: 'Chocolate Babka', imageUrl: 'https://i.imgur.com/DGQV0Jw.png' },
    { name: 'Funfetti Cupcakes', imageUrl: 'https://i.imgur.com/WuZqgPC.png' },
    { name: 'Pineapple Coconut Cake', imageUrl: 'https://i.imgur.com/2sGFsMH.png' },
    { name: 'Chocolate Dipped Fruit', imageUrl: 'https://i.imgur.com/yBci2w6.png' },
    { name: 'Lemon Meringue Pie', imageUrl: 'https://i.imgur.com/aXQ85L1.png' },
    { name: 'Snickerdoodles', imageUrl: 'https://i.imgur.com/gzEJJOf.png' },
    { name: 'Chocolate Turtles', imageUrl: 'https://i.imgur.com/eaNbmCj.png' },
    { name: 'Lotus Cheesecake', imageUrl: 'https://i.imgur.com/JbdQd4r.png' },
    { name: 'Pumpkin Spice Cupcakes', imageUrl: 'https://i.imgur.com/bb0Kez1.png' },
    { name: 'Chocolate strawberry Pizza', imageUrl: 'https://i.imgur.com/39lsfK7.png' },
    { name: 'Knafeh', imageUrl: 'https://i.imgur.com/WecBlxf.png' },
    { name: 'Mosaiko (Lazy cake)', imageUrl: 'https://i.imgur.com/bCkUXwC.png' },
    { name: 'Bougatsa', imageUrl: 'https://i.imgur.com/N7hxmGU.png' },
    { name: 'Tres leches cake', imageUrl: 'https://i.imgur.com/p8H7Gqq.png' },
    { name: 'Toffee Pudding', imageUrl: 'https://i.imgur.com/eefHZBK.png' },
    { name: 'Sugar Cookies', imageUrl: 'https://i.imgur.com/0MzbVRa.png' },
    { name: 'Classic Madeleine', imageUrl: 'https://i.imgur.com/4ntSrOq.png' },
    { name: 'Namourah', imageUrl: 'https://i.imgur.com/d6B27Aa.png' },
    { name: 'Baklava Cheesecake', imageUrl: 'https://i.imgur.com/LSO0g2s.png' },
    { name: 'Matcha Mochi', imageUrl: 'https://i.imgur.com/KShOVEF.png' },
    { name: 'Deep-Fried Milk', imageUrl: 'https://i.imgur.com/ILwAP3T.png' },
    { name: 'Custard', imageUrl: 'https://i.imgur.com/sOcEmxm.png' },
    { name: 'Peanut Chocolate Barfi', imageUrl: 'https://i.imgur.com/8gnAHGo.png' },
    { name: 'Truffles', imageUrl: 'https://i.imgur.com/zondY8H.png' },
    { name: 'Pain Perdu', imageUrl: 'https://i.imgur.com/n4GZsd3.png' },
    { name: 'Donuts', imageUrl: 'https://i.imgur.com/EeoTSlf.png' },
    { name: 'Pear Tarte with Cardamom Caramel Sauce', imageUrl: 'https://i.imgur.com/ZgHQe2d.png' },
    { name: 'Creme Caramel', imageUrl: 'https://i.imgur.com/wnuadzw.png' },
    { name: 'Almond Croissant', imageUrl: 'https://i.imgur.com/lzhWTCR.png' },
    { name: 'Nutella and Fruits Crepe', imageUrl: 'https://i.imgur.com/UFir7zX.png' },
    { name: 'Lemon Posset', imageUrl: 'https://i.imgur.com/b95F67f.png' },
    { name: 'Mango Sago with Coconut Milk', imageUrl: 'https://i.imgur.com/Fgd23SQ.png' },
    { name: 'Cookie Dough Balls', imageUrl: 'https://i.imgur.com/oI5K61P.png' },
    { name: 'Sour Patch Grapes', imageUrl: 'https://i.imgur.com/6plAp2g.png' },
    { name: 'Coffee Cookies ’N’ Cream Ice cream', imageUrl: 'https://i.imgur.com/6ywzVhR.png' },
    { name: 'Lemon Meringue Cheesecake', imageUrl: 'https://i.imgur.com/HmRGVkB.png' },
    { name: 'Pecan Pralines', imageUrl: 'https://i.imgur.com/3PwxS3a.png' },
    { name: 'Rice Krispie', imageUrl: 'https://i.imgur.com/pEmK4UO.png' },
    { name: 'Khao Niao Manning', imageUrl: 'https://i.imgur.com/MKMUGaB.png' },
    { name: 'Affogato', imageUrl: 'https://i.imgur.com/SJGAUfv.png' },
    { name: 'Avocado Parfait with Yogurt', imageUrl: 'https://i.imgur.com/MU98OPI.png' },
    { name: 'Caramel apples', imageUrl: 'https://i.imgur.com/19CCDYA.png' },
];

const colors = ['#0CC0DF', '#666666', '#A6A6A6', '#0E8FA6', '#D9D9D9'];
const sectors = Desserts.map((Dessert, index) => ({
    color: colors[index % colors.length],
    label: Dessert.name
}));


const rand = (m, M) => Math.random() * (M - m) + m;
const tot = sectors.length;
const spinEl = document.querySelector('#spin');
const ctx = document.querySelector('#wheel').getContext('2d');
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const friction = 0.991;
let angVel = 0;
let ang = 0;

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

function drawSector(sector, i) {
    const ang = arc * i;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, ang, ang + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();
    ctx.translate(rad, rad);
    ctx.rotate(ang + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#002c33';
    ctx.font = 'bold 12px Arial';
    ctx.fillText(sector.label, rad - 12, 4);
    ctx.restore();
}

function rotate() {
    const sector = sectors[getIndex()];
    console.log("Sector Label:", sector.label);

    if (sector) {
        ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;

        // Set the spin button to display the dessert image
        spinEl.style.backgroundImage = `url(${Desserts.find(d => d.name.toLowerCase() === sector.label.toLowerCase()).imageUrl})`;

        if (angVel < 0.002) {
            angVel = 0;
            displayDessertDetails(sector);
        }
    } else {
        console.error("Sector not found for label:", sector.label);
    }
}






function displayDessertDetails(sector) {
    const cleanedLabel = sector.label.trim().toLowerCase(); // Convert to lowercase
    console.log("Cleaned Label in displayDessertDetails:", cleanedLabel);

    const selectedDessert = detailedDesserts.find(c => c.name.toLowerCase() === cleanedLabel); // Ensure detailedDesserts is defined
    console.log("Selected Dessert in displayDessertDetails:", selectedDessert);

    document.getElementById('DessertName').textContent = selectedDessert ? selectedDessert.name : "Dessert Not Found";
    
    // Check if selectedDessert is defined before accessing properties
    if (selectedDessert && selectedDessert.imageUrl) {
        document.getElementById('DessertImage').src = selectedDessert.imageUrl;
        const ingredientsList = document.getElementById('ingredientsList');
        ingredientsList.innerHTML = '';
        selectedDessert.ingredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem);
        });
        const instructionsList = document.getElementById('instructionsList');
        instructionsList.innerHTML = ''; // Clear previous content
        selectedDessert.instructions.forEach(instruction => {
            const listItem = document.createElement('li');
            listItem.textContent = instruction;
            instructionsList.appendChild(listItem);
        });
    } else {
        console.error("Dessert details not found for label:", cleanedLabel);
    }
}


function frame() {
    if (!angVel) return;
    angVel *= friction;
    if (angVel < 0.002) {
        angVel = 0;
    }
    ang += angVel;
    ang %= TAU;
    rotate();
}

function engine() {
    frame();
    requestAnimationFrame(engine);
}

function init() {
    sectors.forEach(drawSector);
    rotate();
    engine();
    spinEl.addEventListener('click', () => {
        if (!angVel) angVel = rand(0.01, 0.03);
    });
}

// Initialize the spinning wheel and other functionalities
window.onload = function() {
    init();
};