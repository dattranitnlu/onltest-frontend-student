import bxChevronDown from "@iconify/icons-bx/bx-chevron-down";

const nav = [
    // {
    //     _tag: 'NavItem',
    //     name: 'LOGIN',
    //     to: '/login',
    //     icon: bxChevronDown
    // },
    {
        _tag: 'NavItem',
        name: 'Exam Detail Page',
        to: '/exam-details'
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
                to: '/404',
            },
            {
                _tag: 'NavItem',
                name: 'Page 500',
                to: '/500',
            }
        ]
    }
];

export default nav;
