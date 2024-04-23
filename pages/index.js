import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import style from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div>
        <div className={`${style.sections} ${style.sectionA}`}>
          <section className={style.sectionAInner}>
            <h1>Welcome to Boaz Poultry Farm</h1>
            <p className='lead'>
              At Boaz Poultry Farm, we raise the bar for poultry excellence. Our
              farm is more than just a source of premium products—it's a
              commitment to quality, sustainability, and animal welfare. Explore
              our farm-fresh eggs, tender chicken meat, and flavorful turkey,
              all produced with care and integrity. Join us in our mission to
              provide the best while nurturing a healthier planet. Welcome to
              Boaz Poultry Farm, where quality meets conscience.
            </p>
          </section>
        </div>
        <section className={style.sectionB}>
          <h1>WHAT WE OFFER</h1>
          <div className={style.sectionBInner}>
            <div className={style.curses}>
              <h4>Farm-fresh Eggs</h4>
              <p>
                Indulge in the rich, golden yolks of our farm-fresh eggs, laid
                by happy, well-cared-for hens. Perfect for breakfasts, baking,
                or any culinary creation that demands the best.
              </p>
            </div>
            <div className={style.curses}>
              <h4>Tender Chicken Meat</h4>
              <p>
                Savor the juicy tenderness of our chicken meat, raised with care
                and free from antibiotics or hormones. From succulent roasts to
                quick weeknight dinners, our chicken elevates every meal.
              </p>
            </div>
            <div className={style.curses}>
              <h4>Flavorful Turkey</h4>
              <p>
                Celebrate with the rich, savory flavor of our turkey, a
                centerpiece for special occasions or a delicious twist on
                everyday meals. Raised with dedication to quality, our turkey is
                a taste to remember.
              </p>
            </div>
          </div>
        </section>
        <section className={style.sectionD}>
          <div className={style.imgD}></div>
          <div className={style.sectionDInner}>
            <h1>WHY OUR FARM IS THE BEST</h1>
            <p>
              Quality: Premium eggs, chicken, and turkey. Sustainability:
              Eco-friendly practices for exceptional poultry. Welfare: Happy
              birds for superior meat and eggs. Community: Supporting local
              initiatives. Certifications: Trusted for safety and
              sustainability. Experience: Years of expertise in every product.
              Satisfaction: Your happiness, our priority.
            </p>
          </div>
        </section>
        <section className={style.sectionC}>
          <h1>Our Facilities</h1>
          <div className={style.sectionCInner}>
            <div className={style.campus}>
              <div className={style.imgA}></div>
            </div>
            <div className={style.campus}>
              <div className={style.imgB}></div>
            </div>
            <div className={style.campus}>
              <div className={style.imgC}></div>
            </div>
          </div>
        </section>

        {/* Proprietress */}
        <section className={style.admin}>
          <div className={style.adminTxt}>
            <h1>THE MANAGER</h1>
            <p>
              Sarah Lawson, our dedicated manager, leads Boaz Poultry Farm with
              a passion for quality, sustainability, and animal welfare. With
              years of experience, she ensures our farm meets the highest
              standards in every aspect. From overseeing sustainable practices
              to caring for our birds, Sarah's commitment to excellence shines
              through in our premium poultry products.
            </p>
          </div>
          <div className={style.adminImgBg}>
            <div className={style.adminImg}></div>
          </div>
        </section>
      </div>
    </>
  );
}
