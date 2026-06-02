import React from "react";

export function Select({ value, onValueChange, children, className = "" }) {
  const [open, setOpen] = React.useState(false);
  const selectRef = React.useRef(null);
  
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <div className={`relative ${className}`} ref={selectRef}>
      {React.Children.map(children, child => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, { onClick: () => setOpen(!open), value });
        }
        if (child.type === SelectContent && open) {
          return React.cloneElement(child, { onSelect: (val) => { onValueChange(val); setOpen(false); } });
        }
        return child;
      })}
    </div>
  );
}

export function SelectTrigger({ children, onClick, value, className = "" }) {
  const selectedText = React.Children.toArray(children).find(
    child => child.type === SelectValue
  )?.props.children || value;
  
  return (
    <button
      onClick={onClick}
      className={`flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      <span>{selectedText}</span>
      <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export function SelectValue({ children }) {
  return children;
}

export function SelectContent({ children, onSelect, className = "" }) {
  return (
    <div className={`absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md ${className}`}>
      {React.Children.map(children, child => {
        if (child.type === SelectItem) {
          return React.cloneElement(child, { onSelect });
        }
        return child;
      })}
    </div>
  );
}

export function SelectItem({ children, value, onSelect, className = "" }) {
  return (
    <div
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-accent hover:text-accent-foreground ${className}`}
      onClick={() => onSelect(value)}
    >
      {children}
    </div>
  );
}