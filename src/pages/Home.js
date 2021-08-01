import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  // page content
  const pageTitle = 'Home Page'
  const pageDescription = 'This is a Sample web apllication'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <div className="infra">
          <h3 className="text-center">Please visit Diagrams page to see drawings about this project's infrastructure</h3>
      </div>
    </div>
    
  )
}

export default Home