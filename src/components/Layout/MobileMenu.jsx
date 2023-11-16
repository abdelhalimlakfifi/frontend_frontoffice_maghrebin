import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function MobileMenu() {
    const MenuSection = ({ title, subSections }) => {
        const [showSubSections, setShowSubSections] = useState(false);
    
        return (
          <div className="mb-7">
            <div
              className="flex items-center justify-start cursor-pointer"
              onClick={() => setShowSubSections(!showSubSections)}
            >
              <div className="font-medium ">{title}</div>
              
                {showSubSections ? <span className="pi pi-angle-down  mx-4 md:mx-6"></span>
                : <span className="pi pi-angle-right mx-4 md:mx-6"></span>
            }
            
            </div>
            {showSubSections && subSections && (
              <div className="ml-4 my-4 ">
                {subSections.map((subsection, index) => (
                  <Link key={index} to={subsection.path} className="block my-5 ">
                    {subsection.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      };
    
  return (
    
        <div className="p-7 md:p-9 ">
            <div className="mb-4 flex flex-col text-sm">
          
          <Link to="/" className="font-medium mb-4 hover:text-orange-500">Check Our New Arrivals</Link>

          <Link to="/" className="font-medium my-4">Check Our Best Sellers</Link>


          
        
            </div>
        <MenuSection title="Femme" subSections={[{ title: 'View All', path: '/all' },{ title: 'Kaftan', path: '/Kaftan' },{ title: 'Djellaba', path: '/' },{ title: 'Takchita', path: '/' },{ title: 'Jabadour', path: '/Kaftan' },{ title: 'Selham', path: '/Kaftan' }]} className='active:underline' />
        <MenuSection title="Homme" subSections={[{ title: 'View All', path: '/all' },{ title: 'Djellaba', path: '/Kaftan' },{ title: 'Jabadour', path: '/' },{ title: 'Selham', path: '/' }]} />
        <MenuSection title="Kids" subSections={[{ title: 'View All', path: '/' }]} />
        <Link to="/" className="font-medium">Help</Link>
        </div>
  )
}

export default MobileMenu