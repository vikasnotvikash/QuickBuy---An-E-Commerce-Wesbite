import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search , showSearch } = useContext(ShopContext);
  const [showfilter, setshowfilter] = useState(false);
  const [FilterProduct, setFilterProduct] = useState([])
  const [category, setcategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')



  //Condition Check:
  //If the value is already in the Category array, it removes the value.
  //If the value is not in the Category array, it adds the value to the array.
  
  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setcategory(prev => [...prev, e.target.value])
    }
  }

  const togglesubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }




  //This line creates a shallow copy of the products array using the slice() method. 
  //This ensures that the original products array remains unchanged when we apply filters.

  //This line filters the copyProducts array. 
  //It uses the filter method to include only those items whose Category property 
  //is present in the Category array. The includes method checks if the item.Category is in the 
  //Category array.



  const applyFilter = () => {

    let copyProducts = products.slice();

    //item.name.toLowerCase(): Converts the name property of each item in copyProducts to lowercase.
    //search.toLowerCase(): Converts the search string to lowercase.
    //.includes(...): Checks if the lowercase name contains the lowercase search string.

    if(showSearch && search) {
      copyProducts = copyProducts.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) 
    }

    if (category.length > 0) {
      copyProducts = copyProducts.filter(item => category.includes(item.category))
    }
    
    if (subCategory.length > 0) {
      copyProducts = copyProducts.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProduct(copyProducts)
  } 



  //This line sorts the filtered products array based on the selected sort (Price based) option.

  const sortProduct = () => {

    let fpCopy = FilterProduct.slice()

    switch (sortType)
    {
      case 'low to high':
        setFilterProduct(fpCopy.sort((a,b) => a.price - b.price))
        break;

      case 'high to low':
        setFilterProduct(fpCopy.sort((a,b) => b.price - a.price)) 
        break;
      
      default: 
        applyFilter()
        break;
    }
  }

  // useEffect(() => { 
  //   setFilterProduct(products)
  // }, [])


  useEffect(() => {
   applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct()
   }, [sortType])
 

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-5 border-t'>

      {/* filter options */}

      <div className='min-w-60'>
        <p onClick={() => setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden  ${showfilter ? "rotate-90" : ""}`} />
        </p>

        {/* Category filter  */}

        <div className={`border border-slate-400 pl-5 py-3 mt-6 ${showfilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-slate-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* SubCategory filter  */}

        <div className={`border border-slate-400 pl-5 py-3 my-5 ${showfilter ? " " : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-slate-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={togglesubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={togglesubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={togglesubCategory} /> Winterwear
            </p>
          </div>
        </div>

      </div>

      {/* Right side */}

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product sort */}

          <select onChange={(e) => setSortType(e.target.value) } className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low to high">Sort by: Low to High</option>
            <option value="high to low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            FilterProduct.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection