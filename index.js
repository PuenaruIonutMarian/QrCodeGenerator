import inquirer from 'inquirer';
import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
  .prompt([{
    name:"URL",
    message:"Wich link adress do you need a QR code for ?",
    default:"https://www.google.com"
  },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("url.txt", url, (err) =>
    {if(err) throw err;})
  })
  .catch((error) => {
    if (error.isTtyError) {
       "Prompt couldn't be rendered in the current environment"
    } else {
      // Something else went wrong
    }
  });

/* You are going to need to install: 
inquirer npm package and qr-image npm package
inside the terminal : 
node init -y
npm i inquirer qr-image
*/