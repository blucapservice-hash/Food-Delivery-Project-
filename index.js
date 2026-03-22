const foodItem = [
    { id: 1, name: 'Spicy Ambur Biryani', category: 'biryani', rating: 4.8, price: 18, img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500' },
    { id: 2, name: 'Cheesy Pepperoni', category: 'pizza', rating: 4.9, price: 22, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500' },
    { id: 3, name: 'Paneer Butter Masala', category: 'paneer', rating: 4.5, price: 15, img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500' },
    // { id: 4, name: 'Veg Manchurian', category: 'chinese', rating: 4.2, price: 12, img: 'https://images.unsplash.com/photo-1512058560550-427493597835?w=500'}
];

let cart = [];

function login() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    if(email === "admin@gmail.com" && pass === "admin@123") {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        renderItems(foodItem);
    } else {
        alert("Invalid Credentials");
    }
}

function renderItems(items) {
    const container = document.getElementById('food-items');
    container.innerHTML = items.map(item => `
        <div class="bg-white p-5 rounded-[40px] shadow-xl shadow-gray-100 border border-gray-50 group transition-all hover:-translate-y-2">
            <div class="relative mb-6">
                <img src="${item.img}" class="w-full h-48 object-cover rounded-[30px]">
                <div class="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-500">
                    ★ ${item.rating}
                </div>
            </div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">${item.name}</h4>
            <div class="flex justify-between items-center">
                <span class="text-2xl font-black text-gray-900">$${item.price}</span>
                <button onclick="addToCart(${item.id})" class="bg-gray-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-orange-500 transition-colors">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function filterCat(cat) {
    // Update button styles
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if(cat === 'all') return renderItems(foodItem);
    const filtered = foodItem.filter(i => i.category === cat);
    renderItems(filtered);
}

function addToCart(id) {
    cart.push(foodItem.find(i => i.id === id));
    document.getElementById('cart-count').innerText = cart.length;
}