import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../SizeGuide/ProductService';

export default function DynamicColumnsDemo() {
  const [products, setProducts] = useState([]);
  const columns = [
    { field: 'code', header: 'Size to order' },
    { field: 'name', header: 'Chest size (cm)' },
    { field: 'category', header: 'Waist size (cm)' },
    { field: 'quantity', header: 'Tower basin (cm)' },
  ];

  useEffect(() => {
    ProductService.getProductsMini().then(data => setProducts(data));
  }, []);

  const rowColor = index => {
    return index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200';
  };

  return (
    <div className="mt-8">
      <DataTable value={products} className="min-w-50 bg-gray-300">
        {columns.map((col, i) => (
          <Column key={col.field} field={col.field} header={col.header} className={`h-[50px] ${rowColor(i)}`} />
        ))}
      </DataTable>
    </div>
  );
}
