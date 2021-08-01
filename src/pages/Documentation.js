import Header from '../components/Header'
import Meta from '../components/Meta'
import infra from '../diagrams/case-diagram.png'
import pipeline from '../diagrams/pipeline.png'

const Documentation = () => {
  // page content
  const pageTitle = 'Infrastructure Diagrams'
  const pageDescription = 'This page shows projects documentation with diagrams'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <div className="infra">
          <h3 className="text-center">Infrastructure</h3>
          <img style={{height:'auto',width:'auto'}} src={ infra }/>
      </div>
      <div className="pipeline">
          <h3 className="text-center">Pipeline</h3>
          <img style={{height:'auto',width:'auto'}} src={ pipeline }/>
      </div>
    </div>
    
  )
}

export default Documentation