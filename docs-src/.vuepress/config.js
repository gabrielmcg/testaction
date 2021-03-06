module.exports = {
  title: 'Test action',
  dest: '../MVI1/',
  base: '/testaction/MVI1/',   
  plugins: ['vuepress-plugin-export'], 
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' }
    ],

    repo: 'testaction',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:

    docsRepo: 'https://gitlab.com/gabrielmcg/testaction',
    // if your docs are not at the root of the repo:
    docsDir: 'docs-src',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',

    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',


    sidebar: [
      '/summary'
       ]
  }
}

      
