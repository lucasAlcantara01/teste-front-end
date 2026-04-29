import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Brands } from './components/layout/Brands';
import { CategoryGrid } from './components/layout/CategoryGrid';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero/Hero';
import { Partners } from './components/layout/Partners';
import { ProductShelf } from './feature/products/ProductsShelf';
import { Newsletter } from './components/layout/Newsletter';
import { Footer } from './components/layout/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Hero />
      <CategoryGrid />
      <ProductShelf hasCategory={true} />
      <Partners />
      <ProductShelf hasCategory={false} />
      <Partners />
      <Brands />
      <ProductShelf hasCategory={false} />
      <Newsletter />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
