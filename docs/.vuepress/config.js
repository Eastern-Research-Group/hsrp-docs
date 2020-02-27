module.exports = {
    base: '/',
    title: 'HSRP App Documentation',
    description:
        'Documentation for HSRP Applications RADAR and I-WASTE',
    themeConfig: {
        nav: [
            { text: 'Laravel', link: '/laravel/file-structure.html' },
            { text: 'Vue', link: '/vue/file-structure.html' },
            { text: 'Github', link: 'https://github.com/Eastern-Research-Group/hsrp-docs' },
        ],
        sidebar: [
            '/',
            {
                title: 'Laravel',
                collapsable: false,
                children: [
                    'laravel/file-structure',
                    'laravel/command-line',
                    'laravel/new-endpoint',
                ],
            },
            {
                title: 'Vue',
                collapsable: false,
                children: [
                    'vue/file-structure',
                    'vue/scripts'
                ],
            },
        ],
    },
};
