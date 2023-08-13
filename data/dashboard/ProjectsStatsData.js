import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Item 1",
       value : 10,
       icon: <Briefcase size={18}/>,
       // statInfo: '<span className="text-dark me-2">20</span> Completed' 
    },
    {
        id:2,
        title : "Item 2",
        value : 10,
        icon: <ListTask size={18}/>,
        // statInfo: '<span className="text-dark me-2">28</span> Completed' 
     },
     {
        id:3,
        title : "Item 3",
        value : 10,
        icon: <People size={18}/>,
        // statInfo: '<span className="text-dark me-2">1</span> Completed' 
     },
     {
        id:4,
        title : "Item 4",
        value : '70%',
        icon: <Bullseye size={18}/>,
        // statInfo: '<span className="text-dark me-2">5%</span> Completed' 
     }
];
export default ProjectsStats;
