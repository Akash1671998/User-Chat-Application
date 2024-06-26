const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const Storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/',
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

const upload = multer({ Storage });

module.exports = upload;
