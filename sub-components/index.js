/**
 * The folder sub-components contains sub component of all the pages,
 * so here you will find folder names which are listed in root pages.
 */

// sub components for /pages/dashboard
import ActiveProjects from 'sub-components/dashboard/ActiveProjects';
import TasksPerformance from 'sub-components/dashboard/TasksPerformance';
import Teams from 'sub-components/dashboard/Teams';

// sub components for /pages/profile
import AboutMe from 'sub-components/profile/AboutMe';
import ActivityFeed from 'sub-components/profile/ActivityFeed';
import MyTeam from 'sub-components/profile/MyTeam';
import ProfileHeader from 'sub-components/profile/ProfileHeader';
import ProjectsContributions from 'sub-components/profile/ProjectsContributions';
import RecentFromBlog from 'sub-components/profile/RecentFromBlog';

// sub components for /pages/settings
import EmailSetting from 'sub-components/settings/EmailSetting';
import GeneralSetting from 'sub-components/settings/GeneralSetting';
import Preferences from 'sub-components/settings/Preferences';


export {
   ActiveProjects,
   TasksPerformance,
   Teams,
   
   AboutMe,
   ActivityFeed,
   MyTeam,
   ProfileHeader,
   ProjectsContributions,
   RecentFromBlog,

   EmailSetting,  
   GeneralSetting, 
   Preferences
};