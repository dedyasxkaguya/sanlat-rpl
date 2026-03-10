const Todaystr = () => {
    const date = new Date().toLocaleDateString('id-ID',{
        weekday:"long",
        day:"numeric",
        month:"long"
    })
    return date
}

export default Todaystr