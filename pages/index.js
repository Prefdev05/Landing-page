import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import products from '../data/product';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



export default function Home() {
  // Seleccionamos algunos productos para ofertas
  const offerProducts = products.slice(0, 2);
  const regularProducts = products.slice(2);

  return (
    
    <div className={styles.container}>
      <Head>
        <title>SportStore - Tienda Deportiva</title>
        <meta name="description" content="Tienda de productos deportivos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
      <Navbar></Navbar>
      </nav>
      <main className={styles.main}>
        <header className={`${styles.header} animate-fade-in`}>
          <h1>SportStore</h1>
          <p>Encuentra los mejores productos deportivos con increíbles ofertas</p>
        </header>

        <section className={styles.offerSection}>
          <marquee direction="left">
          <h2 className={styles.sectionTitle}>Ofertas Destacadas</h2>
          </marquee>
          <div className={styles.productGrid}>
            {offerProducts.map(product => (
              <ProductCard key={product.id} product={product} isOffer={true} />
            ))}
          </div>
        </section>

        <section className={styles.regularProductsSection}>
          <h2 className={styles.sectionTitle}>Más Productos</h2>
          <div className={styles.productGrid}>
            {regularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <div className={styles.Footer}>
      <Footer></Footer>
      </div>
    </div>
  );
}