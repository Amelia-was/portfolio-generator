const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if error, reject Promise and send error to Promise `catch()`
            if (err) {
                reject(err);
                // return out of function
                return;
            }

            // if okay, resolve promise and send successful data to `then()`
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = file => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet copied!'
            });

        });
    });
};

module.exports = { writeFile, copyFile };
