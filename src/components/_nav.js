import bxChevronDown from "@iconify/icons-bx/bx-chevron-down";

import {RootPath} from '../router/routes';

const nav = [
    {
        _tag: 'NavItem',
        name: 'List Exams',
        to: RootPath.LIST_EXAMS
    },
    {
        _tag: 'NavItem',
        name: 'Exam Detail Page',
        to: RootPath.EXAM_DETAILS
    },
    {
        _tag: 'NavDropdown',
        name: 'PAGES',
        to: '#',
        icon: bxChevronDown,
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
