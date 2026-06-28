import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const songsDirectory = path.join(__dirname , 'public' , 's');
const outputFilePath = path.join(__dirname , 'src' , 'data' , 'album.js');

const generateAlbum = () => {

  try {
    const items = fs.readdirSync(songsDirectory);
    const albums = [];

    for(const item of items){
      const itemPath = path.join(songsDirectory , item);

      if(fs.statSync(itemPath).isDirectory()) {
        const infoFilePath = path.join(itemPath , 'info.json');

        let albumInfo = {title : item  , description : ""};

        if(fs.existsSync(infoFilePath)) {
          const infoContent = fs.readFileSync(infoFilePath , 'utf-8');
          albumInfo = JSON.parse(infoContent);
        }
      
        const files = fs.readdirSync(itemPath);
        const songs = files.filter((file) => file.endsWith('.mp3')).map((file , index) => ({
          id : index + 1,
          title : file.replace('.mp3' , ''),
          folderName : item
        }));

        albums.push({
          title : albumInfo.title,
          description : albumInfo.description,
          coverUrl : `s/${item}/cover.jpg`,
          folderName : item,
          songs : songs
        });
      }
    }

    const fileContent = `export const albumData = ${JSON.stringify(albums , null , 2)};`;

    const dataDir = path.join(__dirname , 'src' , 'data');
    if(!fs.existsSync(dataDir)){
      fs.mkdirSync(dataDir , {recursive: true});
    }

    fs.writeFileSync(outputFilePath, fileContent , 'utf-8');
    console.log(`✅ Successfully generated src/data/albums.js from your folders!`);

  } catch (error) {
    console.log(`❌ Error generating albums:`, error);
  }
};

generateAlbum();