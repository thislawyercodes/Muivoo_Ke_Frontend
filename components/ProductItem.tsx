"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardActions, IconButton, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { ProductCardProps } from '@/types';

const ProductItem: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorited, setFavorited] = useState(false);
  const [quantityInCart, setQuantityInCart] = useState(0);

  const handleFavoriteToggle = () => {
    setFavorited(!isFavorited);
  };

  const handleAddToCart = () => {
    setQuantityInCart(quantityInCart + 1);
  };

  return (
    <div className='product-card-container'>
      <Card className='product-content' style={{ maxWidth: '400px'}}>

        <CardContent
          sx={{ fontFamily: 'Manrope' }}>
          <img
            src={`${product.product_image}`}
            alt={product.title}
            style={{ width: '100%', height: '140px', objectFit: 'cover' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', padding: 'auto' }}>
            <h6 style={{ marginBottom: '8px',fontSize: '16px' }}>{product.title}</h6>
              <h6 style={{ marginBottom: '8px', color: 'textSecondary', fontSize: '12px' }}>{product.description}</h6>
              <h6 style={{ color: 'primary-green', fontSize: '16px' }}> <b> Ksh {product.price}</b></h6>
          </div>


          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
            <StarIcon color="success" />
            <StarIcon color="success" />
            <StarIcon color="action" />
            <StarIcon color="action" />
            <StarIcon color="action" />
          </div>
        </CardContent>

        <CardActions disableSpacing className="absolute right-0 bottom-[5px] z-[10]">
        <IconButton aria-label="add to favorites" onClick={handleFavoriteToggle} size="small">
          <FavoriteIcon color={isFavorited ? 'success' : 'action'} fontSize="small" />
        </IconButton>

        <Button
          onClick={handleAddToCart}
          color="success"
          style={{ background: 'primary-green', marginTop: '8px' }}
          size="small"
        >
          <AddShoppingCartIcon fontSize="small" />
        </Button>

          {quantityInCart > 0 && (
            <p style={{ color: 'textSecondary', marginLeft: '8px' }}>
              In Cart: {quantityInCart}
            </p>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductItem;
