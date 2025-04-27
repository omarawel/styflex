import { useState } from 'react';

interface SearchFilterProps {
  items: { name: string; category?: string; services?: string[] }[];
  placeholder: string;
  onFilter: (filteredItems: any[]) => void;
  type: 'category' | 'salon';
}

const SearchFilter: React.FC<SearchFilterProps> = ({ items, placeholder, onFilter, type }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = items
        .filter((item) =>
          type === 'category'
            ? item.name.toLowerCase().includes(value.toLowerCase())
            : item.name.toLowerCase().includes(value.toLowerCase()) ||
              item.services?.some((service) =>
                service.toLowerCase().includes(value.toLowerCase())
              )
        )
        .map((item) => item.name);
      setSuggestions(filteredSuggestions.slice(0, 5));
    } else {
      setSuggestions([]);
    }

    const filteredItems = items.filter((item) =>
      type === 'category'
        ? item.name.toLowerCase().includes(value.toLowerCase())
        : item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.services?.some((service) =>
            service.toLowerCase().includes(value.toLowerCase())
          )
    );
    onFilter(filteredItems);
  };

  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setQuery(suggestion);
                setSuggestions([]);
                const filteredItems = items.filter(
                  (item) => item.name.toLowerCase() === suggestion.toLowerCase()
                );
                onFilter(filteredItems);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchFilter;
