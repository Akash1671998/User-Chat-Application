function FormateDate(data) {
    if (!data || isNaN(new Date(data))) {
        return "Invalid Date";
    }
    let hours = new Date(data).getHours();
    let minutes = new Date(data).getMinutes();

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

export default FormateDate;