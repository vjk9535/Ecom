import React from 'react'
import { Box, Typography } from '@mui/material';
export default function Home() {
    const items = [
      { id: 1, image: 'grocery.png', text: 'Grocery' },
      { id: 2, image: 'Mobile.png', text: 'Mobiles' },
      { id: 3, image: 'Fashion.png', text: 'Fashion' },
      { id: 4, image: 'Electronic.png', text: 'Electronics' },
      { id: 4, image: 'Furniture.png', text: 'Furnitures' },
    ];
  
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', '& > :not(style)': { m: 1 } }}>
        {items.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center', gap: 2 }}>
            <img src={item.image} alt={item.text} width={50} height={50} />
            <Typography variant="h6">{item.text}</Typography>
          </Box>
        ))}
      </Box>
    );
  }