/**
 * Site Configuration
 *
 * This is the ONLY file you need to edit to set up your community's site.
 * Everything else works out of the box.
 */

const SITE_CONFIG = {
    supabaseUrl: 'https://tvpijkaguncmycpozeqq.supabase.co',
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2cGlqa2FndW5jbXljcG96ZXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1ODMxODQsImV4cCI6MjEwODE1OTE4NH0.taS0dBHp0KWz_MYYndlHoy_RKNpgerJozUAosWUQ1Dc',
    communityName: 'pavlova-botc-stats',
    minGamesForLeaderboard: 1,

    // ELO settings
    defaultRating: 1500,    // Starting ELO for new players
    kFactor: 32,            // How much each game affects ratings (higher = more volatile)
};

// Export for use in other modules
// (Do not modify below this line)
export default SITE_CONFIG;
