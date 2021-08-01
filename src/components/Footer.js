const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize'>
         created by berat can berkol {year}
      </footer>
    </>
  )
}

export default Footer
