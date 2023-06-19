import styles from './styles'
import { 
  Hero,
  Navbar,
  Stats,
  Bussiness,
  Testimonials,
  Clients,
  CTA,
  Footer,
  CardDeal
} from '@/components'
import { Button, FeedbackCard } from '@/common'

const App = () => (
  <main className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Bussiness />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </main>
)

export default App
