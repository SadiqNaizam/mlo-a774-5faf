import React from 'react';
import DateTimeDisplay from '../components/UtilityOverview/DateTimeDisplay';

/**
 * @page IndexPage
 * @description The main page of the application, designed to showcase the DateTime widget.
 * It provides a simple, full-screen layout that centers the widget, reflecting
 * its role as a standalone utility display.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      {/* 
        This page acts as the WidgetTemplate, providing the context and placement for the DateTimeDisplay.
        The layout centers the component for a focused presentation, fulfilling the requirement for
        a standalone page to display the widget.
      */}
      <DateTimeDisplay />
    </main>
  );
};

export default IndexPage;
