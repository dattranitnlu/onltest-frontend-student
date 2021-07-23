import {RootPath} from '../router/routes';
import {ClipboardListIcon, CollectionIcon} from "@heroicons/react/outline";
import {ChevronDownIcon} from "@heroicons/react/solid";

const nav = [
    {
        _tag: 'NavItem',
        name: 'List Exams',
        icon: CollectionIcon({width: 22, height: 22}),
        to: RootPath.LIST_EXAMS
    },
    {
        _tag: 'NavItem',
        name: 'Exam Detail Page',
        icon: ClipboardListIcon({width: 22, height: 22}),
        to: RootPath.EXAM_DETAILS
    },
    {
        _tag: 'NavDropdown',
        name: 'PAGES',
        to: '#',
        icon: ChevronDownIcon({width: 20, height: 20}),
        _children: [
            {
                _tag: 'NavItem',
                name: 'Page 404',
                to: RootPath.PAGE_404,
            },
            {
                _tag: 'NavItem',
                name: 'Page 500',
                to: RootPath.PAGE_500,
            }
        ]
    }
];

export default nav;
