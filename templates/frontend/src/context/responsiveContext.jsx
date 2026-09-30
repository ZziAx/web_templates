// import { useContext } from "react";
// import { createContext } from "react";
// import { useMediaQuery } from 'react-responsive';

// const ResponsiveContext = createContext();

// //   mobile: 0,
// //   mobile_md: 500,
// //   mobile_lg: 800,
// //   tablet: 1000,
// //   laptop: 1500

// export const ResponsiveProvider = ({ children }) => {
//   // --- Define your breakpoints here ---
//   const isMobileSm = useMediaQuery({ maxWidth: 500 });  
//   const isMobileMd = useMediaQuery({minWidth:500});  
//   const isMobileLg = useMediaQuery({ minWidth: 800}); 
//   const isTablet   = useMediaQuery({ minWidth: 1000}); 
//   const isDesktop  = useMediaQuery({ minWidth: 1500 });  

//   const value = {
//     isMobileSm,
//     isMobileMd,
//     isMobileLg,
//     isTablet,
//     isDesktop
//   };

//   return (
//     <ResponsiveContext.Provider value={value}>
//       {/* Children will be rendered here, potentially including BrowserRouter */}
//       {children} 
//     </ResponsiveContext.Provider>
//   );
// };

// // Custom hook to easily consume the context
// export const useResponsive = () => {
//   const context = useContext(ResponsiveContext);
//   if (context === undefined) {
//     throw new Error('useResponsive must be used within a ResponsiveProvider');
//   }
//   return context;
// };

// export default ResponsiveProvider;