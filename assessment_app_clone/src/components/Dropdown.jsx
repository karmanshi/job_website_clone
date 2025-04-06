import React, { useState } from 'react';

const Dropdown = ({placeholderText, dataList, onChange, labelText, showSearch}) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(placeholderText || 'Select an option');

  const filtered = dataList.filter(data =>
    data.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full">
      {labelText && <label className='font-bold my-5'>{labelText}</label>}
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white border border-gray-300 px-4 py-1 text-left rounded shadow-sm"
      >
        {selected}
      </button>

      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow max-h-60 overflow-y-auto">
          {showSearch && <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-200 outline-none"
          />}

          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                  setQuery('');
                  onChange(item)
                }}
                className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-400">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
