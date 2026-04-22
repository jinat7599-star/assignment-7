import { NavLink } from "react-router-dom";
import { FaHouse, FaClock, FaChartSimple } from "react-icons/fa6";

const MENU_ITEMS = [
  { path: "/", icon: <FaHouse />, name: "Home" },
  { path: "/timeline", icon: <FaClock />, name: "Timeline" },
  { path: "/stats", icon: <FaChartSimple />, name: "Stats" },
];

const Navbar = () => {
  
  const computeNavLinkClass = ({ isActive }) => {
    const baseClasses = "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200";
    const statusClasses = isActive 
      ? "bg-green-900 text-white" 
      : "text-slate-400 hover:bg-slate-800 hover:text-white";
    
    return `${baseClasses} ${statusClasses}`;
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
         
        <h1 className="text-2xl font-bold text-purple-400 tracking-tight">
          Keen <span className="text-green-400">Keeper</span>
        </h1>

         
        <div className="flex gap-4">
          {MENU_ITEMS.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={computeNavLinkClass}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;