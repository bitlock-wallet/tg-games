import { redirect } from 'next/navigation';

/**
 * This component is the root path (/) and immediately redirects 
 * the user to the dedicated game page.
 */
export default function HomeRedirect() {
  // Use the Next.js redirect function to move the user to the desired route.
  redirect('/lumberjack');
}