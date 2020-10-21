/*const portfolio = [
  {
    title: 'Virtuele Campus',
    synopsis: 'Eindopdracht: Arteveldehogeschool Campus Mariakerke in een virtuele, driedimensionale wereld. Alle 3D-assets zijn zelf gemodelleerd.',
    thumbnail: 'https://dl.airtable.com/.attachments/adf3431d24498da1d75b548422ce9669/75f0f611/mixed-reality-2018-2019_Virtuele-Campus_01.png',
    likes: Math.floor(Math.random() * 100),
    views: Math.floor(Math.random() * 100),
    assets: [
      {
        type: 'image',
        title: 'Virtuele Campus - IMG 001',
        link: 'https://dl.airtable.com/.attachments/adf3431d24498da1d75b548422ce9669/75f0f611/mixed-reality-2018-2019_Virtuele-Campus_01.png',
      },
      {
        type: 'image',
        title: 'Virtuele Campus - IMG 003',
        link: 'https://dl.airtable.com/.attachments/286d1a48fb0106f22f78b1f8023209f7/f833c891/mixed-reality-2018-2019_Virtuele-Campus_03.png',
      },
      {
        type: 'image',
        title: 'Virtuele Campus - IMG 004',
        link: 'https://dl.airtable.com/.attachments/b37720b639adeb8cc3e3610e8625aa0c/25cfcfbe/mixed-reality-2018-2019_Virtuele-Campus_04.png',
      }
  
    ],
  }
]*/

( function () {

const projects = [ {
  title: 'Virtuele Campus',
  synopsis: 'Eindopdracht: Arteveldehogeschool Campus Mariakerke in een virtuele, driedimensionale wereld. Alle 3D-assets zijn zelf gemodelleerd.',
  thumbnail: 'https://dl.airtable.com/.attachments/adf3431d24498da1d75b548422ce9669/75f0f611/mixed-reality-2018-2019_Virtuele-Campus_01.png',
  likes: Math.floor(Math.random() * 1000),
  views: Math.floor(Math.random() * 2000 + 1000),

  assets: [
    {
      type: 'image',
      title: 'Virtuele Campus - IMG 001',
      link: 'https://dl.airtable.com/.attachments/adf3431d24498da1d75b548422ce9669/75f0f611/mixed-reality-2018-2019_Virtuele-Campus_01.png',
    },
    {
      type: 'image',
      title: 'Virtuele Campus - IMG 003',
      link: 'https://dl.airtable.com/.attachments/286d1a48fb0106f22f78b1f8023209f7/f833c891/mixed-reality-2018-2019_Virtuele-Campus_03.png',
    },
    {
      type: 'image',
      title: 'Virtuele Campus - IMG 004',
      link: 'https://dl.airtable.com/.attachments/b37720b639adeb8cc3e3610e8625aa0c/25cfcfbe/mixed-reality-2018-2019_Virtuele-Campus_04.png',
    }

  ],
},

{
  title: "LET'S PRETEND THE 80'S NEVER HAPPENED",
  synopsis: 'Maak een superboeiende en ultra-creatieve compositie met een vette knipoog naar de jaren 80.',
  thumbnail: 'https://dl.airtable.com/.attachments/de1192fa16970f3193b2d5eb36f03544/4a7b4a2a/A_5_Otti_Ekene_sm.jpg',
  likes: Math.floor(Math.random() * 1000),
  views: Math.floor(Math.random() * 2000),

  assets: [
    {
      type: 'image',
      title: "LET'S PRETEND THE 80'S NEVER HAPPENED Image 001",
      link: 'https://dl.airtable.com/.attachments/1bbd7e036d71d1b2ac5e544cfe9a38f8/5f37cb9b/A_5_Rossignol_Babette_opt.jpg'
    },

    {
      type: 'image',
      title: "LET'S PRETEND THE 80'S NEVER HAPPENED Image 006",
      link: 'https://dl.airtable.com/.attachments/d4dd340f705845a128aa521ef30ed32e/192ec98c/F_5_Dusza_Dawid2.jpg',
    }
  ],
}
]

function convertProject (project) {
  let tempStr = '';
  project.forEach(function (pro, index) {
    const assets = convertAssetsToString(pro.assets);
    const createDate = dateCreatedAndModified();
    tempStr += `
    ========================================================================
    |                        PORTFOLIO                                     |
    ========================================================================
    Project ${index + 1}:\t${pro.title}
    ========================================================================
    Synopsis:\t\t${pro.synopsis}\n
    Thumbnail URL:\t${pro.thumbnail}\n
    Likes:\t\t${pro.likes}\n
    Views:\t\t${pro.views}\n
    ${createDate}
    -------------------------------------------------------------------------
    Assets
    -------------------------------------------------------------------------
    ${assets}
    =========================================================================`;
  });
  return tempStr;
};

const ShowProjectsInConsole = `${convertProject(projects)}`
console.log(ShowProjectsInConsole);

function convertAssetsToString (assets) {
  let tempStr = '';
  assets.forEach(function (ast, index) {
    tempStr += `Asset ${index + 1}:\t\t${ast.title}\t(type: ${ast.type})\n\t\t\t${ast.link}\n    `;
  });
  return tempStr;
};

      /*return `${ass.title ? ass.title : '\t'}\t${ass.link}${index < asset.length - 1 ? '\n' : ''}`;*/
 

function dateCreatedAndModified () {
  const dateCreated = new Date(1603188214361);
  const dateModified = new Date(1603269071079);
  return `Created At:\t\t${dateCreated}\n
    Modified at:\t${dateModified}`;
}

/*const generateProject = `
=======================================================================
|                        PORTFOLIO                                    |
=======================================================================
Project 1: ${projects.title}
=======================================================================
Synopsis: ${projects.synopsis}
Thumbnail: ${projects.thumbnail}
Likes: ${projects.likes}
Views: ${projects.views}
${dateCreatedAndModified()}
-----------------------------------------------------------------------
Assets
-----------------------------------------------------------------------
${convertAssetsToString(projects.assets)}
=======================================================================
Project 2: ${projects.title}
=======================================================================
Synopsis: 
Thumbnail: 
Likes: 
Views: 
Created at: 
Modified at: 
-----------------------------------------------------------------------
Assets
-----------------------------------------------------------------------
Asset 1: 
Asset 2: 
=======================================================================
`;
console.log(generateProject);*/}
)();

