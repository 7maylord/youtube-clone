import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? '#FC1503' : 'transparent',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '5px',
        }}
        key={category.name}
        aria-pressed={category.name === selectedCategory}
        aria-label={`Select ${category.name} category`}
      >
        <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

Categories.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Categories;
