import React, { useState } from 'react';
import enTranslations from '../localization/en/translation.json';
import zhCNTranslations from '../localization/zh/translation.json';



interface Product {
  id: number;
  title: string;
  price?: number;
  description: string;
  category: string;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface Translations {
  header: {
    title: string;
    subtitle: string;
  };
  buttons: {
    addToCart: string;
    viewDetails: string;
  };
  products: Product[];
}
// Products Function localization
const DataComponent: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'zh-CN'>('en');

  const translations: { [key: string]: Translations } = {
    en: enTranslations,
    'zh-CN': zhCNTranslations,
  };
// Heading Change Function
  const currentTranslations = translations[language];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'zh-CN');
  };

  return (
    <div>
      <header>
        <h1>{currentTranslations.header.title}</h1>
        <h2>{currentTranslations.header.subtitle}</h2>
      </header>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="zh-CN">中文</option>
      </select>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentTranslations.products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
            )}
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            {product.price && <p>{product.price}</p>}
            {product.rating && (
              <p>
                {product.rating.rate} ({product.rating.count} )
              </p>
            )}
            <p>{product.description.substring(0, 100)}...</p>
            <button>{currentTranslations.buttons.addToCart}</button>
            <button>{currentTranslations.buttons.viewDetails}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataComponent;
