
import './styles/main.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import SkinCare from './sections/SkinCare'
import Review from './sections/Reviews'
import Footer from './components/Footer'
import Cta from './sections/Cta'
import Follow from './sections/Follow'
import Collection from './sections/Collection'

function App() {


  return (
    <>
      <Header />
      <main>
        <section id= 'hero' className='section'>
        <Hero />
        </section>
        <section id= 'follow' className='section'>
        <Follow />
        </section>
        <section id= 'collection' className='section'>
        <Collection />
        </section>
        <section id= 'skincare' className='section'>
        <SkinCare />
        </section>
        <section id= 'review' className='section'>
        <Review />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
