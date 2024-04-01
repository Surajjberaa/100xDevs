export const SideBar = ({ children }) => {
  return (
    <div className="flex h-full mr-56"
    style={{
      scrollbarWidth: "thin", /* "auto" or "thin" depending on browser support */
      scrollbarColor: "#0f0f0f #1E293B", /* Set the color of the thumb and track */
      
    }}
    >
      <div className="overflow-y-auto overflow-x-hidden flex flex-col items-start  flex-shrink-0 p-4 space-y-4 bg-black-900 text-white fixed" style={{ maxHeight: '100vh' }}>
        {children}
      </div>
    </div>
  );
};
