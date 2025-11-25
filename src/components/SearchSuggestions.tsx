import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";

interface SuggestableItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
}

interface SearchSuggestionsProps {
  searchQuery: string;
  suggestions: SuggestableItem[];
  onSuggestionClick: (suggestion: SuggestableItem) => void;
  onClearSearch: () => void;
  isVisible: boolean;
  maxSuggestions?: number;
}

export function SearchSuggestions({
  searchQuery,
  suggestions,
  onSuggestionClick,
  onClearSearch,
  isVisible,
  maxSuggestions = 5
}: SearchSuggestionsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  // Reset selected index when suggestions change
  React.useEffect(() => {
    setSelectedIndex(-1);
  }, [suggestions]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible || suggestions.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex(prev =>
            prev < Math.min(suggestions.length, maxSuggestions) - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0) {
            onSuggestionClick(suggestions[selectedIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          onClearSearch();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, suggestions, selectedIndex, maxSuggestions, onSuggestionClick, onClearSearch]);

  if (!isVisible || suggestions.length === 0) {
    return null;
  }

  const displayedSuggestions = suggestions.slice(0, maxSuggestions);

  // Highlight matching text
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-orange-100 text-orange-600 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
        style={{ top: "60px" }}
      >
        {/* Header */}
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-2 text-gray-600">
            <AiOutlineSearch size={16} />
            <span className="text-sm font-medium">
              Saran untuk "{searchQuery}"
            </span>
            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
              {suggestions.length} hasil
            </span>
          </div>
        </div>

        {/* Suggestions List */}
        <div className="max-h-64 overflow-y-auto">
          {displayedSuggestions.map((suggestion, index) => (
            <motion.button
              key={suggestion.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSuggestionClick(suggestion)}
              className={`w-full text-left px-4 py-3 transition-all duration-200 border-b border-gray-50 last:border-b-0 group hover:bg-orange-50 ${selectedIndex === index ? "bg-orange-50 border-orange-100" : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                      <div
                        style={{
                          color: '#ea580c',
                          transform: selectedIndex === index ? 'scale(1.1)' : 'scale(1)',
                          transition: 'transform 0.2s'
                        }}
                      >
                        <AiOutlineSearch size={16} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-800 truncate group-hover:text-orange-600 transition-colors">
                        {highlightMatch(suggestion.title, searchQuery)}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                        {highlightMatch(suggestion.excerpt, searchQuery)}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                          {suggestion.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <div
                    style={{
                      color: selectedIndex === index ? '#ea580c' : '#9ca3af',
                      transform: selectedIndex === index ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'all 0.2s'
                    }}
                  >
                    <AiOutlineArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        {suggestions.length > maxSuggestions && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              Dan {suggestions.length - maxSuggestions} program kerja lainnya...
            </p>
          </div>
        )}

        {/* Keyboard hints */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs">↑↓</kbd>
              Navigasi
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs">Enter</kbd>
              Pilih
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs">Esc</kbd>
              Tutup
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
