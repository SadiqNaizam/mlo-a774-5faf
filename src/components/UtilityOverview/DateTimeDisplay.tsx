import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

/**
 * @interface DateTimeDisplayProps
 * @description Props for the DateTimeDisplay component.
 * @property {string} [className] - Optional additional class names for styling.
 */
interface DateTimeDisplayProps {
  className?: string;
}

/**
 * A component that displays the current date and time, updating every second.
 * The format is MM/DD HH:MM:SS.
 * @param {DateTimeDisplayProps} props - The component props.
 * @returns {React.ReactElement} The rendered DateTimeDisplay component.
 */
const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ className }) => {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second.
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted to prevent memory leaks.
    return () => {
      clearInterval(timerId);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  // Format the date and time according to the MM/DD and HH:MM:SS requirements.
  const formattedDate = format(currentDateTime, 'MM/dd');
  const formattedTime = format(currentDateTime, 'HH:mm:ss');

  return (
    <div
      className={cn(
        'flex flex-row items-center space-x-2 h-6 font-sans text-sm text-foreground',
        className
      )}
      aria-live="polite"
      aria-atomic="true"
      aria-label={`Current date and time is ${formattedDate} ${formattedTime}`}
    >
      <span>{formattedDate}</span>
      {/* Using a monospaced font for the time prevents layout shifts as the digits change. */}
      <span className="font-mono tracking-wider">{formattedTime}</span>
    </div>
  );
};

export default DateTimeDisplay;
