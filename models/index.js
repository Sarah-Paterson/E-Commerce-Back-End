const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo( Category, {
  foreignKey: 'category_id',
  as: 'product_categories',
});


Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'category_products',
});

Product.belongsToMany( Tag, {
  through: {
    model: 'product_tag'
  },
  as: 'products_tags'
});

Tag.belongsToMany( Product, {
  through: {
    model: 'product_tag'
  },
  as: 'tags_for_products'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
