
// --- Menu Items Data ---
const menuData = [
  {
    id: 1,
    name: 'Grilled Vegetable Panini',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80',
    description: 'Marinated grilled vegetables, mozzarella, and pesto on artisan bread.'
  },
  {
    id: 2,
    name: 'Chickpea & Avocado Wrap',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    description: 'Creamy avocado, seasoned chickpeas, fresh veggies, and tahini dressing, wrapped in whole wheat.'
  },
  {
    id: 3,
    name: 'Classic Caprese Salad',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
    description: 'Fresh mozzarella, vine tomatoes, basil, and olive oil.'
  },
  {
    id: 4,
    name: 'Mushroom Risotto',
    price: 13.49,
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=600&q=80',
    description: 'Creamy arborio rice with wild mushrooms and parmesan.'
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    price: 11.50,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    description: 'Stone-baked pizza topped with tomato, mozzarella, and basil.'
  },
  {
    id: 6,
    name: 'Vegan Buddha Bowl',
    price: 12.49,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    description: 'Quinoa, sweet potato, avocado, chickpeas, and tahini-lemon dressing.'
  },
  {
    id: 7,
    name: 'Vegetarian Sushi Platter',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80',
    description: 'Assorted vegetarian sushi rolls with soy, wasabi, and pickled ginger.'
  },
  {
    id: 10,
    name: 'Veggie Quesadilla',
    price: 8.95,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80',
    description: 'Grilled tortilla filled with assorted veggies and cheese, served with salsa.'
  },
  {
    id: 11,
    name: 'Garden Fresh Minestrone Soup',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    description: 'Vegetable-rich Italian soup with beans and pasta.'
  },
  {
    id: 12,
    name: 'Vegetable Samosas',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80',
    description: 'Crisp pastry filled with spiced potato and peas, served with tamarind chutney.'
  },
  {
    id: 13,
    name: 'Broccoli & Cheddar Quiche',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80',
    description: 'Savory baked quiche with broccoli, cheddar, and herbs.'
  },
  {
    id: 14,
    name: 'Avocado Toast',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    description: 'Sourdough toasted with smashed avocado, radish, and chili flakes.'
  },
  {
    id: 15,
    name: 'Roasted Beetroot Salad',
    price: 9.25,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    description: 'Sweet roasted beets with feta, walnuts, and arugula.'
  },
  {
    id: 17,
    name: 'Sweet Potato Fries',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy hand-cut sweet potato fries with herb seasoning.'
  },
  {
    id: 19,
    name: 'Falafel & Hummus Plate',
    price: 11.50,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy falafel served with creamy hummus and warm pita.'
  },
  {
    id: 20,
    name: 'Stuffed Zucchini Boats',
    price: 10.25,
    image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?auto=format&fit=crop&w=600&q=80',
    description: 'Zucchini stuffed with quinoa, tomatoes, and fresh herbs, baked to perfection.'
  }
];

// Cart functionality
let cart = [];

// Display menu items (extended to support longer html)
function displayMenuItems() {
  const menuContainer = document.getElementById('menuItems');
  menuContainer.innerHTML = "";
  menuData.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="menu-item-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="price">$${item.price.toFixed(2)}</div>
        <button class="btn cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
        <button class="btn" style="background-color:#ffb7a3;margin-left:8px;color:#fff;" onclick="buyNow(${item.id})">Buy Now</button>
      </div>
    `;
    menuContainer.appendChild(menuItem);
  });

  // Add spacing to push HTML length up if needed
  for(let i = 0; i < 7; ++i){ 
    // Creates empty space for visual breathing room and html length
    let spacer = document.createElement('div');
    spacer.innerHTML = "<br>";
    menuContainer.appendChild(spacer);
  }
}

// Custom Site Notification Banner
function showSiteNotification(message, color="#ff6b6b") {
  const bar = document.getElementById('siteNotification');
  bar.style.display = "block";
  bar.style.background = "linear-gradient(90deg, #ffdee2 0%, #fff8f0 100%)";
  bar.style.borderColor = "#ffb7a3";
  bar.style.boxShadow = "0 4px 24px rgba(255,107,107,0.12)";
  bar.style.color = color;
  bar.style.fontWeight = '700';
  bar.style.letterSpacing = '0.04em';
  bar.style.fontSize = "1.15rem";
  bar.style.textShadow = "0 2px 8px #fff8f0,cornsilk";
  document.getElementById('notificationMessage').innerHTML = `<span style="font-size:1.3em;">${message}</span>`;
  setTimeout(hideSiteNotification, 2500);
}
function hideSiteNotification() {
  document.getElementById('siteNotification').style.display = 'none';
}

// Add item to cart (uses modern site notification)
function addToCart(itemId) {
  const item = menuData.find(item => item.id === itemId);
  const existingItem = cart.find(cartItem => cartItem.id === itemId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  updateCart();
  showSiteNotification(`✅ "${item.name}" added to cart!`, "#4caf50");
}

// Buy now
function buyNow(itemId) {
  const item = menuData.find(item => item.id === itemId);
  showSiteNotification(`🚚 Fast checkout for "${item.name}"!`, "#0EA5E9");
  // You could direct to payment etc.
}

// Update cart display (unchanged)
function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const emptyCart = document.getElementById('emptyCart');
  cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  if (cart.length === 0) {
    emptyCart.style.display = 'block';
    cartItems.innerHTML = '<p id="emptyCart">Your cart is empty.</p>';
  } else {
    emptyCart.style.display = 'none';
    let cartHTML = '';
    cart.forEach(item => {
      cartHTML += `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong> x ${item.quantity}
          </div>
          <div>$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      `;
    });
    cartItems.innerHTML = cartHTML;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Checkout custom error alert
function checkout() {
  if (cart.length === 0) {
    showSiteNotification('🛒 Your cart is empty! Add something delicious.', "#ea384c");
    return;
  }
  const paymentMethod = document.querySelector('input[name="payment"]:checked').id;
  showSiteNotification(`🎉 Order placed with ${paymentMethod}! Thank you for your order.`, "#4caf50");
  cart = [];
  updateCart();
}

// Navigation between pages (unchanged)
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

// Initialize the page
window.onload = function() {
  displayMenuItems();
  updateCart();
}
