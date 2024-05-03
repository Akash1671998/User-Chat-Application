import axios from "axios";

function FormateDate(data) {
    if (!data || isNaN(new Date(data))) {
        return "Invalid Date";
    }
    let hours = new Date(data).getHours();
    let minutes = new Date(data).getMinutes();

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}



export const DownloadFile = async (e, originalImage) => {
    console.log("???????????",originalImage)
    debugger
    e.preventDefault();
    try {
        fetch(originalImage)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;

            const nameSplit = originalImage.split("/");
            const duplicateName = nameSplit.pop();

            // the filename you want
            a.download = "" + duplicateName + "";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch((error) => console.log('Error while downloading the image ', error))

    } catch (error) {
        console.log('Error while downloading the image ', error);
    }
}

export default FormateDate;