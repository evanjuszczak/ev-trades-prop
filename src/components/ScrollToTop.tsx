import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * when navigating between routes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "instant" for immediate scrolling without animation
    });
  }, [pathname]);

  return null; // This component doesn't render anything
} 