
interface NavigationDotsProps {
    active: string;
  }
  
const NavigationDots = ({ active }:NavigationDotsProps) => {
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
            <a 
            href={`#${item}`} 
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#313BAC' } : { } }
            />
        ))}
    </div>
  )
}

export default NavigationDots