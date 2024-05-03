const { response } = require("express");
var grid = require("gridfs-stream");
const mongoose = require("mongoose");

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});


let Url = "http://localhost/8090";
const fileUpload = async (request, response) => {
  console.log("????????????????????", request.body);
  if (!request.file) {
    response.json({
      status: "Send File Failed",
      message: "Please select any one file",
    });
  }
  const ImageURL = `${Url}/file/${request.body.name}`;

  response.status(200).json({
    status: "Ok",
    message: "File Send Successfully",
    data: ImageURL,
  });
};

const getFile = async (request,response) => {
  try{
    const file = await gfs.files.findOne({ filename: request.params.name });
    // const readStream = gfs.createReadStream(file.filename);
    // readStream.pipe(response);
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(response);
  }catch(error){
console.log("getFile", error);
    response.status(500).json({
      status: "Internal Server Error",
      message: "Failed to get file",
      messageDetails: "",
    });
  }
};
module.exports = { fileUpload,getFile };
