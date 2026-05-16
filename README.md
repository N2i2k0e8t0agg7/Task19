# Laundry Service Booking Website
A modern and responsive Laundry Service Booking web application built using HTML, CSS, and JavaScript.
Users can:
- Browse laundry services
- Add services to cart
- View total amount dynamically
- Book services
- Receive validation messages for empty cart actions

# Features
## Service Browsing
- Display laundry services one by one
- Skip between services
- Clean service card UI

## Cart System
- Add services into cart
- Dynamic cart rendering
- Serial number generation
- Real-time total amount calculation

## Booking Validation
- Prevent booking when cart is empty
- Show warning message if no items are added
- Show booking success message after adding items

## UI Enhancements
- Modern card-based design
- Fixed non-scroll layout
- Responsive structure
- Hover effects and polished buttons

# Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome Icons

# Functionalities

## Add to Cart
When user clicks the **Add** button:
- Selected service is added to cart
- Cart UI updates automatically
- Total amount updates dynamically

## Skip Service
When user clicks **Skip**:
- Next service card appears

## Book Now
### If cart is empty:
Displays:
```text
⚠ Please add at least one item into cart
```

### If cart contains items:
Displays:
```text
✅ Booking Successful
```

---

# Dynamic Total Calculation
The total amount is automatically calculated using JavaScript by summing all cart item prices.
Example:
```javascript
sum += Number(element.Price.replace("₹", "").replace(".00", ""))
```

# Responsive Design
The website adjusts automatically for:
- Desktop
- Tablet
- Mobile devices

# Future Improvements

- Remove item from cart
- Quantity selector
- Payment integration
- Backend database support
- User authentication
- Order history
- Real booking API

# Author
Developed by Niket Aggarwal
