export default ["Accessories", "Active", "Active", "Casual", "Dresses", "Gifts", "Jeans", "Kids", "Mens", "New Arrivals", "Nike", "Outdoor", "Pants", "Running", "Sales", "Shoes", "Shorts", "Skirts", "Socks", "Womens", "Workwear"].map(function (tag) {
  return {
    label: tag,
    value: tag.toLowerCase()
  };
});