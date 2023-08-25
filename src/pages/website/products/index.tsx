import CardProductFilter from '@/components/CardProductFilter';
import CardFilter from '@/components/CardProductFilter';
import { Title } from '@/components/Title';
import ProductListScreen from '@/screen/Website/Products';

export default function ProductPage() {
  return (
    <>
      <Title title={'Products'} />
      <div className="row">
        <div className="col-9">
          <ProductListScreen />
        </div>
        <div className="col-3">
          <CardProductFilter />
        </div>
      </div>
    </>
  );
}
