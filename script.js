
// Placeholder for future interactivity
document.querySelectorAll('.side-menu li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.side-menu li.active')?.classList.remove('active');
    item.classList.add('active');
  });
});
// Optional: Dynamic countdown timer
function updateCountdown(endTime) {
  const now = new Date().getTime();
  const distance = endTime - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

const endTime = new Date().getTime() + 4 * 24 * 60 * 60 * 1000; // 4 days from now
setInterval(() => updateCountdown(endTime), 1000);



// When a "Source now" button is clicked, show a message
document.querySelectorAll('.source-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('You clicked Source now!');
  });
});

// Optional: Add hover effects on items (if needed via JS)
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s ease';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

// Log the selected size when dropdown changes
const sizeSelect = document.getElementById('size-select');
sizeSelect.addEventListener('change', () => {
  console.log('Selected size:', sizeSelect.value);
});

// Add to cart button click
document.querySelector('.add-to-cart').addEventListener('click', () => {
  alert('Product added to cart!');
});




document.querySelector('.btn-primary').addEventListener('click', () => {
  alert('Inquiry sent!');
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
  alert('Go to seller profile!');
});

document.querySelector('.btn-order').addEventListener('click', () => {
  alert('Order placed!');
});

document.querySelector('.btn-save').addEventListener('click', () => {
  alert('Saved for later!');
});


document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active to clicked tab
      tab.classList.add('active');

      // Hide all content
      contents.forEach(content => content.classList.remove('active'));
      // Show matched content
      const tabName = tab.getAttribute('data-tab');
      document.getElementById(tabName).classList.add('active');
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  // 1️⃣ Grab cart items and prices
  const cartItems = document.querySelectorAll('.cart__item');
  
  let total = 0;

  cartItems.forEach(item => {
    // Get price text, remove "$", convert to number
    const priceText = item.querySelector('.cart__price').textContent.replace('$', '');
    const price = parseFloat(priceText);

    // Get quantity from selectbox text (e.g., "Qty 2")
    const qtyText = item.querySelector('.cart__selectbox').textContent.replace('Qty ', '');
    const qty = parseInt(qtyText, 10);

    // Add to total
    total += price * qty;
  });

  // 2️⃣ Show total somewhere
  // For now, let’s log it or alert. You could also add it to the DOM
  console.log(`Total price: $${total.toFixed(2)}`);

  // Optional: add to DOM if you want
  // const totalEl = document.createElement('div');
  // totalEl.className = 'cart__total';
  // totalEl.textContent = `Total: $${total.toFixed(2)}`;
  // document.querySelector('.cart').appendChild(totalEl);

  // 3️⃣ Handle buttons
  const checkoutBtn = document.querySelector('.cart__button--primary');
  const continueBtn = document.querySelector('.cart__button--outline');
  const removeAllBtn = document.querySelector('.cart__button--danger');

  checkoutBtn.addEventListener('click', () => {
    alert(`Proceeding to checkout! Total: $${total.toFixed(2)}`);
    // Redirect to payment/checkout page if needed
    // window.location.href = 'checkout.html';
  });

  continueBtn.addEventListener('click', () => {
    alert('Continuing shopping...');
    // Redirect back to product list, e.g.:
    window.location.href = 'listview.html';
  });

  removeAllBtn.addEventListener('click', () => {
    // Remove all cart items from DOM
    cartItems.forEach(item => item.remove());
    alert('All items removed from cart.');
    // Optionally reset total
    total = 0;
    console.log('Total price after removal: $0.00');
  });
});
