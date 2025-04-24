'use client';
import Footer from '@/app/shared/components/layout/Footer/Footer';
import { Product } from '@/app/shared/components/layout/Product/Product';
import classNames from 'classnames';
import s from "@/app/shared/components/routes/Home/HomeListProducts/HomeListProducts.module.scss"
import { homeListContent } from '@/app/shared/components/routes/Home/HomeListProducts/homeListProductsData';
import React, { useState } from 'react';

export default function Favorite() {

  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const cx = classNames.bind(s);  


  return (
    <div>
      Favorite
      <div className={s.HomeListProducts__container}>
        {homeListContent[currentCategory].products.map((i, idx) => (
          <div key={idx}>
            <Product title={i.title} id={i.id} img={i.img} price={i.price} isLiked={i.isLiked} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
