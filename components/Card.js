export default function Card({ title, children }) {
  return (
    <div className="w-[400px] md:w-[600px] mx-auto ">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-100 px-4 py-3 flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm font-medium text-gray-700">{title}</div>
          <div className="w-16"></div> {/* Spacer for alignment */}
        </div>

        {/* Search Bar */}
        <div className="px-4 py-2 bg-gray-50">
          <div className="flex items-center bg-gray-200 rounded-lg px-3 py-1">
            <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className="bg-transparent border-none w-full text-sm text-gray-700 ml-2 focus:outline-none" type="text" placeholder="Search" />
          </div>
        </div>

        {/* Files List */}
        <div className="divide-y divide-gray-100 p-4 md:p-10">{children}</div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 flex justify-between items-center border-t border-gray-200">
          <span className="text-xs text-gray-500">1 items</span>
          <div className="flex space-x-4">
            <button className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-150"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
