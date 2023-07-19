// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo( Category, {
  // as: 'category_products',
  foreignKey: 'category_id',
  as: 'product_categories',
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'category_products',
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany( Tag, {
  through: {
    model: 'product_tag'
  },
  as: 'products_tags'
});

// Tags belongToMany Products (through ProductTag)

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
