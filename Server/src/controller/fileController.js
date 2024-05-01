let Url = "http://localhost/8090";
const fileUpload = async (request, response) => {
  if (!request.file) {
    response.json({
      status: "Send File Failed",
      message: "Please select any one file",
    });
  }
  const ImageURL = `${Url}/file/${request.file?.name}`;

  response.status(200).json({
    status: "Ok",
    message: "File Send Successfully",
    data: ImageURL,
  });
};
module.exports = { fileUpload };
